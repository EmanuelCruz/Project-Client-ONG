import React from 'react'

function WebLinks({ webLinks }) {
    return (
        <div className="col-md-4 column item">
            <h3>Links</h3>
            <ul>
                <li key={`wl-home`}><a href="/">Home</a></li>
                <li key={`wl-about`}><a href="/nosotros">About</a></li>
                <li key={`wl-contact`}><a href="/contacto">Contact</a></li>
            </ul>
        </div>
    )
}

export default WebLinks
