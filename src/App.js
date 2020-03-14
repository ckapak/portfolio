import React from 'react'
import './stylesheets/main.scss'

import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Skills from './components/Skills'

const App = () => {
  return (
    <main>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main >
  )
}

export default App