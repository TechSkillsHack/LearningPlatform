import React from 'react'
import PropTypes from 'prop-types'

function Section(props) {
    const { xclass} = props;
    return (
        <div className={"w3-main "+xclass}>
            {props.children}
        </div>
    )
}

Section.propTypes = {
    xclass: PropTypes.string,
    children: PropTypes.object.isRequired
}

export default Section

