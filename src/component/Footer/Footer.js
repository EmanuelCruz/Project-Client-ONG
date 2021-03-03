import React from 'react'
import './Footer.css'
import CompanyInfo from './Columns/CompanyInfo'
import Copyright from './Columns/Copyright'
import SocialMedia from './Columns/SocialMedia'
import WebLinks from './Columns/WebLinks'

function Footer({ companyName, webLinks }) {
  return (
    <div class="footer-dark">
      <footer>
        <div class="container">
          <div class="row">
            <CompanyInfo companyName={'ONG Alkemy'} />
            <WebLinks webLinks={['Home', 'About', 'Contact']} />
            <SocialMedia />
          </div>
          <Copyright />
        </div>
      </footer>
    </div>
  )
}

export default Footer
