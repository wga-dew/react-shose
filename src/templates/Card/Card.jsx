import React from "react";
import s from './Card.module.scss';


const Card = ({id, name, price, imgSrc, isInCart, isInFavorite, onAddToCart, onAddToFavorite}) => {

    return (
        <div className={`${s.product_cart}`}>
            <div className={`${s.product_cart__head}`}>
                <button className={`${s.product_cart__add_to_favorite}${isInFavorite ? ` ${s.added}` : ''} btn`} aria-label={`Add to favorite`} onClick={() => onAddToFavorite(id)}>
                    <img width='15' height='14' src={`${!isInFavorite ? '/sneakers/favorite-card.svg' : '/sneakers/favorite-added.svg'}`} alt={`added ${isInFavorite}`} loading={'lazy'}/>
                </button>
                <img src={imgSrc} alt={name} width="640" height="360" loading={'lazy'}/>
            </div>
            <div className={`${s.product_cart__body}`}>
                <div className={`${s.product_cart__name}`}>
                    <p>{name}</p>
                </div>
            </div>
            <div className={`${s.product_cart__bottom}`}>
                <div className={`${s.product_cart__price}`}>
                    <span className={`${s.product_cart__price__title}`}>Цена:</span>
                    <span>{price}<span className={`currency`}>грн.</span></span>
                </div>
                <button className={`${s.product_cart__add_to_cart} btn${isInCart ? ` ${s.added}`: ''}`} aria-label={`Add to cart`} onClick={() => onAddToCart(id)}>
                    <img width='15' height='14' src={`${!isInCart ? '/sneakers/plus.svg' : '/sneakers/success.svg'}`} alt={`added ${isInCart}`} loading={'lazy'}/>
                </button>
            </div>
        </div>
    )
};

export default Card;