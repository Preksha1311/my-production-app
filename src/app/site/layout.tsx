// import Navigation from '@/components/site/navigation'
import { ClerkProvider } from '@clerk/nextjs'
import { Navigation } from 'lucide-react'
// import { dark } from '@clerk/themes'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <main className="h-full">
        {/* <Navigation /> */}
        {children}
      </main>
    </ClerkProvider>
  )
}

export default layout
