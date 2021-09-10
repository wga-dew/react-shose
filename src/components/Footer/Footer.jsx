import React from "react";
import s from './Footer.module.scss';
import {AsideCart} from "../../templates";


const Footer = () => {

    return (
        <footer>
            <AsideCart />
            <div className={`${s.overflow}`}></div>
        </footer>
    )
};

export default Footer;