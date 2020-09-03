import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './styles/Footer.css';

function Footer () {
    return(
        <div>
            <footer id="footer">
                <div className="container">
                    <div className="row redes-sociales">
                        <h4 className="col-4"></h4>
                        <div className="col-6 enlace-redes">
                            <a href="https://www.instagram.com/WifiOficial/">
                                <img src="https://imgur.com/HwJhf3t.jpg" alt="instagram" />
                                <strong>@wifioficial</strong>
                            </a>              
                        </div>
 
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;