import React from 'react';
import './Pokemon.css'


const Mon = ({image, name}) => {
   return (
    <div className='poke'>
        <div>{name}</div>
        <div id='image'><img src={image} /></div>
    </div>
  )
}
export default Mon;