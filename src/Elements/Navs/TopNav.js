import React from 'react';
import { BigLogoWhite } from '../../Utils/Images';
import {AuthLinks} from '../../Utils/Auth';

function TopNav(props) {
    return (
        <div className="tsh-top-nav">
            <img src={BigLogoWhite} alt={BigLogoWhite} />
            <a href="/" className="w3-bar-item w3-text-white">
                Explore <i className="fa fa-chevron-down"></i>
            </a>
            <span className="w3-right w3-padding-large w3-margin-right">
                {
                    props.isAuthenticated ?
                        <span className="w3-btn tsh-name-tag">
                            <img className="" src={props.UserImage} alt={ props.UserImage} />
                            { props.name}
                        </span>
                        : <AuthLinks />

                }


            </span>
        </div>
    )
}

export default TopNav
