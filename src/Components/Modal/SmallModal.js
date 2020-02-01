import React, { Fragment } from 'react'
import PropTypes from 'proptypes';

function SmallModal() {
    const { modalId, children } = this.props;
    return (
        <Fragment>
            <div id={modalId} className="w3-modal w3-animate-opacity">
                <div className="tsh-modal w3-modal-content w3-round-large w3-card-4 w3-animate-top">
                    <div class="w3-container w3-padding-32">
                        <span className="w3-button w3-display-topright w3-round-large">&times;</span>
                        {children}
                    </div>
                </div>
            </div>
        </Fragment>
    );
    
}
SmallModal.propTypes = {
    modalID: PropTypes.string.isRequired,
    children: PropTypes.object.isRequired
}

export default SmallModal
