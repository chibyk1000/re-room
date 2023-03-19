import {  Search } from '@mui/icons-material'



const Hero = () => {
  return (
    <section className='min-h-[70dvh] grid bg-dark-blue/50 relative'>

<img src="/images/hero.jpg" alt=""  className='absolute object-cover w-full h-full -z-10'/>
<div className='grid    place-items-center'> 

<div className=' w-2/3 '>
  
  <h2 className='text-white text-5xl text-center  mb-10'>Find A Perfect Home </h2>
<form action="" className="mx-auto ">
  <div className='flex gap-3'>

<div className='bg-white flex items-center focus:outline-red-500 focus:outline-[5px] w-full   rounded '>
  <Search fontSize='large' htmlColor='#00235B'/> 
  <input type="text" className='w-full h-12 focus:outline-none bg-transparent'/>
</div>

<button className='bg-dark-red text-milk px-5 py-2 rounded text-lg'>Search</button>
  </div>
<div className='flex mx-auto w-fit  gap-5 items-center text-white mt-3'>
  <div className=''>
<label htmlFor="rooms">Rooms</label>
  <input type="radio" name='searchType' className='bg-transparent checked:bg-transparent ml-2' defaultChecked={true} />
  </div>
  <div>
  <label htmlFor="rooms">Houses</label>

  <input type="radio"  name='searchType'  className='ml-2' />
  </div>
  <div>
<label htmlFor="rooms">Flatmates</label>

  <input type="radio"  name='searchType' className='ml-2'/>
  </div>


</div>
</form>

</div>
</div>
    </section>
  )
}

export default Hero