import React, { Fragment } from 'react';

function AuthLinks() {
    
    return (
        <Fragment>

            <a href="/login" className="w3-bar-item w3-text-white">Login</a> 
            <a href="/signup" className="tsh-signup-btn w3-bar-item w3-button">Sign Up</a>
       </Fragment>
    )
}

export default AuthLinks
