import React from 'react'
import { AiFillFacebook, AiFillYoutube, AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { motion, useScroll } from 'framer-motion'

const Footer = () => {
  return (
    <footer className='p-8 h-[200px]'>
      <motion.div
        className=''
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        {/* Social */}
        <div className='flex w-full justify-center gap-8'>
          <a href="https://www.facebook.com/" target='_blank'><AiFillFacebook size={35} className='hover:cursor-pointer hover:scale-125 transition duration-300' /></a>
          <a href="https://www.youtube.com/" target='_blank'><AiFillYoutube size={35} className='hover:cursor-pointer hover:scale-125 transition duration-300' /></a>
          <a href="https://www.linkedin.com/in/mindaugas-sunokas-137b51178/" target='_blank'><AiFillLinkedin size={35} className='hover:cursor-pointer hover:scale-125 transition duration-300' /></a>
          <a href="https://github.com/Mindasteris" target='_blank'><AiFillGithub size={35} className='hover:cursor-pointer hover:scale-125 transition duration-300' /></a>
        </div>
        <p className='text-center text-md md:text-xl mt-20 py-4'> &copy; {new Date().getFullYear()} Mindaugas Šunokas. <br className='md:hidden' /> Visos teisės saugomos. </p>
      </motion.div>
    </footer>
  )
}

export default Footer