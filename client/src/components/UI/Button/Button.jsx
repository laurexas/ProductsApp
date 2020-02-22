import React from 'react';
import style from './index.module.scss';

const Button = () => {
    return (
        <div>   
            <button className={style.btn}>
                Load more...
            </button>
        </div>
    )
}

export default Button;