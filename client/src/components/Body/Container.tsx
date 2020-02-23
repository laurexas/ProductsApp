import React, { useEffect, FC } from 'react';
import style from './index.module.scss';
import ProductCard from 'src/components/ProductCard/ProductCard';
import Loader from 'src/components/Loader/Loader';
import { ArrowIcon } from 'src/components/Icon/Icon';


interface ProductsProps {
    fetchProducts: () => void,
    products: {
        total: number,
        data: {
            filename: string, 
            product_name: string, 
            actual_price: number, 
            brand_name: string 
        }[]
    } | null,
    isVisible: boolean,
    scrollToTop: () => void
}

 const Container: FC<ProductsProps> = (props: ProductsProps):JSX.Element => {
    useEffect(() => {
        props.fetchProducts();
    }, [])
   
    
    if(!props.products) return <Loader loading={true} />

    return (
        <div className={style.jumbatron}>
         
            {props.products.data.map((product,i) => (
                <ProductCard key={i} src={product.filename} brand={product.brand_name} price={product.actual_price} name={product.product_name} />
            ))}
            {props.isVisible ? <div className={style.icon} onClick={props.scrollToTop}>
              <ArrowIcon />
            </div> : null}
        </div>
    )
}

export default Container;