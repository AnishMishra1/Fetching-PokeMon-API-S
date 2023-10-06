import React from 'react';
import './Pokemon.css'
import { Link } from 'react-router-dom';


const Mon = ({image, name ,id}) => {
   return (
    <div className='poke'>
      <Link to= {`/pokemon/${id}`}>
      <div>{name}</div>
        <div id='image'><img src={image} /></div>
      </Link>
        
    </div>
  )
}
export default Mon;