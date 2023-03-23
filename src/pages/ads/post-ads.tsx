
import Layout from '@/components/Layout'
import React, { ReactElement } from 'react'
import type { NextPageWithLayout } from '../_app'
import Image from 'next/image'
const PostAds:NextPageWithLayout = () => {
  return (
    <div>

        <main className='w-8/12 mx-auto'>

<h1 className='text-2xl '>Post Adverts for free</h1>

<h2>What do you want to advertise?</h2>

<div className='flex items-center gap-4 border shadow p-2 rounded my-3 h-40'>
    <div className='h-20 w-20'>

<Image src='/images/property.jpg' alt="" width={100} height={100} className="rounded-full object-cover h-full w-full"/>
    </div>

    <div className='basis-8/12'>
        <h2 className='text-dark-blue text-2xl'>Rent a Property</h2>
        <p className='text-[.9rem]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, minima voluptate. Mollitia quam tempora facilis animi et quidem porro voluptatum!</p>
    </div>
    <div className='basis-2-12'>

    <button  className='bg-milk text-dark-blue px-3 py-1'>Post Ads</button>
    </div>
</div>

<div className='flex items-center gap-4 border shadow p-2 rounded my-3 h-40 '>
    <div className='h-20 w-20 '>

<Image src='/images/sell-property.jpg' alt="" width={100} height={100} className="rounded-full w-full h-full object-cover"/>
    </div>

    <div className='basis-8/12'>
        <h2 className='text-dark-blue text-2xl'>Sell a   Property</h2>
        <p className='text-[.9rem]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, minima voluptate. Mollitia quam tempora facilis animi et quidem porro voluptatum!</p>
    </div>
    <div className='basis-2-12'>

    <button  className='bg-milk text-dark-blue px-3 py-1'>Post Ads</button>
    </div>
</div>

<div className='flex items-center gap-4 border shadow p-2 rounded my-3 h-40'>
    <div className='h-20 w-20'>

<Image src='/images/room.jpg' alt="" width={100} height={100} className="rounded-full w-full h-full"/>
    </div>

    <div className='basis-8/12'>
        <h2 className='text-dark-blue text-2xl'>Rent a Room</h2>
        <p className='text-[.9rem]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, minima voluptate. Mollitia quam tempora facilis animi et quidem porro voluptatum!</p>
    </div>
    <div className='basis-2-12'>

    <button  className='bg-milk text-dark-blue px-3 py-1'>Post Ads</button>
    </div>
</div>
        </main>

    </div>
  )
}


 PostAds.getLayout =  function getLayout(page:ReactElement){

    return (
      <Layout>
        {page}
      </Layout>
    )
  }

export default PostAds