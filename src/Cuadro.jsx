import React from 'react'
import "./cuadro.css"

function Cuadro() {
    const cambiarEstado = (e) => {
        if (e.target.className === "cuadro off") {
            e.target.className = "cuadro on"
        } else {
            e.target.className = "cuadro off"
        }
    }


    return (
        <>
            <button type='button' className='cuadro off' onClick={cambiarEstado}></button>
        </>
    )
}

export default Cuadro