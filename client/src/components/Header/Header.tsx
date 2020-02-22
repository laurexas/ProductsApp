import React, { FC } from 'react';
import style from './index.module.scss';

const Header: FC = () : JSX.Element => {
    return (
        <div className={style.header}>
            <div> 
                <h1>Boozt<span>.com</span></h1>
            </div>  
            <div className={style.links}>
                <h3>Shoes</h3>
                <h3>Bags</h3>
                <h3>Underwear</h3>
                <h3>Sport</h3>
            </div>
        </div>
    )
}


export default Header;