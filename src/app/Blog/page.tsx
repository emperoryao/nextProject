import BlogList from '@/components/BlogList'
import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: '博客列表',
}
export default function page() {
  return <BlogList />
}
