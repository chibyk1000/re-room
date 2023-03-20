import Layout from '@/components/Layout'
import React, { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'

const Login:NextPageWithLayout = () => {
  return (
    <div className='py-7'>
        <h1 className='uppercase text-3xl text-center text-dark-blue my-4'>Login </h1>
        <form action="" className='w-3/5 border shadow mx-auto p-4'>
            <div className='my-4'>
                <p>Email</p>
    <input type="text" className='border rounded h-10 w-full  ml-auto' />
                
            </div>
            <div className=''>
                <p>Password</p>
    <input type="text" className='border rounded h-10 w-full  ml-auto' />
                
            </div>

            <div className='flex items-center gap-3 my-3'>
    <input type="checkbox" className='border rounded ' />
                <label htmlFor="">Remember me</label>
                
            </div>
            <div className='flex justify-end'>

<button className='bg-dark-blue text-milk h-8 px-5'>Login</button>
            </div>

        </form>
    </div>
  )
}


Login.getLayout = function getLayout(page:ReactElement){

    return (
      <Layout>
        {page}
      </Layout>
    )
  }
  
export default Login