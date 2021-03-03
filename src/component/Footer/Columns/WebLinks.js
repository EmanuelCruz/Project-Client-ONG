import React from 'react'

function WebLinks({ webLinks }) {
    return (
        <div class="col-md-4 column item">
            <h3>Links</h3>
            <ul>
                {webLinks.map(webLink => (
                    <li><a href="#">{webLink}</a></li>
                ))}
            </ul>
        </div>
    )
}

export default WebLinks
