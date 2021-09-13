import React from "react";
import s from './Footer.module.scss';
import {AsideCart} from "../../templates";


const Footer = ({cartItems, isOpenAside, onOpenAside, onDelInCart}) => {

    return (
        <footer>
            <AsideCart cartItems={cartItems} isOpenAside={isOpenAside} onOpenAside={onOpenAside} onDelInCart={onDelInCart} />
            <div className={`${s.overflow}${isOpenAside ? ` ${s.active}` : ''}`} onClick={() => onOpenAside(false)}></div>
        </footer>
    )
};

export default Footer;