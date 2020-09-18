import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/Footer.css'

function Footer() {
  return (
    <div>
      <footer id="footer">
        <div>
          <div className="redes-sociales">
            <div className="enlace-redes">
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

export default Footer
