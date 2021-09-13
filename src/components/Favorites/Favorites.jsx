import React from "react";
import s from './Favorites.module.scss';
import {Card} from "../../templates";


const Favorites = ({items, favorites, cartItems, onAddToCart, onAddToFavorite}) => {

    const sneakers = favorites.map(fav => {
        const current = +fav.favorite - 1;
        const id = items[current].id;

        return <Card
            // key={fav.id}
            {...items[current]}
            onAddToCart={onAddToCart}
            onAddToFavorite={onAddToFavorite}
            isInCart={Boolean(cartItems.filter(itm => itm.id === id).length)}
            isInFavorite={true}
        />;
    });

    console.log(sneakers)

    return (
        <div className={`${s.page_favorites}`}>
            <div className={`${s.page_favorites__top}`}>
                <h1 className={`${s.main_title}`}>Мои закладки</h1>
            </div>
            <div className={`${s.favorites_container}`}>
                {sneakers.length <= 0 ? '' : sneakers}
            </div>
        </div>
    )
};

export default Favorites;