'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

import {DialogDemo} from '@/components/custom/dialog'

const Intecep = () => {
    const router = useRouter()
  return (
    <div>
        <DialogDemo></DialogDemo>
        <h1>
        <Link href='/homepage/userdetails'>go to actuall page</Link>
        </h1>
    </div>
  )
}

export default Intecep