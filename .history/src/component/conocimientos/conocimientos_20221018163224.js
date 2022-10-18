import React from 'react';

export const Conocimientos = () =>{
    return(
        <div className='container conocimiento-container-desktop'>
            <div>
                <div>
                    <div>
                        <h3>Experiencia</h3>
                    </div>
                </div>
                <div>
                    <div className='row'>
                    <div className='col-sm-3'>
                        <div>
                            <h4>FRONTEND</h4>
                        </div>
                        <div>
                            <ul>
                                <li>ReactJS</li>
                                <li>CSS</li>
                                <li>HTML</li>
                                <li>BOOTSTRAP</li>
                                <li>SASS</li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-sm-3'>
                        <div>
                            <h4>BACKEND</h4>
                        </div>
                        <div>
                            <ul>
                                <li>NodeJS</li>
                                <li>Express</li>
                                <li>JavaScripts</li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-sm-3'>
                        <div>
                            <h4>SQL</h4>
                        </div>
                        <div>
                            <ul>
                                <li>MongoDB</li>
                                <li>MySQL</li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-sm-3'>
                        <div>
                            <h4>DATA FORM</h4>
                        </div>
                        <div>
                            <ul>
                                <li>JSON</li>
                            </ul>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}