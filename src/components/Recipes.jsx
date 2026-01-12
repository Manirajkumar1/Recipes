import React from 'react'

function Recipes({item}) {
  // console.log(item);
  
  return (
    <div className=' bg-white rounded' >
      <div className='justify-items-center'>
        <img src={item.image} alt="" className='rounded-t-2xl '/>
        <h1>{item.name}</h1>
      </div>
    </div>
  )
}

export default Recipes