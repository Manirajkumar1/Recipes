import { Link } from 'react-router-dom'


function Recipes({item}) {
  // console.log(item);
  
  return (
    <Link to={`/recipe/${item.id}`}>
    <div className=' bg-white pb-2' >
      <div className='justify-items-center'>
        <img src={item.image} alt="" className='rounded-t-2xl '/>
        <h1 className='truncate'>{item.name}</h1>
        <p>Rating: <span className='bg-orange-500 px-2 rounded-md text-white font-semibold'>{item.rating}</span></p>
      </div>
    </div>
    </Link>
  )
}

export default Recipes