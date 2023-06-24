import React from 'react'
import "./cuadricula.css"
import Cuadro from './Cuadro.jsx'

function Cuadricula() {
  var prevState = []
  const onMax = 8
  const crearPatron = (e) => {
    const cuadricula = document.getElementById("cuadricula")
    var children = Array.from(cuadricula.children)
    let onCount = 0

    children.forEach((child) => {child.className = "cuadro off"})

    while (onCount < onMax) {
      let random = Math.ceil(Math.random() * (children.length - 1) - 1)
      
      if (children[random].className === "cuadro off") {
        children[random].className = "cuadro on"
        onCount++
      }
    }

    prevState = children
    setTimeout(() => {children.forEach((child) => {child.className = "cuadro off"})}, 4000)
  }
    
  const checkear = () => {
    const cuadricula = document.getElementById("cuadricula")
    var children = Array.from(cuadricula.children)
    
    if (children === prevState) {
      alert("Has ganado")
      children.forEach((child) => {child.className = "cuadro off"})
    } else {
      alert("Has perdido")
      children.forEach((child) => {child.className = "cuadro off"})
    }
  }

  return (
    <>
    <div id="cuadricula">
        <Cuadro/>
        <Cuadro/>
        <Cuadro/>
        <Cuadro/>
        <Cuadro/>
        <Cuadro/>
        <Cuadro/>
        <Cuadro/>
        <Cuadro/>
        <Cuadro/>
        <Cuadro/>
        <Cuadro/>
        <Cuadro/>
        <Cuadro/>
        <Cuadro/>
        <Cuadro/>
    </div>
    <div id="botones">
      <button type='button' onClick={crearPatron}>Crear patron</button>
      <button type='button' onClick={checkear}>Check!</button>
    </div>
    
    </>
    
  )
}

export default Cuadricula