import React from 'react'
import Star from '../../../../public/star2.webp'
import Hero from '../../../components/Hero'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Performance',
}
export default function Page() {
  return <Hero imgUrl={Star} altTxt="Home" content="Welcome to our Performance" />
}
