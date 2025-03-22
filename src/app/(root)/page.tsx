import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
    <div>Home Page</div>
    <Link href="/sign-up" className='text-blue-200'>Sign Up </Link>
    </>
  )
}

export default page