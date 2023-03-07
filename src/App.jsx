import React from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import NotFound from './components/NotFound'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
        <Nav />
        <Home />
        <Projects />
        <About />
        <Contact />
        <Footer />
       {/* <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/projektai' element={<Projects />} />
          <Route path='/apie-mane' element={<About />} />
          <Route path='/susisiekti' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
        </Routes> */}
    </div>
  )
}

export default App