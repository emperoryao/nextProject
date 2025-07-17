export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div className="BlogLayout max-w-xl mx-auto">{children}</div>
}
