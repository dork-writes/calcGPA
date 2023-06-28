import React from 'react'
import { Field } from 'formik'

const SGPA = ({index}) => {
  return (
    <>
        <label htmlFor={`credits[${index}]`}></label> 
        <Field as = "select" name = {`credits[${index}]`} className="text-gray-200 bg-gray-700 rounded-sm my-2 py-1 focus:outline-0">
            <option value = {0} disabled >Credits</option>
            <option value = {3}>3</option>
            <option value = {1}>1</option>
            <option value = {2}>2</option>
        </Field>  
        <label htmlFor={`grades[${index}]`}></label>
        <Field as = "select" name = {`grades[${index}]`} className="text-gray-200 bg-gray-700 rounded-sm my-2 py-1 focus:outline-0">
            <option value = {0} disabled >Grade</option>
            <option value = {4}>A+/A</option>
            <option value = {3.67}>A-</option>
            <option value = {3.33}>B+</option>
            <option value = {3}>B</option>
            <option value = {2.67}>B-</option>
            <option value = {2.33}>C+</option>
            <option value = {2}>C</option>
            <option value = {1.67}>C-</option>
            <option value = {1.33}>D+</option>
            <option value = {1}>D</option>
        </Field>
    </>
  )
}

export default SGPA;
