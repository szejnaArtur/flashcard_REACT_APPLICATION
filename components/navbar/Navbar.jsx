import React, {useEffect, useState} from 'react';
import Link from "next/link";
import authenticationService from "../authentication/AuthenticationService";

import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';

const Navbar = () => {

    const [nav, setNav] = useState(false);
    const [color, setColor] = useState('transparent');
    const [textColor, setTextColor] = useState('white');
    // const [isUserLoggedIn, setIsUserLoggedIn] = useState(() => {
    //     const loggedUser = authenticationService.isUserLoggedIn();
    //     if (loggedUser != null) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // })

    const handleNav = () => {
        setNav(!nav);
    }

    useEffect(() => {
        const changeColor = () => {

            if (window.scrollY >= 90) {
                setColor('#ffffff');
                setTextColor('#000000');
            } else {
                setTextColor('#ffffff');
                setColor('transparent');
            }
        }
        window.addEventListener('scroll', changeColor);
    }, [])

    return (
        <div style={{backgroundColor: `${color}`}} className='fixed w-full z-10 easy-in-out duration-300'>
            <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
                <Link href="/">
                    <h1 style={{color: `${textColor}`}} className='font-bold text-4xl'>
                        Flashcards
                    </h1>
                </Link>
                <ul className='hidden sm:flex' style={{color: `${textColor}`}}>
                    <li className='p-4'>
                        <Link href="/">Home</Link>
                    </li>
                    <li className='p-4'>
                        <Link href="/#about">About</Link>
                    </li>
                    <li className='p-4'>
                        <Link href="/try">Try it</Link>
                    </li>
                    <li className='p-4'>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
                {/*<ul className='hidden sm:flex' style={{color: `${textColor}`}}>*/}
                {/*    <li className='p-4'>*/}
                {/*        <Link href="/login">*/}
                {/*            {isUserLoggedIn ? "Logout" : "Login"}*/}
                {/*        </Link>*/}
                {/*    </li>*/}
                {/*</ul>*/}
                <div className='block sm:hidden z-10' onClick={handleNav}>
                    {nav ? <AiOutlineClose size={30} style={{color: `#ffffff`}}/>
                        : <AiOutlineMenu size={30} style={{color: `${textColor}`}}/>}
                </div>
                <div
                    className={nav ? 'sm:hidden absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center w-full h-screen bg-black text-center easy-in duration-300'
                        : 'sm:hidden absolute top-0 left-[-100%] bottom-0 right-0 flex justify-center items-center w-full h-screen bg-black text-center easy-in duration-300'}>
                    <ul>
                        <li className='text-4xl p-4 hover:text-gray-500' onClick={handleNav}>
                            <Link href="/">Home</Link>
                        </li>
                        <li className='text-4xl p-4 hover:text-gray-500' onClick={handleNav}>
                            <Link href="/#about">About</Link>
                        </li>
                        <li className='text-4xl p-4 hover:text-gray-500' onClick={handleNav}>
                            <Link href="/try">Try it</Link>
                        </li>
                        <li className='text-4xl p-4 hover:text-gray-500' onClick={handleNav}>
                            <Link href="/#contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;