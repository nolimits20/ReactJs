import Link from 'next/link'
import React from 'react'


export default function CourseCard({title,num,desc,social,color}) {
  return (
    <div className={`border-red-500 border-4 rounded-md shadow-lg text-center py-3 bg-blue-200`}>
        <h2>{title}</h2>
        <p>{desc}</p>
        <p>{num}</p>
        <p className={`${color} w-3/5 py-2 rounded-lg m-auto text-white`}><Link href={`https://www.${social}.com`} target='_blank'>{social}</Link> </p>

    </div>
  )
}
