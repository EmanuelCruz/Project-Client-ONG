import React from 'react'
import './Footer.css'
import CompanyInfo from './Columns/CompanyInfo'
import Copyright from './Columns/Copyright'
import SocialMedia from './Columns/SocialMedia'
import WebLinks from './Columns/WebLinks'

function FooterComponent() {
  return (
    <div className="footer-dark">
      <footer>
        <div className="container">
          <div className="row">
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

export default FooterComponent
