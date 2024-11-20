import React from 'react'
import Header from '../components/Header'
import react, { useState } from 'react'
import Carousal from '../components/Carousal'
import Item from '../components/Item'
import Aess from '../components/Aess'
import Audio from '../components/Audio'
import ComputerAss from '../components/ComputerAss'
import CarAss from '../components/CarAss'
import MediaAdds from '../components/MediaAdds'
import Carous from '../components/Carous'
import Lastcomp from '../components/Lastcomp'
import { Navigate } from 'react-router-dom'

function Home() {
  return (
    <div>
      <Header></Header>
      <Carousal></Carousal>
      <Item></Item>
      <Aess></Aess>
      <Audio></Audio>
      <ComputerAss></ComputerAss>
      <CarAss></CarAss>
      <MediaAdds></MediaAdds>
      <Carous></Carous>
      <Lastcomp></Lastcomp>
    </div>
  )
}

export default Home