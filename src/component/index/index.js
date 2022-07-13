import React from "react";
import { Conocimientos } from "../conocimientos/conocimientos";
import { Datos } from "../datos/datos";
import { Descripcion } from "../descripcion/descripcion";
import { Experiencia } from "../experiencia/experiencia";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { Proyectos } from "../proyectos/proyectos";

export const Index = () =>{
    return(
        <div className="container-index-container">
            <div>
                <Header/>
            </div>
            <div>
                <Datos/>
            </div>
            <div>
                <Descripcion/>
            </div>
            <div>
                <Experiencia/>
            </div>
            <div>
                <Conocimientos/>
            </div>
            <div>
                <Proyectos/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}