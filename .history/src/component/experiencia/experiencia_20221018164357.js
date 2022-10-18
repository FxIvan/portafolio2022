import React from "react";
import imgCands from '../img/cands-icon.svg'

export const Experiencia = () =>{
    return(
        <div className="container">
            <div>
                <div>
                    <div>
                        <div>
                            <h3>Experiencia:</h3>
                        </div>
                    </div>
                    <div>
                        <div className="mt-3">
                            <div className="row">
                                <div className="col-sm-2 logo-icon-cands-desktop">
                                    <img src={imgCands} alt='img-cands'/>
                                </div>
                                <div className="col-sm-8">
                                    <h4>CANDS  |Fecha 4/22 - Actualidad</h4>
                                    <p>Tarea: Monitoreo</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <p>Dentro de CANDS me encuentro en el área de Monitoreo, mi principal tarea es monitorear la sincronizacion de datos hacia la base de datos y mantener estable los servidores para evitar errores. Ademas de desarrollar herramientas que puedan mejorar el sistema de monitoreo </p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div>
                                    <h4>Tecnologia Usadas:</h4>
                                </div>
                                <div>
                                    <div>
                                        <ul>
                                            <li>-Google Cloud Platform</li>
                                            <li>-Comando BASH</li>
                                            <li>-Progress ABL</li>
                                            <li>-VM</li>
                                            <li>-Metodologia SCRUM</li>
                                            <li>-MySQL</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}