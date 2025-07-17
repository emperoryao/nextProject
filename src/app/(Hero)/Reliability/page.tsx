import React from 'react'
import Star from '../../../../public/star3.webp'
import Hero from '../../../components/Hero'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Reliability',
}
export default function Page() {
  return <Hero imgUrl={Star} altTxt="Home" content="Welcome to our Reliability" />
}
