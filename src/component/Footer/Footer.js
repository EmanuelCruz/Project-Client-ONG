import React from 'react'
import CompanyInfo from './CompanyInfo'
import Copyright from './Copyright'
import './Footer.css'
import SocialMedia from './SocialMedia'
import WebLinks from './WebLinks'

function Footer({ companyName, webLinks }) {
  return (
    <div class="footer-dark">
      <footer>
        <div class="container">
          <div class="row">
            <CompanyInfo companyName={companyName} />
            <WebLinks webLinks={webLinks} />
            <SocialMedia />
          </div>
          <Copyright />
        </div>
      </footer>
    </div>
  )
}

export default Footer
