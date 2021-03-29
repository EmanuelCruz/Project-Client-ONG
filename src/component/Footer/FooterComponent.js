import React from 'react';
import './Footer.css';
import CompanyInfo from './Columns/CompanyInfo';
import Copyright from './Columns/Copyright';
import SocialMedia from './Columns/SocialMedia';
import WebLinks from './Columns/WebLinks';
import { COMPANY_NAME } from '../../const/const';

function FooterComponent() {
  return (
    <footer>
      <div className="footer-dark">
        <div className="container">
          <div className="row">
            <CompanyInfo companyName={COMPANY_NAME} />
            <WebLinks webLinks={['Home', 'About', 'Contact']} />
            <SocialMedia />
          </div>
          <Copyright />
        </div>
      </div>
    </footer>
  )
}

export default FooterComponent
