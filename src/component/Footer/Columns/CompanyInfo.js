import React from 'react';
import { COMPANY_LOGO } from '../../../const/const';

function CompanyInfo({ companyName }) {
    return (
        <div className="col-md-4 column item">
            <h3>{companyName}</h3>
            <a href="/">
                <img className="company-logo" src={COMPANY_LOGO} alt="" />
            </a>
        </div>
    )
}

export default CompanyInfo
