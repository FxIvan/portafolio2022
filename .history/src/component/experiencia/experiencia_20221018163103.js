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
                                <p>Dentro de CANDS me encuentro en el área de Monitoreo, mi principal tarea es monitorear los log de las plantas e implementar una solución ante un un problema que pueda surgir en el servidor, dentro de esta área utilizo herramientas como Google Cloud Platform, máquinas Virtuales con distribución CentOS de Linux, comandos bash y Slack, por el momento se está haciendo un cambio de stack con la cual hay que hacer herramientas para optimizar y minimizar los errores, para estas herramientas utilizo por mi parte las herramientas MERN por ejemplo para hacer un buscador </p>
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
                                            <li>-Maquina Virtuales</li>
                                            <li>-MongoDB / Express / ReactJS / NodeJS</li>
                                            <li>-Metodologia SCRUM</li>
                                            <li>-Symfony(Nivel BAJO)</li>
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