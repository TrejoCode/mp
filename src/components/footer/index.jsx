/**
 *  @name: footer.jsx
 *  @version: 1.0.0
 *  @author: Trejocode - Sergio
 *  @description: Componente Footer
*/

import React from 'react';

// Images
import ImgLogoFooter from '../../img/img_logo_footer.jpg';

const Footer = () => (

    <footer className="justify-center">
        <div className="container">
            <div className="row-responsive full">
                <div className="left full">
                    <div className="responsive-img">
                        <img src = { ImgLogoFooter } alt="Logo Moon Palace" />
                    </div>
                </div>
                <div className="middle full column">
                    <b className="color-white">
                        CANCÚN, MÉXICO
                    </b>
                    <p className="color-white">
                        Moon Palace Cancún
                    </p>
                    <p className="color-white">
                        The Grand At Moon Palace
                    </p>
                    <p className="color-white">
                        Beach Palace
                    </p>
                    <p className="color-white">
                        Sun Palace
                    </p>
                    <p className="color-white">
                        Le Blanc Spa Resorts Cancún
                    </p>
                </div>
                <div className="middle full column">
                    <b className="color-white uppercase">
                        Isla Mujeres, México
                    </b>
                    <p className="color-white">
                        Isla Mujeres Palace
                    </p>
                    <div className="white-space-16"></div>
                    <b className="color-white uppercase font-mini">
                        Ocho Ríos, Jamaica
                    </b>
                    <p className="color-white">
                        Moon Palace, Jamaica
                    </p>
                    <div className="white-space-16"></div>
                    <b className="color-white uppercase font-mini">
                        Los Cabos, México
                    </b>
                    <p className="color-white">
                        Le Blanc Spa Resort Los Cabos
                    </p>
                </div>
                <div className="right full column">
                    <b className="color-white uppercase">
                        Cozumel, México
                    </b>
                    <p className="color-white">
                        Cozumel Palace
                    </p>
                    <div className="white-space-16"></div>
                    <b className="color-white uppercase">
                        Playa del Carmen, México
                    </b>
                    <p className="color-white">
                        Playacar Palace
                    </p>
                </div>
            </div>
        </div>
    </footer>

);

export default Footer;