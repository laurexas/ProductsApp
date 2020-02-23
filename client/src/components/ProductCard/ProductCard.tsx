import React, { FC, useState } from 'react';
import style from './index.module.scss';
import {Icon} from '../Icon/Icon';


interface Product {
    src: string,
    name: string, 
    price: number, 
    brand: string 
}

const ProductCard: FC<Product> = (props: Product) : JSX.Element => {
    const [like, setLike] = useState<boolean>(false);
    return (
        <div className={style.container}>
            <div className={style.card}>
                <img src={props.src} alt="product" />
                <div className={style.marker}>
                    <div className={style.priceTag}>
                        {props.price} $
                    </div>
                    <Icon style={like ? {fill: '#ee481e'} : undefined}className={style.icon} onClick={() => setLike(!like)}/>
                </div>
            </div>
            <div className={style.details}>
                <div className={style.productHeader}>
                    <h3 className={style.itemName}>
                        {props.brand}
                    </h3>
                    <h3 className={style.itemName}>
                        {props.name}
                    </h3>
                </div>
                <span className={style.itemPrice}>{props.price} $</span>
            </div>
        </div>
    )
}


export default ProductCard;

