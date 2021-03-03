import React from 'react'
import './Footer.css'

function Footer({ companyName, webLinks }) {
  return (
    <div class="footer-dark">
      <footer>
        <div class="container">
          <div class="row">
            <div class="col-md-4 column item">
              <h3>{companyName}</h3>
              <a href="/home">
                <img className="company-logo" src="https://www.freepnglogos.com/uploads/vodafone-png-logo/vodafone-logo-clarify-business-development-16.png" alt="" />
              </a>
            </div>
            <div class="col-md-4 column item">
              <h3>Links</h3>
              <ul>
                {webLinks.map(webLink => (
                  <li><a href="#">{webLink}</a></li>
                ))}
              </ul>
            </div>
            <div class="col-md-4 column item">
              <h3>¡Seguinos en nuestras redes!</h3>
              <div class="col item social">
                <a href="#"><i class="bi bi-facebook"></i></a><a href="#"><i class="bi bi-twitter"></i></a>
                <a href="#"><i class="bi bi-linkedin"></i></a><a href="#"><i class="bi bi-instagram"></i></a>
              </div>
            </div>
          </div>
          <p class="copyright">ONG Alkemy © 2021</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
