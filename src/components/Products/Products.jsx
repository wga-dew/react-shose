import React from "react";
import s from './Products.module.scss';
import {Card} from "../../templates";
import {CardLoader} from "../../templates/Loader";

const Products = ({items, cartItems, favorites, isFetchingCard, searchValue, onSearchInput, onAddToCart, onAddToFavorite}) => {


    const sneakers = items.filter(obj => {
        let name = obj.name.toLowerCase();
        let searchText = searchValue.toLowerCase();
        return  name.includes(searchText);
    }).map(item => <Card
        key={item.id}
        {...item}
        onAddToCart={onAddToCart}
        onAddToFavorite={onAddToFavorite}
        isInCart={Boolean(cartItems.filter(itm => itm.id === item.id).length)}
        isInFavorite={Boolean(favorites.filter(itm => itm.favorite === item.id).length)}
    />);

    const loading = (new Array(12)).fill(1).map((itm, i) => <CardLoader key={i} />);

    return (
        <div className={`${s.page_product}`}>
            <div className={`${s.page_product__top}`}>
                <h1 className={`${s.main_title}`}>
                    {
                        searchValue.length > 0
                            ? `Поиск по запросу: "${searchValue}"`
                            : "Все кроссовки"
                    }
                </h1>
                <div className={`${s.search_block}`}>
                    <svg className={`${s.search_icon}`} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.25 15.25L11.8855 11.8795L15.25 15.25ZM13.75 7.375C13.75 9.06576 13.0784 10.6873 11.8828 11.8828C10.6873 13.0784 9.06576 13.75 7.375 13.75C5.68424 13.75 4.06274 13.0784 2.86719 11.8828C1.67165 10.6873 1 9.06576 1 7.375C1 5.68424 1.67165 4.06274 2.86719 2.86719C4.06274 1.67165 5.68424 1 7.375 1C9.06576 1 10.6873 1.67165 11.8828 2.86719C13.0784 4.06274 13.75 5.68424 13.75 7.375V7.375Z" stroke="#E4E4E4" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    <input type="text" placeholder={`Поиск...`} onChange={onSearchInput} value={searchValue} />
                </div>
            </div>
            <div className={`${s.products_container}`}>
                {!isFetchingCard && sneakers ? sneakers : loading}
            </div>
        </div>
    )
};

export default Products;