import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className='bg-blue-700 text-white'>
        <ul className='flex flex-row justify-around items-center h-[10vh]'>
            <li>
                <Link href="/">
                    Home
                </Link>
            </li>
            <Link href='/about'>
                About</Link>
            <li>
                <Link href='/courses'>
                    Courses
                </Link>
            </li>
            <li>
                <Link href='/login'>
                    Log in
                </Link>
            </li>
        </ul>



    </nav>
  )
}
