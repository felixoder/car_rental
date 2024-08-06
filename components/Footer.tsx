import Link from 'next/link'
import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className='bg-footer_color p-24'>
        <div className="flex flex-col md:hidden">
            <img src="./logo.svg" alt="logo" />
            <div className="flex flex-col">
            <div className="flex gap-3 mb-5">
                    <img src="./location.svg" className='w-[13px] h-[19px]' alt="" />
                    <p className='text-white text-sm font-semibold'>
                    New Town, Siliguri, West Bengal - 734265 
                    </p>
                </div>
                <div className="flex gap-3 mb-5">
                    <img src="./mail.svg" className='w-[15px] h-[13px]' alt="" />
                    <p className='text-white text-sm font-semibold'>
                    contact@siliguricarrental.com
                    </p>
                </div>
                <div className="flex gap-3 mb-5">
                    <img src="./number.svg" className='w-[18.545px] h-[16.38px]' alt="" />
                    <p className='text-white text-sm font-semibold'>
                    +91 12345 67890
                    </p>
                </div>
            </div>
        </div>

<div className='hidden md:flex md:flex-col justify-center items-center'>
        <div className="grid grid-cols-2">
            <div className="flex flex-col justify-center items-center">
            <img src="./logo.svg" alt="logo" className='w-[228.38px] h-[163px]' />
            <div className="flex flex-col  gap-1 ">
                <div className="flex gap-2  items-center mb-5">
                <h1 className='text-xl font-bold text-white'>Contact Info</h1>
                <div className="h-[2px] w-[66px] bg-header-red"></div>
                </div>
            
            <div className="flex flex-col">
                <div className="flex gap-3 mb-5">
                    <img src="./location.svg" className='w-[13px] h-[19px]' alt="" />
                    <p className='text-white text-sm font-semibold'>
                    New Town, Siliguri, West Bengal - 734265 
                    </p>
                </div>
                <div className="flex gap-3 mb-5">
                    <img src="./mail.svg" className='w-[15px] h-[13px]' alt="" />
                    <p className='text-white text-sm font-semibold'>
                    contact@siliguricarrental.com
                    </p>
                </div>
                <div className="flex gap-3 mb-5">
                    <img src="./number.svg" className='w-[18.545px] h-[16.38px]' alt="" />
                    <p className='text-white text-sm font-semibold'>
                    +91 12345 67890
                    </p>
                </div>
            </div>
            </div>
         
            </div>

            <div className="flex gap-5 justify-end mr-10">

        
            <div className="flex flex-col justify-end items-center">
                <div className="">
                <div className="flex gap-2  items-center mb-5">
                <h1 className='text-xl font-bold text-white'>Our Services</h1>
                <div className="h-[2px] w-[66px] bg-header-red"></div>
                </div>
                <div className="flex flex-col gap-5 text-white ">
                    <Link href='/' className='hover:text-header-red'>  Home</Link>
                    <Link href='/' className='hover:text-header-red'>  About us</Link>
                    <Link href='/' className='hover:text-header-red'>  Car Rental</Link>
                    <Link href='/' className='hover:text-header-red'>  Corporate car Rental</Link>
                    <Link href='/' className='hover:text-header-red'>   Destination</Link>
                    <Link href='/' className='hover:text-header-red'>  Packages</Link>
                    <Link href='/' className='hover:text-header-red'>   Service Car</Link>
                    <Link href='/' className='hover:text-header-red'>   Contact Us</Link>
                </div>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="">
                <div className="flex gap-2  items-center mb-5">
                <h1 className='text-xl font-bold text-white'>Important Links</h1>
                <div className="h-[2px] w-[66px] bg-header-red"></div>
                </div>
                <div className="flex flex-col gap-5 text-white">
                    <Link href='/' className='hover:text-header-red'>  Home</Link>
                    <Link href='/' className='hover:text-header-red'>  About us</Link>
                    <Link href='/' className='hover:text-header-red'>  Car Rental</Link>
                    <Link href='/' className='hover:text-header-red'>  Corporate car Rental</Link>
                    <Link href='/' className='hover:text-header-red'>   Destination</Link>
                    <Link href='/' className='hover:text-header-red'>  Packages</Link>
                    <Link href='/' className='hover:text-header-red'>   Service Car</Link>
                    <Link href='/' className='hover:text-header-red'>   Contact Us</Link>
                </div>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="">
                <div className="flex gap-2  items-center mb-5">
                <h1 className='text-xl font-bold text-white'>Important Links</h1>
                <div className="h-[2px] w-[66px] bg-header-red"></div>
                </div>
                <div className="flex flex-col gap-5 text-white">
                    <Link href='/' className='hover:text-header-red' >  Home</Link>
                    <Link href='/' className='hover:text-header-red' >  About us</Link>
                    <Link href='/' className='hover:text-header-red' >  Car Rental</Link>
                    <Link href='/' className='hover:text-header-red' >  Corporate car Rental</Link>
                    <Link href='/' className='hover:text-header-red' >   Destination</Link>
                    <Link href='/' className='hover:text-header-red' >  Packages</Link>
                    <Link href='/' className='hover:text-header-red' >   Service Car</Link>
                    <Link href='/' className='hover:text-header-red' >   Contact Us</Link>
                </div>
                </div>
            </div>
            </div>
           

        </div>
        <div className="h-[1px] w-[1164px] bg-white mx-auto mt-9"></div>
        <div className="grid grid-cols-2 ml-10 mt-7 gap-10">
            <div className="flex gap-10">
        <div className="flex flex-col">
                <div className="">
                <div className="flex gap-2  items-center mb-5">
                <h1 className='text-xl font-bold text-white'>Important Links</h1>
                <div className="h-[2px] w-[66px] bg-header-red"></div>
                </div>
                <div className="flex flex-col gap-5 text-white">
                    <Link href='/' className='hover:text-header-red' >  Home</Link>
                    <Link href='/' className='hover:text-header-red' >  About us</Link>
                    <Link href='/' className='hover:text-header-red' >  Car Rental</Link>
                    <Link href='/' className='hover:text-header-red' >  Corporate car Rental</Link>
                    <Link href='/' className='hover:text-header-red' >   Destination</Link>
                    
                </div>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="">
                <div className="flex gap-2  items-center mb-5">
                <h1 className='text-xl font-bold text-white'>Find With Us</h1>
                <div className="h-[2px] w-[66px] bg-header-red"></div>
                </div>
                <div className="flex flex-col gap-5 text-white">
                    <Link href='/' className='hover:text-header-red' >  Home</Link>
                    <Link href='/' className='hover:text-header-red' >  About us</Link>
                    <Link href='/' className='hover:text-header-red' >  Car Rental</Link>
                    <Link href='/' className='hover:text-header-red' >  Corporate car Rental</Link>
                    <Link href='/' className='hover:text-header-red' >   Destination</Link>
                    
                </div>
                </div>
            </div>
            </div>
            <div className="">
    <div className='bg-rectangle_color h-[179px] w-[471px] rounded-xl'></div>
    <div className="box1 flex rounded-md border-2 border-white w-[471px] h-[43px] mt-10 justify-between items-center">
        <input className='text-gray-400 ml-10 bg-transparent' placeholder='SUBSCRIBE TO EMAIL WITH US!'></input>
        <div className="bg-header-red subscribe h-full flex items-center px-4 rounded-r-md">
            <h1 className='text-white font-bold'>Subscribe</h1>
        </div>
    </div>
</div>
        </div>
    </div>
    </footer>
   
  )
}

export default Footer