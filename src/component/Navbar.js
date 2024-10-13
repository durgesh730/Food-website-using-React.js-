import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer } from '@mui/material';

const Navbar = () => {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    return (
        <>
            <nav className='flex justify-between items-center py-6 md:px-12 px-4 bg-white '>
                <div className='text-2xl font-bold text-gray-800' >Foodie</div>
                <ul className=' md:flex hidden space-x-8  text-gray-700 ' >
                    <li><a href='#' className=' hover:text-orange-500'>Home </a> </li>
                    <li><a href='#' className=' hover:text-orange-500' >Packages</a> </li>
                    <li><a href='#' className=' hover:text-orange-500' >About us </a> </li>
                    <li><a href='#' className=' hover:text-orange-500'  >Contact us </a> </li>
                </ul>
                <ul className=' md:hidden  block' >
                    <MenuIcon onClick={toggleDrawer(true)} fontSize=' text-3xl' />
                </ul>
            </nav>

            <Drawer open={open} onClose={toggleDrawer(false)}>
                <div className=' py-4 px-4 min-w-[200px]'>
                    <a href='#' >Home</a> <br />
                    <a href='#' >About</a>  <br />
                    <a href='#' >Contact</a>  <br />
                </div>
            </Drawer>
        </>
    )
}

export default Navbar
