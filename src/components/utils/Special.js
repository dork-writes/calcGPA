import { Field } from 'formik';
import React from 'react'

const Special = () => {
  return (
    <div className='space-x-4 pb-5 pt-10 flex justify-center items-end'>
        <label htmlFor = "credits[0]" className='text-xs text-gray-200'>Credits Earned</label>
        <Field as = "input" name = "credits[0]" type = "number" min = "0" step = "0.001" className= "bg-[transparent] border-b-2 border-gray-600 focus:outline-0 px-1 w-[20%]"/>
        <label htmlFor = "grades[0]" className='text-xs text-gray-200'>CGPA</label>
        <Field as = "input" name = "grades[0]" type = "number" min = "0" step = "0.001" className= "bg-[transparent] border-b-2 border-gray-600 focus:outline-0 px-1 w-[20%]"/>
    </div>
  )
}

export default Special;