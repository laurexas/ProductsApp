import React, { FC, useState, useEffect } from 'react';
import style from './index.module.scss';
import ProductCard from 'src/components/ProductCard/ProductCard';
import axios, { AxiosResponse } from 'axios';


interface Products {
    filename: string, 
    product_name: string, 
    actual_price: number, 
    brand_name: string 
}


const Container: FC = ():JSX.Element => {

    const fetchData = async () => {
        const { data } : AxiosResponse<Products[]> = await axios.get('http://localhost:8888/products');
        setProducts(data)
    } 

    const [ products, setProducts ] = useState<null | Products[] >(null);

    useEffect(() => {
        fetchData()
    }, [])

    if(!products) return <p>Loading</p> 

    return (
        <div className={style.jumbatron}>
            {products.map(product => (
                <ProductCard src={product.filename} brand={product.brand_name} price={product.actual_price} name={product.product_name} />
            ))}
        </div>
    )
}

export default Container;