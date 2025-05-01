import { useState } from 'react'
import About from './components/About'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Hero/>
    <Projects/>
    <About/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
