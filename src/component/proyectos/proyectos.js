import React from "react";


export const Proyectos = () =>{
    return(
        <div className="container pt-5">
            <div>
                <div>
                    <h3>Proyectos Personales</h3>
                </div>
                <div className="col-sm-8 ps-3 pt-2">
                    <div>
                        <div>
                            <div>
                                <h4>Tienda de Ropa | Stack utilizado: MERN</h4>
                                <a href="https://fxivan.github.io/e-commerce/" target="_blank">https://fxivan.github.io/e-commerce/</a>
                            </div>
                            <div>
                                <p> Tienda de ropa, aplicando mongo como base de datos, node y express para comunicacion con el frontend y ReactJS para la interaccion con el usuario, tambien  se implemento como medio de pago la API de Mercado Pago. Este proyecto se encuentra en proceso</p>
                            </div>
                        </div>
                    </div>
                    {/***************************************************************** */}
                    <div>
                        <div>
                            <div>
                                <h4>OSITO SERVICIOS | tecnologia usada: MERN</h4>
                                <a href="https://fxivan.github.io/ositoservicio/" target="_blank">https://fxivan.github.io/ositoservicio/</a>
                            </div>
                            <div>
                                <p>Servicios de intermediario donde el objetivo de este proyecto es eliminar las estafas que suceden en internet,  tambien utilize las tecnologia MERN</p>
                            </div>
                        </div>
                    </div>
                    {/***************************************************************** */}
                    <div>
                        <div>
                            <div>
                                <h4>Servicio de gestion de Delivery | Tecnologia usada MERN</h4>
                                <a href="https://github.com/FxIvan/logisticapitt" target="_blank">https://github.com/FxIvan/logisticapitt</a>
                            </div>
                            <div>
                                <p>Es una web donde el comerciante le asigna un pedido al delivery cargando los datos del envio, el delivery asignado puede ver despues una vez que le asigne el comerciante los detalles del envio, tambien se utiliza el stack MERN</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}