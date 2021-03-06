import React from 'react';
import style from './index.module.scss';


interface LoadingProps {
  loading: boolean,
  className?:string
}
const Loader = (props:LoadingProps) => {
  if(props.loading){
    return (
      <div className={[style.lds_ripple, props.className].join(' ')}>
        <div/>
        <div/>
      </div>
    )
  }else{
    return null
  }
};


export default Loader;