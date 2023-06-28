import React from 'react'
import { Field } from 'formik'

const CGPA = ({index}) => {
  return (
    index !== 0 && <>
        <span className='pr-2 text-sm'>Sem {index}</span>
        <label htmlFor = {`credits[${index}]`} className='text-xs mt-4'>Credits</label>
        <Field as = "input" type = "number" min = "0" step = ".001" name = {`credits[${index}]`} className="text-gray-200 w-[15%] bg-[#282c34] border-b-2 border-gray-600 rounded-sm my-2 py-1 focus:outline-0 px-1" />
        <label htmlFor = {`grades[${index}]`} className='text-xs mt-4'>GPA</label>
        <Field as = "input" type = "number" min = "0" step = ".001" name = {`grades[${index}]`} className="text-gray-200 w-[15%] bg-[#282c34] border-b-2 border-gray-600 rounded-sm my-2 py-1 focus:outline-0 px-1" /> 
    </>
  ) 
}

export default CGPA;