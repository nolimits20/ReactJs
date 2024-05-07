import React from 'react'
import CourseCard from './CourseCard'

export default function Courses() {
  return (
    <div className='grid grid-cols-3 gap-3 grid-rows-[200px_200px]'>
        <CourseCard title='html' desc='all about elements' num='14' social='instagram' color='bg-red-200'/>

        <CourseCard title='css' desc='styling component' num='14' social='Linkedln' color='bg-blue-500'/>

        <CourseCard title='javascript' desc='interactive hall of fame' num='13' social='Facebook' color='bg-blue-900'/>

        <CourseCard title='tailwind' desc='a framework like no other' num='21' social='Youtube' color='bg-red-700'/>

        <CourseCard title='react' desc='make it easy to write' num='11' social='Gmail' color='bg-red-400'/> 
    </div>
  )
}
