import React from 'react'
import Star from '../../../../public/star4.png'
import Hero from '../../../components/Hero'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Scale',
}
export default function Page() {
  return <Hero imgUrl={Star} altTxt="Home" content="Welcome to our Scale" />
}
