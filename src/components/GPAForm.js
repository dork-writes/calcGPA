import { useState } from 'react'
import { Formik, Form } from 'formik';
import SGPA from './utils/SGPA.js';
import CGPA from './utils/CGPA.js';
import Special from './utils/Special.js';
import { Route, Routes, useLocation } from 'react-router-dom';
import Nav from './nav/Nav.js';


const GPAForm = () => {
  
  const {pathname} = useLocation();
  const [GPA, setGPA] = useState(0.0);
  const [fields, setFields] = useState([]);

  const handleSubmit = ({grades, credits}) =>
  {
    console.log(grades, credits, pathname);
    let numerator = 0, denominator = 0;
    for (let i = pathname === '/calcGPA' ? 0 : 1; i < grades.length; i++)
    {
      console.log(i);
      numerator += grades[i] * credits[i];
      denominator += parseInt(credits[i]);
    }

    console.log(numerator);
    console.log(denominator);
    setGPA((numerator/denominator).toFixed(2));
  }

  const addField = (values, setFieldValue) =>
  {
    const {grades, credits} = values; 
    setFields([...fields, fields.length]);
    setFieldValue('grades', [...grades, 0]);
    setFieldValue('credits', [...credits, 0]);
  }

  const removeOnIndex = (arr, f) =>
  {
    f === 0 ? arr.shift() :
    f === arr.length - 1 ? arr.pop() :
    arr.splice(f, f);
    return arr;
  }

  const removeField = (f, values, setFieldValue) =>
  {
    const {credits, grades} = values;
    setFields(removeOnIndex([...fields], f - 1));
    let credits_ = [...credits], grades_ = [...grades]; 
    removeOnIndex(credits_, f);
    removeOnIndex(grades_, f);
    setFieldValue('grades', grades_, true);
    setFieldValue('credits', credits_, true);
  }

  return (
    <>
      <Nav />
      <mark className = "text-gray-200 bg-zinc-600 px-2 py-1 rounded-md">GPA - {GPA}</mark>
      <section className='w-[100%] flex justify-center'>
        <Formik onSubmit = {handleSubmit} initialValues={{grades: [0], credits: [0]}}>
          {({values, setFieldValue}) => <Form>
                {pathname === '/calcGPA' ? <Special /> : ''}
                <main className='mx-auto w-fit'>
                  <button type = "button" onClick = {()=> addField(values, setFieldValue)} className='bg-neutral-600 px-2 py-1 rounded-sm my-5'>Add Field</button>
                  {Array.isArray(fields) && fields.map(f => <section key = {f} className='flex items-center space-x-2 w-[80vw] md:w-fit'>
                    <Routes>
                      <Route path = "/calcGPA" element = {<SGPA index = {f + 1} />} />           
                      <Route path = "/calcGPA/sgpa" element = {<SGPA index = {f + 1} />} />           
                      <Route path = "/calcGPA/cgpa" index element = {<CGPA index = {f + 1}/>} />           
                    </Routes>
                    <button type = "button" className={`bg-slate-600 px-2 py-1.5 text-sm rounded-sm`} onClick={()=>removeField(f + 1, values, setFieldValue)}>Remove</button>
                    </section>)
                  }
                  <button type = "submit" className='my-2 block bg-neutral-600 px-2 py-1 rounded-sm'>Get GPA</button>
              </main>
            </Form>
          }
        </Formik>
      </section>
    </>
  )
}

export default GPAForm;
