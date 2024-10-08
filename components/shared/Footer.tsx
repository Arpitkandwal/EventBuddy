import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="border-t">
      <div className='flex-center wrapper flex-between flex flex-col gap4 text-center sm:flex-row'>
        <Link href="/">
        <Image 
        src="/assets/images/logo.svg"
        alt='logo'
        width={128}
        height={38}
        />
        </Link>

        <p>2024 EventBuddy. All Rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
