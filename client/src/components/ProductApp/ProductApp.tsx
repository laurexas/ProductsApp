import React, { useState, useEffect, useRef } from 'react';
import Header from 'src/components/Header/Header';
import Body from 'src/components/Body/Container';
import Button from 'src/components/UI/Button/Button';
import Filters from 'src/components/Filters/Filters';
import axios, { AxiosResponse } from 'axios';




interface Products {
    total: number,
    data: {
        filename: string, 
        product_name: string, 
        actual_price: number, 
        brand_name: string 
    }[]
}

const ProductApp = () => {
    const didMountRef = useRef(false)
    const [ products, setProducts ] = useState<null | Products>(null);
    const [ page, changePage ] = useState<number>(1);
    const limit = 52;
    const fetchProductsNumber = page * limit;
    const [ isVisible, setVisibility] = useState<boolean>(false);

  
    const fetchData = async () => {
        const { data } : AxiosResponse<Products> = await axios.get(`http://localhost:8888/products?page=${page}&limit=${limit}`);
        if(!products) {
            setProducts(data)
        } else {
            setProducts({total: products.total, data: [...products.data,...data.data]})
          
        }
    }
    
    useEffect(() => {
       if(didMountRef.current) {
            fetchData();
       }
       else {
           didMountRef.current = true;
       }
    }, [page])

    useEffect(() => {
        document.addEventListener("scroll", function(e) {
            toggleVisibility();
        });
        return (
            document.removeEventListener('scroll', toggleVisibility)
        )
    })

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
  
    

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setVisibility(true)
          } else {
            setVisibility(false)
          }
    }

    const sortAsc = () => {
        const sorted = products && products.data.sort((a,b) => a.actual_price - b.actual_price);
        if(!products) {
            return null;
        } else {
            setProducts({"total": products.total, data: [...sorted]})
        }   
       
    }

    const sortDesc = () => {
        const sorted = products && products.data.sort((a,b) => b.actual_price - a.actual_price);
        
        if(!products) {
            return null;
        } else {
            setProducts({"total": products.total, data: [...sorted]})
        }   
       
    }


    return (
        <div>
            <Header />
            <Filters sortAsc={sortAsc} sortDesc={sortDesc}/>
            <Body fetchProducts={fetchData} products={products} isVisible={isVisible}  scrollToTop={scrollToTop} />
            {products && products.total > fetchProductsNumber ? <Button changePage={changePage} page={page}/> : null}    
        </div>
    )
}

export default ProductApp;