import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div>
      <h2>This is Home</h2>
      <p><Link href='/about'>about page</Link></p>
    </div>
  )
}
