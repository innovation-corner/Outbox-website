import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

export const Breadcrumps = ({ children }) => {
    return (
        <Fragment>
            <div id="container" className="kt-container kt-container--fluid  kt-grid__item kt-grid__item--fluid">
                {children}
            </div>
        </Fragment>
    );
};

Breadcrumps.propTypes = {
    // children: PropTypes.string.isRequired
};