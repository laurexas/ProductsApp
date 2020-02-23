import React, { FC } from 'react';
import style from './index.module.scss';


interface ButtonProps {
    changePage: (page:number) => void, 
    page:number
}

const Button:FC<ButtonProps> = (props:ButtonProps):JSX.Element => {
    return (
        <div>   
            <button className={style.btn} onClick={() => props.changePage(props.page + 1)}>
                Load more...
            </button>
        </div>
    )
}

export default Button;