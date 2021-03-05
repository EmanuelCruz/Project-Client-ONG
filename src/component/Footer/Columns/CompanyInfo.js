import React from 'react'

function CompanyInfo({ companyName }) {
    return (
        <div className="col-md-4 column item">
            <h3>{companyName}</h3>
            <a href="/home">
                <img className="company-logo" src="https://www.freepnglogos.com/uploads/vodafone-png-logo/vodafone-logo-clarify-business-development-16.png" alt="" />
            </a>
        </div>
    )
}

export default CompanyInfo
