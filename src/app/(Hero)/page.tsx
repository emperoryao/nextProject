import React from 'react'
import Star from '../../../public/star1.png'
import Hero from '../../components/Hero'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Home',
}
export default function Page() {
  return <Hero imgUrl={Star} altTxt="Home" content="Fun Guys 2026" />
}
