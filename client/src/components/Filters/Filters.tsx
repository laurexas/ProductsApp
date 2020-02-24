import React, { FC } from 'react';
import style from './index.module.scss';


interface FiltersProps {
    sortDesc: () => void,
    sortAsc: () => void
}

const Filters :FC<FiltersProps> = (props: FiltersProps): JSX.Element => {
    return (
        <div className={style.filters}>
            <h1>Sort By Price: </h1>
            <button onClick={props.sortAsc}>Lowest</button>
            <button onClick={props.sortDesc}>Highest</button>
        </div>
    )
}


export default Filters;