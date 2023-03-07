import React from 'react'
import Typed from 'react-typed'
import codingImg from '../img/coding.jpg'
import { motion } from 'framer-motion'

const Home = () => {
  // Framer Motion
  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -100 },
    transition: { duration: 1 },
   }

  return (
    <main id='pradžia' className='container mx-auto md:shadow-inner md:shadow-indigo-900 rounded-t-lg p-8'>
      <motion.div 
        className='flex flex-col-reverse md:flex-row justify-between items-center'
        initial='hidden'
        animate='visible'
        variants={variants}
      >
        <h1 className='text-5xl font-bold my-12 text-center w-full md:w-[50%]'><span className='text-red-500'>SVEIKI</span> ATVYKĘ</h1>
        <div className='w-full md:w-[50%] text-center'>
          <h1  className='text-6xl text-indigo-500 font-bold'>REACT.JS</h1>
            <Typed
              className='text-center text-2xl text-yellow-400 italic'
              strings={['Learn Once, Write Anywhere!']}
              typeSpeed={60}
              backSpeed={80}
              loop
            />
        </div>
      </motion.div>

      <motion.div 
        className='mt-10 flex flex-col justify-center items-center'
        initial={{ opacity: 0, x: 0 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div>
          <p className='text-[18px] text-center max-w-[800px] p-4 leading-7 shadow-lg shadow-indigo-900 rounded-xl'>Ieškau Entry-level/Junior-level programuotojo darbo, internetinių svetainių ar programėlių kūrime. Baigta žiniatinklio programavimo specialybė, turiu patirties dirbant su <span className='font-semibold'>HTML, CSS, PHP, JAVASCRIPT,</span> taip pat ir su web karkasais: <span className='text-[#F05340]'>Laravel</span>, <span className='text-[#61DBFB]'>React</span>, <span className='text-[#FA74A0]'>Next.JS</span>. Stiliaus įrankiais <span className='text-[#563D7C]'>Bootstrap</span> ir <span className='text-[#3490DC]'>TailwindCSS</span>.
              Esant poreikiui galiu atsiųsti savo gyvenimo aprašymą (CV).<br/>Visi pasiūlymai ir galimybės labai laukiami!
          </p>
        </div>

        <div>
          <img src={codingImg} alt="code" className='w-full max-w-[800px] my-10 rounded-3xl' />
        </div>

      </motion.div>
    </main>
  )
}

export default Home