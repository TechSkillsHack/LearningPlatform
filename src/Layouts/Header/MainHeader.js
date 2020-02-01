import React from 'react';
import { SearchBox } from '../../Components/InputBox';

function MainHeader() {
    return (
        <div className="tsh-main-header w3-text-white">
            <div className="tsh-faded-mask ">
                <div className="w3-container w3-center tsh-padder">
                    <h1>Learn Anything Anytime Anywhere </h1>
                    <p>Nigeria's' Best E-Learning Platform</p>
                    <SearchBox/> 
                </div>
            </div>
        </div>
    )
}

export default MainHeader
