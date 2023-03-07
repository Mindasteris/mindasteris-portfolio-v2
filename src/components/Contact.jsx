import React, { useState } from 'react'
import { motion, useScroll } from 'framer-motion'
import { FaUserSecret } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr'
import { MdSubject } from 'react-icons/md'
import { RiMessage2Fill } from 'react-icons/ri'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const Contact = () => {
  // Success Message
  const [successMessage, setSuccessMessage] = useState(null)

  // Formik
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Šis laukas yra privalomas').max(20, 'Laukas "Vardas" negali būti ilgesnis nei 20 simbolių'),
      email: Yup.string().required('Šis laukas yra privalomas').email('Blogas El. pašto formatas'),
      subject: Yup.string().required('Šis laukas yra privalomas').max(50, 'Tema negali būti ilgesnė nei 50 simbolių'),
      message: Yup.string().required('Šis laukas yra privalomas').min(10, 'Žinutė turi būti ne trumpesnė nei 10 simbolių').max(255, 'Simbolių skaičius negali viršyti 255 simoblių'),
    }),
    onSubmit: function(values) {
      console.log(`${values.name} ${values.email} ${values.subject} ${values.message}`)
      formik.resetForm()
      setSuccessMessage('Ačiū! Žinutė išsiųsta sėkmingai.')
    },
  })

  return (
    <section id='susisiekti' className='container mx-auto md:shadow-inner md:shadow-indigo-900 rounded-b-lg p-8'>
      <motion.div
        className=''
        initial={{ opacity: 0, x: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className='text-5xl text-center font-bold my-20'>SUSI<span className='text-red-500'>SIEKTI</span></h1>
      </motion.div>

      {/* Form */}
      <motion.form 
      onSubmit={formik.handleSubmit}
        className='text-center form'
        initial={{ opacity: 0, x: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div>
          <label><FaUserSecret /> Vardas</label>
          <input 
            type="text"
            placeholder='Vardas'
            name='name'
            onChange={formik.handleChange}
            value={formik.values.name}
          />

          <div className='error'>
            {/* Formik Error */}
            {formik.touched.name && formik.errors.name ? <span className='text-red-600'>{formik.errors.name}</span> : ''}
          </div>

        </div>

        <div>
          <label><GrMail /> Paštas</label>
          <input 
            type="text"
            placeholder='El. paštas'
            name='email'
            onChange={formik.handleChange}
            value={formik.values.email}
          />

          <div className='error'>
            {/* Formik Error */}
            {formik.touched.email && formik.errors.email ? <span className='text-red-600'>{formik.errors.email}</span> : ''}
          </div>

        </div>

        <div>
          <label><MdSubject /> Tema</label>
          <input 
            type="text"
            placeholder='Tema'
            name='subject'
            onChange={formik.handleChange}
            value={formik.values.subject}
          />

          <div className='error'>
            {/* Formik Error */}
            {formik.touched.subject && formik.errors.subject ? <span className='text-red-600'>{formik.errors.subject}</span> : ''}
          </div>

        </div>

        <div>
        <label><RiMessage2Fill /> Žinutė</label>
          <textarea 
            cols="30" 
            rows="10"
            placeholder='Žinutė'
            name='message'
            onChange={formik.handleChange}
            value={formik.values.message}
          ></textarea>

          <div className='error'>
            {/* Formik Error */}
            {formik.touched.message && formik.errors.message ? <span className='text-red-600'>{formik.errors.message}</span> : ''}
          </div>
        </div>

        <button type='submit'>Siųsti</button>
      </motion.form>

      {/* Success Form Message */}
      <div className={successMessage ? 'bg-green-500 max-w-[600px] text-2xl text-center mx-auto font-medium rounded-md p-2' : 'hidden'}>
        <p>{successMessage}</p>
      </div>

    </section>
  )
}

export default Contact