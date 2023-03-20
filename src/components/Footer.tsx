import Link from 'next/link'
import {  FacebookTwoTone, Instagram, Twitter } from '@mui/icons-material'
import React from 'react'

const Footer = () => {
  return (
    <section className='min-h-[50dvh] bg-dark-blue grid place-content-center' >

    <div className=' text-white flex justify-between w-[80dvw] mx-auto flex-wrap'>
  
    <div>
      <h3 className='text-3xl font-bold my-4'>About Re-Room</h3>
      <ul className='text-[.8rem] grid gap-2'>
        <li><Link href="" className='hover:underline'>About Us</Link></li>
  
        <li><Link href="" className='hover:underline'>  Why Use Re-Room</Link></li>
        <li><Link href="" className='hover:underline'>  How  Re-Room works</Link></li>
        <li><Link href="" className='hover:underline'>  Terms and Conditions</Link></li>
        <li><Link href="" className='hover:underline'>  Privacy Policy</Link></li>
  
  
  
      </ul>
    </div>
    <div>
      <h3 className='text-3xl font-bold my-4'>Our Services</h3>
      <ul className='text-[.8rem] grid gap-2'>
        <li><Link href="" className='hover:underline'>Advertise a Room</Link></li>
  
        <li><Link href="" className='hover:underline'>  Post a room</Link></li>
        <li><Link href="" className='hover:underline'>  Adveritise a Property</Link></li>
        <li><Link href="" className='hover:underline'>  Find Roomates</Link></li>
        <li><Link href="" className='hover:underline'>  Privacy Policy</Link></li>
  
  
  
      </ul>
    </div>
  
  
    <div>
      <h3 className='text-3xl font-bold my-4'>Contact Us</h3>
      <ul className='text-[.8rem] grid gap-2'>
        <li><Link href="" className='hover:underline'>Send Us  a mail</Link></li>
  
        <li><Link href="" className='hover:underline'>  Call us:01673829383</Link></li>
        <li><Link href="" className='hover:underline'>  How  Re-Room works</Link></li>
    
        <li>Follow us<Link href="" className='hover:underline'><FacebookTwoTone/> </Link> <Link href=''><Instagram/></Link><Link href=''> <Twitter/></Link></li>
  
  
  
      </ul>
    </div>
  
  
  
    <div>
      <h3 className='text-3xl font-bold my-4'>Account</h3>
      <ul className='text-[.8rem] grid gap-2'>
        <li><Link href="" className='hover:underline'>Create Account</Link></li>
  
        <li><Link href="" className='hover:underline'>  Login</Link></li>
        <li><Link href="" className='hover:underline'>  Account Recovery</Link></li>
  
  
  
  
      </ul>
    </div>
    </div>
  </section>
  
  )
}

export default Footer