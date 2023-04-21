import React from 'react'



export const GridItems = ({url,title,id}) => {
  return (
    <div className='card'>
        <img src={url} alt={title}  />
    </div>
  )
}
