import Layout from '@/components/Layout'
import MuiDate from '@/components/MuiDate'
import React, { ReactElement } from 'react'
import { NextPageWithLayout } from './_app'

const SignUp:NextPageWithLayout = () => {
  return (
    <div className='py-5'>
<h2 className='text-xl font-bold text-center'>Register now for free </h2>

<form action="" className=' w-2/3 mx-auto justify-center grid gap-3 p-3'>
  <div className='grid gap-3 '>

  <div className='flex gap-4 items-center'>
    <label htmlFor="">First name</label>
    <input type="text" className='border rounded h-10  ml-auto' />
  </div>
  <div className='flex gap-4 items-center'>
    <label htmlFor="">Last name</label>
    <input type="text" className='border rounded h-10 ml-auto' />
  </div>
  <div className='flex gap-4 items-center'>
    <label htmlFor="">Email address</label>
    <input type="text" className='border rounded h-10  ml-auto' />
  </div>
  <div className='flex gap-4 items-center'>
    <label htmlFor="">Password</label>
    <input type="password" className='border rounded h-10 ml-auto ' />
  </div>

  <div className='flex gap-4 items-center'>
    <label htmlFor="">Gender</label>
  <span className='ml-auto'> 

    <input type="radio" className='border rounded h-10 ml-auto' name='gender'/> 
    <span>Female</span>
  </span>
  <span>

<input type="radio" className='border rounded h-10' name='gender'/> 
<span>Male</span>
</span>
<span>

<input type="radio" className='border rounded h-10' name='genderx'/> 
<span>Others</span>
</span>
  </div>

  <div className=' grid grid-cols-2 gap-4 items-center'>
  <label htmlFor="" className='text-sm'>Date of birth</label>

    <div className='ml-auto'>
 <MuiDate/>
  
    </div>
   
  </div>

{/* <div>
  <div><p className='text-center'>What do you want to</p></div>
  <div>
    <span>
<span>I want to buy a property</span>
<input type="checkbox" name="" id="" />
    </span>
    <span>
<span>I want to rent a room</span>


<input type="checkbox" name="" id="" />
    </span>
<input type="checkbox" name="" id="" />

  </div>
</div> */}
  </div>


<button className='bg-dark-blue text-milk h-8 '>Register </button>
</form>

    </div>
  )
}


SignUp.getLayout = function getLayout(page:ReactElement){

    return (
      <Layout>
        {page}
      </Layout>
    )
  }
export default SignUp