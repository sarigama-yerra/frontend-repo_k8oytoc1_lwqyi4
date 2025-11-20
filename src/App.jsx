import React from 'react'
import Hero from './components/Hero'
import WhoIWorkWith from './components/WhoIWorkWith'
import FreeGuide from './components/FreeGuide'
import WhatWeWorkOn from './components/WhatWeWorkOn'
import Method from './components/Method'
import Testimonial from './components/Testimonial'
import ChooseYourPath from './components/ChooseYourPath'
import Process from './components/Process'
import FinalCTA from './components/FinalCTA'

function App() {
  return (
    <div className="bg-[#050505] text-white">
      <Hero />
      <WhoIWorkWith />
      <FreeGuide />
      <WhatWeWorkOn />
      <Method />
      <Testimonial />
      <ChooseYourPath />
      <Process />
      <FinalCTA />
    </div>
  )
}

export default App
