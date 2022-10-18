import React from "react";
import {BsLinkedin, BsGithub, BsWhatsapp} from 'react-icons/bs'
import {AiOutlineCopy} from 'react-icons/ai'
import sello from '../img/chanchito.png'
import {CopyToClipboard} from 'react-copy-to-clipboard';

export const Datos = () => {
    return (
        <div className="container section-container-desktop-date m-auto">
            <div className="row col-sm-12">
                {/*   MIS DATOS     */}
                <div className="col-sm-6">
                    <ul>
                        <li>Nombre: Almendra Ivan</li>
                        <li>Telefono: +54 1136887781 <CopyToClipboard text="1136887781"><button className="button-copiar"><AiOutlineCopy color="white" className="icon-copied"/></button></CopyToClipboard></li>
                        <li>Ubicacion: Argentina</li>
                        <li>Puesto: JR</li>
                        <li>Desarrollador: MERN / Sysadmin</li>
                        <li>Correo: almendraivan210814@gmail.com <CopyToClipboard text="almendraivan210814@gmail.com"><button className="button-copiar"><AiOutlineCopy color="white" className="icon-copied"/></button></CopyToClipboard></li>
                        <li>Ingles: Lectura</li>
                    </ul>
                </div>
                {/*     LINK     */}
                <div className="col-sm-6">
                    <div>
                        <div className="link-redes-desktop">
                        <ul className="d-flex justify-content-center">
                            <li>
                                <a href="https://www.linkedin.com/in/devalmendra/" target="_blank"><BsLinkedin size="40"/></a>
                            </li>
                            <li>
                                <a href="https://github.com/FxIvan" target="_blank"><BsGithub size="40"/></a>
                            </li>
                            <li>
                                <a
                                    href="https://api.whatsapp.com/send/?phone=541136887781&text&type=phone_number&app_absent=0"
                                    target="_blank"><BsWhatsapp size="40"/></a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div>
                        <div className="container-sello-desktop text-center">
                            <img src={sello} alt="sello"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}