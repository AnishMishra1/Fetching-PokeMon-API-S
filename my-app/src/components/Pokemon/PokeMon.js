import React from 'react'

const Mon = ({image, name}) => {
  return (
    <div>
        <div>{name}</div>
        <div><img src={image} /></div>
    </div>
  )
}

export default Mon;