import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

export const Breadcrumps = ({ title }) => {
    return (
        <Fragment>
            <div className="kt-subheader kt-grid__item" id="kt_subheader">
                <div className="kt-container kt-container--fluid">
                    <div className="kt-subheader__main">
                        <h2>{title}</h2>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

Breadcrumps.propTypes = {
    title: PropTypes.string.isRequired
};