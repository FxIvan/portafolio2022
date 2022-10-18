import React from 'react'
import MERN from '../img/LOGO-MERN.svg'

export const Header = () =>{

    return(
        <div className='container row m-auto container-header-desktop'>
            <div className='col-sm-2'>
                <div className='header-img-desktop'>
                    <img src={MERN} alt='logo-mern-header'/>
                </div>
            </div>
            <div className='col-sm-10 d-flex header-title-desktop'>
                <div className='w-100 text-center'>
                    <h1 className='titulo-header-glitch'><p>{"<h1>"}</p>  Bienvenido a mi  {"["}Portafolio{"]"}  <p>{"</h1>"}</p></h1>
                </div>
            </div>
        </div>
    )
}