import Footer from '@/components/custom/footer'
import Header from '@/components/custom/navbar/header'
import React from 'react'

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
        <Header />
        {children}
        <Footer />
    </div>
  )
}
