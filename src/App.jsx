import { useState } from 'react'
import Cards from "./Cards.jsx"
import pikachu from "./assets/pikachu.png"
import articuno from "./assets/articuno.png"
import dratini from "./assets/dratini.png"
import jirachi from "./assets/jirachi.png"
import jolteon from "./assets/jolteon.png"
import kirlia from "./assets/kirlia.png"
import metagross from "./assets/metagross.png"
import milotic from "./assets/milotic.png"
import teddiursa from "./assets/teddiursa.png"
import umbreon from "./assets/umbreon.png"
import vulpix from "./assets/vulpix.png"

function App() {
  return (
    <>
      <Cards src={pikachu} alt="pikachu" />
      <Cards src={vulpix} alt="vulpix" />
      <Cards src={umbreon} alt="umbreon" />
      <Cards src={teddiursa} alt="teddiursa" />
      <Cards src={metagross} alt="metagross" />
      <Cards src={kirlia} alt="kirlia" />
      <Cards src={jolteon} alt="jolteon" />
      <Cards src={jirachi} alt="jirachi" />
      <Cards src={dratini} alt="dratini" />
      <Cards src={articuno} alt="articuno" />
      <Cards src={milotic} alt="milotic" />
    </>
  )
}

export default App
