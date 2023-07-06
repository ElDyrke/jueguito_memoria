import React from 'react'
import "./cuadricula.css"
import Cuadro from './Cuadro.jsx'

function Cuadricula() {
  const patrones = []
  const onMax = 8
  
  const crearPatron = (e) => {
    let resultado = document.querySelector("#resultado")
    resultado.innerText = ""
    const cuadricula = document.getElementById("cuadricula")
    var children = Array.from(cuadricula.children)
    let onCount = 0

    children.forEach((child) => {
      child.className = "cuadro off"
      child.disabled = true
  })

    while (onCount < onMax) {
      let random = Math.ceil(Math.random() * (children.length - 1) - 1)
      
      if (children[random].className === "cuadro off") {
        children[random].className = "cuadro on"
        onCount++
      }
    }
    let prevState = ""

    children.forEach(cuadro => {
      if (cuadro.className === "cuadro on"){
        prevState = prevState + "1"
      } else {
        prevState = prevState + "0"
      }
    })
    patrones.push(prevState)
    setTimeout(() => {children.forEach((child) => {
      child.className = "cuadro off"
      child.disabled = false
    })}, 4000)
  }
    
  const checkear = () => {
    const cuadricula = document.getElementById("cuadricula")
    var children = Array.from(cuadricula.children)
    let currState = ""
    children.forEach(cuadro => {
      if (cuadro.className === "cuadro on"){
        currState = currState + "1"
      } else {
        currState = currState + "0"
      }
    })
    console.log(currState + " " + patrones.at(-1))

    let resultado = document.querySelector("#resultado")
    if (currState === patrones.at(-1)) {
      resultado.innerText= "Has Ganado"
      children.forEach((child) => 
      {child.className = "cuadro off"})
    } else {
      resultado.innerText = "Has Perdido"
      children.forEach((child) => 
      {child.className = "cuadro off"})
    }
  }

  return (
    <>
    <h1 id= "resultado"></h1>
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