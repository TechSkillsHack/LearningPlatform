import React from 'react'
import PropTypes from 'prop-types'

function FlashCard(props) {
    return (
        <div className="w3-row">
            <div className="w3-col l3 m3 s4">
                <div className="w3-card-4 w3-margin w3-white w3-round-xlarge">
                    <img src={props.coverImage} src={props.title} />
                </div>
            </div>
        </div>
    )
}

FlashCard.propTypes = {
    coverImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default FlashCard

