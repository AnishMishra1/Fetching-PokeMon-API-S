import React from 'react'

const PokeMon = ({image, name}) => {
  return (
    <div>
        <div>{name}</div>
        <div><img src={image} /></div>
    </div>
  )
}

export default PokeMon