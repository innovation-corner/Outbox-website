import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { style } from 'typestyle';

const styles = style({
    subHeader: {
        borderBottom: '1px solid #DEDEDF !important',
        padding: '20px !important'
    },
    h2: {

    }
});

export const Breadcrumps = ({ title }) => {
    return (
        <Fragment>
            <div className="kt-subheader kt-grid__item" id="kt_subheader">
                <div className="kt-container kt-container--fluid ">
                    <div className={styles.subHeader}>
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