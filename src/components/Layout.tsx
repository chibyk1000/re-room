import React, { ReactElement } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
interface PageProps{
    children: ReactElement
}

const Layout = ({children}:PageProps) => {
  return (
    <>
    <Navbar/>
    {children}
    <Footer/>
    </>
  )
}

export default Layout