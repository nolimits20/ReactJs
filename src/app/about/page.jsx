import Link from 'next/link'
import React from 'react'


export default function page() {
  return (
    <div>
        <h2>About Page</h2>
        <p><Link href='/'>Back to Home</Link></p>
    </div>
  )
}
