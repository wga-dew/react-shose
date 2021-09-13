import React from "react";

import CartItem from "../CartItem/CartItem";
import s from './Aside.module.scss';


const AsideCart = ({cartItems, isOpenAside, onOpenAside, onDelInCart}) => {

    const cartItemsEl = cartItems.items.map((item) => <CartItem key={item.id} {...item} onDelInCart={onDelInCart} />);
    const totalPrice = cartItems.totalPrice.toFixed(2);
    const totalTax = totalPrice > 0 ? (totalPrice * 0.05).toFixed(2) : 0;

    return (
        <div className={`${s.aside} ${isOpenAside ? ` ${s.active}` : ''}`}>
            {
                cartItemsEl && cartItemsEl.length > 0
                    ?  <div className={`${s.aside_cart}`}>
                            <div className={`${s.aside_head}`}>
                                <h3 className={`${s.aside_title}`}>Корзина</h3>
                                <button className={`btn`} aria-label={`Close cart`} onClick={() => onOpenAside(false)}>
                                    <img width='16' height='16' src={`/sneakers/del.svg`} alt={`close`} loading={'lazy'}/>
                                </button>
                            </div>
                            <div className={`${s.aside_body}`}>
                                <div className={`${s.aside_cart_items}`}>
                                    {cartItemsEl}
                                </div>
                            </div>
                            <div className={`${s.aside_footer}`}>
                                <div className={`${s.aside_cart_checkout_total}`}>
                                    <div className={`${s.aside_cart_total} ${s.aside_cart_total_price}`}>
                                        <div className={`${s.aside_cart_checkout_total_title}`}>
                                            Итого:
                                        </div>
                                        <div className={`${s.line}`}></div>
                                        <div className={`${s.aside_cart_checkout_total_sum}`}>
                                            <span>{totalPrice}<span className={`currency`}>грн.</span></span>
                                        </div>
                                    </div>
                                    <div className={`${s.aside_cart_total} ${s.aside_cart_tax}`}>
                                        <div className={`${s.aside_cart_checkout_total_title}`}>
                                            Налог 5%:
                                        </div>
                                        <div className={`${s.line}`}></div>
                                        <div className={`${s.aside_cart_checkout_total_sum}`}>
                                            <span>{totalTax}<span className={`currency`}>грн.</span></span>
                                        </div>
                                    </div>
                                    <button className={`${s.aside_cart_checkout_btn} btn btn_main`}><span className={'go_to'}>Оформить заказ</span></button>
                                </div>
                            </div>
                        </div>
                    :  <div className={`${s.aside_cart_empty}`}>
                            <div className={`${s.aside_cart_empty_img}`}>
                                <img src={'/sneakers/box.jpg'} alt="Cart empty" width="120" height="120"/>
                            </div>
                            <div className={`${s.aside_cart_empty_desc}`}>
                                <h3 className={`${s.aside_cart_empty_desc_tit}`}>Корзина пустая</h3>
                                <p className={`${s.aside_cart_empty_desc_text}`}>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
                            </div>
                            <button className={`btn btn_main`} onClick={() => onOpenAside(false)}><span className={'back_to'} >Вернуться назад</span></button>
                        </div>
            }



            <div className={`${s.aside_cart_success}`} style={{display: 'none'}}>
                <div className={`${s.aside_cart_success_img}`}>
                    <img src={'/sneakers/note.jpg'} alt="Cart success" width="120" height="120"/>
                </div>
                <div className={`${s.aside_cart_success_desc}`}>
                    <h3 className={`${s.aside_cart_success_desc_tit}`}>Заказ оформлен!</h3>
                    <p className={`${s.aside_cart_success_desc_text}`}>Ваш заказ #18 скоро будет передан курьерской доставке</p>
                </div>
                <button className={`btn btn_main`} onClick={() => onOpenAside(false)}><span className={'back_to'} >Вернуться назад</span></button>
            </div>
        </div>
    )
};

export default AsideCart;