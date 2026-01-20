import { Link } from 'react-router-dom'


function Recipes({item}) {
  // console.log(item);
  
  return (
    <Link to={`/recipe/${item.id}`}>
    <div className=' bg-white rounded' >
      <div className='justify-items-center'>
        <img src={item.image} alt="" className='rounded-t-2xl '/>
        <h1>{item.name}</h1>
      </div>
    </div>
    </Link>
  )
}

export default Recipes