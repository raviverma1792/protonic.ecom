import React, { Component } from 'react'
import Header from '../components/Header'
import Subbufer from '../components/Subbufer'
import Warenty from '../components/Warenty'
import Dwnproduct from '../components/Dwnproduct'
import Imagesprodct from'../components/Imagesprodct'
import Carous from '../components/Carous'
import Lastcomp from '../components/Lastcomp'
import Blacksticky from '../components/Blacksticky'


function Productinfo() {
  return (
    <div> 
     <Header></Header>
     <Subbufer></Subbufer>
     <Warenty></Warenty>
     <Blacksticky></Blacksticky>
     <Imagesprodct></Imagesprodct>
     <Dwnproduct></Dwnproduct>
     <Carous></Carous>
     <Lastcomp></Lastcomp>
    </div>
  )
}

export default Productinfo