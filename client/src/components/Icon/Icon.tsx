import React, { FC } from 'react';
import style from './index.module.scss';


interface ClassName {
    className?: string,
    onClick?: () => void,
    style?: {
        fill: string
    }
}
export const Icon : FC<ClassName> = (props:ClassName) : JSX.Element => {
    return (
        <svg id="love" viewBox="0 -21 448 448" className={props.className} onClick={props.onClick} style={props.style}>
            <path d="m224 406.902344c29.382812-16.214844 224-129.496094 224-282.902344 0-66.054688-54.199219-124-116-124-41.867188.0742188-80.460938 22.660156-101.03125 59.128906-1.539062 2.351563-4.160156 3.765625-6.96875 3.765625s-5.429688-1.414062-6.96875-3.765625c-20.570312-36.46875-59.164062-59.0546872-101.03125-59.128906-61.800781 0-116 57.945312-116 124 0 153.40625 194.617188 266.6875 224 282.902344zm0 0"/>
        </svg>
    )
}


export const ArrowIcon : FC<ClassName> = (props:ClassName) : JSX.Element => {
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        height="38.735"
        width="33.749"
        >
        <g transform="translate(-18.121 -3.364)">
        <rect
            ry="4.928"
            y="3.364"
            x="18.121"
            height="38.735"
            width="33.749"
            fill="#222222"
        />
        <g transform="translate(-.48 2.134)">
            <rect
            ry="4.928"
            y="1.229"
            x="18.601"
            height="38.735"
            width="33.749"
            fill="url(#b)"
            />
            <g fill="#ececec">
            <path d="M22.435 17.62l4.684 4.685 5.044-5.044v19.352h6.625V17.26l5.044 5.044 4.683-4.684-13.04-13.04z" />
            <path d="M22.435 17.62l4.684 4.685 5.044-5.044v19.352h6.625V17.26l5.044 5.044 4.683-4.684-13.04-13.04z" />
            </g>
        </g>
        </g>
        </svg>
    )
}

