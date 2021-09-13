import React from "react";
import s from '../Aside/Aside.module.scss';

const CartItem = ({id, imgSrc, name, price, onDelInCart}) => {

    return (
        <div className={`${s.aside_cart_item}`}>
            <div className={`${s.aside_cart_item_img}`}>
                <img src={imgSrc} alt="sneaker" width="80" height="80"/>
            </div>
            <div className={`${s.aside_cart_item_main}`}>
                <div className={`${s.aside_cart_item_main_desc}`}>
                    <p>{name}</p>
                </div>
                <div className={`${s.aside_cart_item_main_price}`}>
                    <span>{price}<span className={`currency`}>грн.</span></span>
                </div>
            </div>
            <div className={`${s.aside_cart_item_action}`}>
                <button className={`${s.aside_cart_item_del} btn`} aria-label={`Del from cart ${id}`} onClick={() => onDelInCart(id)}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12.0799 10.6155L9.6311 8.16673L12.0798 5.71801C13.0241 4.77376 11.5596 3.30934 10.6154 4.25359L8.16668 6.70231L5.71787 4.2535C4.77384 3.30947 3.30947 4.77384 4.2535 5.71787L6.70231 8.16668L4.25359 10.6154C3.30934 11.5596 4.77376 13.0241 5.71801 12.0798L8.16673 9.6311L10.6155 12.0799C11.5597 13.0241 13.0241 11.5597 12.0799 10.6155Z"
                            fill="#B5B5B5"/>
                    </svg>
                </button>
            </div>
        </div>
    )
};

export default CartItem;