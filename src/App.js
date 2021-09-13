import React from "react";
import axios from "axios";
import {Route, Switch} from "react-router-dom";

import {Favorites, Footer, Header, Products} from "./components";


function App() {
    const [items, setItems] = React.useState([]);
    const [cartItems, setCartItems] = React.useState({
        items: [],
        totalPrice: 0,
    });
    const [favorites, setFavorites] = React.useState([]);
    const [searchValue, setSearchValue] = React.useState('');
    const [isOpenAside, onOpenAside] = React.useState(false);
    const [isFetchingCard, setIsFetchingCard] = React.useState(false);


    const onAddToCart = (id) => {
        let obj = items.find(itm => itm.id === id);
        setCartItems(prev => {
            if (prev.items.findIndex(itm => itm.id === id) !== -1) {
                let newItems = prev.items.filter(itm => itm.id !== id);
                let totalPrice = newItems.length > 0 ? newItems.reduce((p, n) => p + n.price, 0) : 0;
                postCartItems({items: [...newItems], totalPrice});
                return {items: [...newItems], totalPrice};
            } else {
                let newItems = [...prev.items, obj];
                let totalPrice = newItems.length > 0 ? newItems.reduce((p, n) => p + n.price, 0) : 0;
                postCartItems({items: [...newItems], totalPrice});
                return {items: [...newItems], totalPrice};
            }
        });
    }

    const onAddToFavorite = (id) => {
        postFavorites({"favorite": id});
    }

    const onSearchInput = (e) => {
        setSearchValue(e.target.value);
    }

    const postCartItems = (obj) => {
        const id = sessionStorage.getItem('cartID') ? sessionStorage.getItem('cartID') : 'false';

        sessionStorage.setItem('cartID', id);

        if (id === 'false') {
            axios.post(`https://6107faecd73c6400170d3757.mockapi.io/cart/`, obj)
                .then(res => {
                    return res.data
                }).then(res => {
                sessionStorage.setItem('cartID', res.id);
            })
        } else {
            axios.put(`https://6107faecd73c6400170d3757.mockapi.io/cart/${id}`, obj)
                .catch((err) => {
                });
        }
    }

    const postFavorites = (obj) => {
        if (favorites.findIndex(itm => +itm.favorite === +obj.favorite) === -1) {
            axios.post(`https://6107faecd73c6400170d3757.mockapi.io/favorite`, obj)
                .then(res => {
                    setFavorites([...favorites, {id: res.data.id, favorite: res.data.favorite}])
                })
        } else {
            axios.delete(`https://6107faecd73c6400170d3757.mockapi.io/favorite/${favorites.find(itm => +itm.favorite === +obj.favorite).id}`)
                .then(() => {
                    setFavorites([...favorites.filter(itm => +itm.favorite !== +obj.favorite)]);
                })
        }
    }

    return (
        <div className={`container all_content`}>
            <Header onOpenAside={onOpenAside} totalPrice={cartItems.totalPrice} setItems={setItems} setIsFetchingCard={setIsFetchingCard} setFavorites={setFavorites} setCartItems={setCartItems}/>
            <main className={`main`}>
                <Switch>
                    <Route exact path="/">
                        <Products
                            items={items}
                            cartItems={cartItems.items}
                            favorites={favorites}
                            isFetchingCard={isFetchingCard}
                            setItems={setItems}
                            setCartItems={setCartItems}
                            onAddToCart={onAddToCart}
                            onAddToFavorite={onAddToFavorite}
                            searchValue={searchValue}
                            onSearchInput={onSearchInput}
                        />
                    </Route>
                    <Route exact path="/favorites">
                        <Favorites
                            items={items}
                            favorites={favorites}
                            cartItems={cartItems.items}
                            setFavorites={setFavorites}
                            onAddToCart={onAddToCart}
                            onAddToFavorite={onAddToFavorite}
                        />
                    </Route>
                </Switch>
            </main>
            <Footer cartItems={cartItems} isOpenAside={isOpenAside} onOpenAside={onOpenAside}
                    onDelInCart={onAddToCart}/>
        </div>
    );
}

export default App;
