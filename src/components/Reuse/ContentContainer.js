import React from 'react';
import PropTypes from 'prop-types';

export const ContentContainer = ({ children }) => {
    return (
        <div className="kt-container kt-container--fluid  kt-grid__item kt-grid__item--fluid" id="container">
            {children}
        </div>
    );
};

ContentContainer.propTypes = {
    children: PropTypes.any.isRequired
};