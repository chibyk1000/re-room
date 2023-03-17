import Link from "next/link"

const Navbar = ()=>{
    return(
        <nav className="flex  justify-between items-center border-b px-10">

            <Link href='/' className="text-dark-blue text-[4rem]">
              ReRoom
            </Link>
            <ul className="flex  w-8/12 gap-4 text-dark-blue items-center">
                <li><Link href='' className="hover:bg-dark-blue  hover:text-milk py-4 px-2">HOME</Link></li>
                <li><Link href='' className="hover:bg-dark-blue  hover:text-milk py-4 px-2">ABOUT US</Link></li>
                <li><Link href='' className="hover:bg-dark-blue  hover:text-milk py-4 px-2 ">RESERVATIONS</Link></li>
                <li className="ml-auto" ><Link href='' className=" bg-dark-blue text-milk py-3 px-3 rounded focus:outline-1">Register</Link></li>
                <li><Link href=''>Login</Link></li> 


                
            </ul>

        </nav>
    )
}

export default Navbar