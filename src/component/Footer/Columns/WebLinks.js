import React from 'react'

function WebLinks({ webLinks }) {
    return (
        <div className="col-md-4 column item">
            <h3>Links</h3>
            <ul>
                {webLinks.map((webLink, index) => (
                    <li key={`wl-${index}`}><a href="#">{webLink}</a></li>
                ))}
            </ul>
        </div>
    )
}

export default WebLinks
