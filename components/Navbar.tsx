'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import SeniorWomanDoctor from '@/assets/png/navbar/senior-woman-doctor.png'
import Logo from '@/assets/icons/navbar/Logo'
import Gear from '@/assets/icons/navbar/Gear'
import VerticalDots from '@/assets/icons/navbar/VerticalDots'
import { navbarConstants } from '@/constants/navbarConstants'
import { usePathname } from 'next/navigation'
const Navbar = () => {
  const pathName = usePathname()

  return (
    <nav className="bg-white shadow-sm rounded-full mt-[23px]">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-800">
              <Logo />
            </Link>
          </div>
          <div className="flex flex-1 items-center max-w-[663px] justify-between font-bold text-[14px]">
            {navbarConstants.map((link) => (
              <div
                key={link.href}
                className={`flex gap-[9px] hover:bg-slate-200 px-4 py-2.5 transition-all duration-300 items-center justify-center rounded-full ${
                  link.href === pathName
                    ? 'bg-navBarActive hover:bg-navBarActive/80 rounded-full  relative items-center justify-center'
                    : ''
                }`}
              >
                {link.icon}
                <Link className="text-gray-800" href={link.href}>
                  {link.label}
                </Link>
              </div>
            ))}
          </div>
          <div className="flex items-center text-[14px]">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Image
                  className="rounded-full"
                  src={SeniorWomanDoctor}
                  width={44}
                  height={44}
                  alt="Dr. Jose Simmons"
                />
              </div>
              <div className="ml-3 space-y-1">
                <div className=" font-bold leading-none text-gray-800">
                  Dr. Jose Simmons
                </div>
                <div className=" font-medium leading-none text-gray-500">
                  General Practitioner
                </div>
              </div>
            </div>
            <div className="ml-3 h-10 w-px bg-gray-200" />
            <div className="ml-3 flex items-center space-x-2">
              <Gear />
              <VerticalDots />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
