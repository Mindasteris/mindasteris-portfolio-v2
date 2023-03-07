import React, { useState } from 'react'
import { motion, useScroll } from 'framer-motion'
import { Lightbox } from 'yet-another-react-lightbox'
import "yet-another-react-lightbox/styles.css";

const Projects = () => {
  // const { scrollYProgress } = useScroll();

  // Lightbox
  const [openLightbox, setOpenLightbox] = useState(false)

  return (
    <section id='projektai' className='container mx-auto md:shadow-inner md:shadow-indigo-900 p-8'>
      <motion.div
        className=''
        initial={{ opacity: 0, x: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className='text-5xl text-center font-bold my-20'>PRO<span className='text-red-500'>JEKTAI</span></h1>

        {/* Lightbox Button */}
        <div className='text-center'>
          <button onClick={() => setOpenLightbox(true)} className='py-2 px-10 bg-transparent border rounded-md hover:bg-red-600'>Peržiūrėti</button>
        </div>
      </motion.div>

     
      {/* Lightbox Show Slides */}
      <Lightbox
        open={openLightbox}
        close={() => setOpenLightbox(false)}
        slides={[
          { src: "/assets/projects/gaminghub-home.png", width: 1200},
          { src: "/assets/projects/gaminghub-services.png", width: 1200 },
          { src: "/assets/projects/gaminghub-contact.png", width: 1200 },
          { src: "/assets/projects/laravel-ps-home.png", width: 1200 },
          { src: "/assets/projects/laravel-ps-about.png", width: 1200 },
          { src: "/assets/projects/laravel-ps-contact.png", width: 1200 },
          { src: "/assets/projects/laravel-xbox-home.png", width: 1200 },
          { src: "/assets/projects/laravel-xbox-login.png", width: 1200 },
          { src: "/assets/projects/laravel-xbox-register.png", width: 1200 },
          { src: "/assets/projects/laravel-xbox-contact.png", width: 1200 },
          { src: "/assets/projects/laravel-ltsite-home.png", width: 1200 },
          { src: "/assets/projects/laravel-ltsite-login.png", width: 1200 },
          { src: "/assets/projects/laravel-ltsite-register.png", width: 1200 },
          { src: "/assets/projects/laravel-crash-home.png", width: 1200 },
          { src: "/assets/projects/laravel-crash-evo.png", width: 1200 },
          { src: "/assets/projects/laravel-crash-contact.png", width: 1200 },
          { src: "/assets/projects/spyro-home.png", width: 1200 },
          { src: "/assets/projects/spyro-gallery.png", width: 1200 },
          { src: "/assets/projects/spyro-origins.png", width: 1200 },
        ]}
      />

      {/* Projects */}
      <div className='flex flex-col md:flex-row gap-8 flex-wrap projects justify-center items-center mt-10'>
        <figure className='text-center text-xl'>
        <img id='myImg' src="/assets/projects/gaminghub-home.png" alt="GH1" />
          <figcaption className='my-4 p-1'>Gaming Hub</figcaption>
        </figure>

        <figure className='text-center text-xl'>
          <img src="/assets/projects/gaminghub-services.png" alt="GH2" />
          <figcaption className='my-4 p-1'>Gaming Hub</figcaption>
        </figure>

        <figure className='text-center text-xl'>
          <img src="/assets/projects/gaminghub-contact.png" alt="GH3" />
          <figcaption className='my-4 p-1'>Gaming Hub</figcaption>
        </figure>

        <figure className='text-center text-xl'>
          <img src="/assets/projects/laravel-ps-home.png" alt="P1" />
          <figcaption className='my-4 p-1'>Playstation Project</figcaption>
        </figure>

        <figure className='text-center text-xl'>
          <img src="/assets/projects/laravel-ps-about.png" alt="P1" />
          <figcaption className='my-4 p-1'>Playstation Project</figcaption>
        </figure>

        <figure className='text-center text-xl'>
          <img src="/assets/projects/laravel-ps-hw1.png" alt="P1" />
          <figcaption className='my-4 p-1'>Playstation Project</figcaption>
        </figure>

        <figure className='text-center text-xl'>
          <img src="/assets/projects/laravel-ps-contact.png" alt="P1" />
          <figcaption className='my-4 p-1'>Playstation Project</figcaption>
        </figure>

        <figure className='text-center text-xl'>
          <img src="/assets/projects/laravel-xbox-home.png" alt="P1" />
          <figcaption className='my-4 p-1'>XBOX Project</figcaption>
        </figure>

        <figure className='text-center text-xl'>
          <img src="/assets/projects/laravel-xbox-login.png" alt="P1" />
          <figcaption className='my-4 p-1'>XBOX Project</figcaption>
        </figure>

        <figure className='text-center text-xl'>
          <img src="/assets/projects/laravel-xbox-register.png" alt="P1" />
          <figcaption className='my-4 p-1'>XBOX Project</figcaption>
        </figure>

        <figure className='text-center text-xl'>
          <img src="/assets/projects/laravel-xbox-contact.png" alt="P1" />
          <figcaption className='my-4 p-1'>XBOX Project</figcaption>
        </figure>

        <figure className='text-center text-xl'>
          <img src="/assets/projects/laravel-ltsite-home.png" alt="P1" />
          <figcaption className='my-4 p-1'>Apie komp. žaidimus</figcaption>
        </figure>

        <figure className='text-center text-xl'>
          <img src="/assets/projects/laravel-ltsite-login.png" alt="P1" />
          <figcaption className='my-4 p-1'>Apie komp. žaidimus</figcaption>
        </figure>

        <figure className='text-center text-xl'>
          <img src="/assets/projects/laravel-ltsite-register.png" alt="P1" />
          <figcaption className='my-4 p-1'>Apie komp. žaidimus</figcaption>
        </figure>

        <figure className='text-center text-xl'>
          <img src="/assets/projects/laravel-crash-home.png" alt="P1" />
          <figcaption className='my-4 p-1'>Crash Bandicoot</figcaption>
        </figure>

        <figure className='text-center text-xl'>
          <img src="/assets/projects/laravel-crash-evo.png" alt="P1" />
          <figcaption className='my-4 p-1'>Crash Bandicoot</figcaption>
        </figure>

        <figure className='text-center text-xl'>
          <img src="/assets/projects/laravel-crash-contact.png" alt="P1" />
          <figcaption className='my-4 p-1'>Crash Bandicoot</figcaption>
        </figure>

        <figure className='text-center text-xl'>
          <img src="/assets/projects/spyro-home.png" alt="Spyro1" />
          <figcaption className='my-4 p-1'>Spyro The Dragon</figcaption>
        </figure>

        <figure className='text-center text-xl'>
          <img className='' src="/assets/projects/spyro-gallery.png" alt="Spyro2" />
          <figcaption className='my-4 p-1'>Spyro The Dragon</figcaption>
        </figure>

        <figure className='text-center text-xl'>
          <img src="/assets/projects/spyro-origins.png" alt="Spyro3" />
          <figcaption className='my-4 p-1'>Spyro The Dragon</figcaption>
        </figure>
      </div>
    </section>
  )
}

export default Projects