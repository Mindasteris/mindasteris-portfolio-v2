import React from 'react'
import { motion, useScroll } from 'framer-motion'

const About = () => {
  return (
    <section id='apie-mane' className='container mx-auto md:shadow-inner md:shadow-indigo-900 p-8'>
      <motion.div
        className=''
        initial={{ opacity: 0, x: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className='text-5xl text-center font-bold my-20'><span className='text-red-500'>APIE</span> MANE</h1>
      </motion.div>

      {/* Text */}
      <motion.div 
        className='text-center text-[18px] max-w-[500px] mx-auto'
        initial={{ opacity: 0, x: 0}}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p>Išklausyti kursai, įgauti stiprūs programavimo pagrindai: html, css, javascript, php, python. Dirbta su web karkasais PHP Laravel, Javascript React. Baigta žiniatinklio programavimo specialybė. Domina programavimas. Domiuosi apie IT administravimą, kompiuterinių tinklų infrastruktūrą, virtualizaciją.
          Noriu augti ir tobulėti, kartu su šios srities specialistais.
        </p>

        <h1 className='font-bold text-red-500 mt-5'>Windows Server:</h1>
        <ul>
          <li>Active Directory</li>
          <li>DNS</li>
          <li>DHCP</li>
          <li>Group Policy</li>
          <li>File Sharing/Permissions</li>
          <li>Microsoft 365</li>
        </ul>

        <h1 className='font-bold text-red-500 mt-5'>Programming:</h1>
        <ul>
          <li>HTML (Markup Langugage)</li>
          <li>CSS (Styling Web)</li>
          <li>PHP</li>
          <li>Laravel</li>
          <li>Javascript</li>
          <li>React</li>
        </ul>

        <p className='mt-2'>Esu pasiryžęs mokytis ir tobulėti, lankyti seminarus ar kitus mokymus.</p>

        <h1 className='font-bold text-red-500 my-5'>Github nuoroda:</h1>
        <a className='github' href="https://github.com/Mindasteris" target='_blank'>github.com</a>
      </motion.div>
    </section>
  )
}

export default About