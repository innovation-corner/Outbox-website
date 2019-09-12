import React from 'react';
import { Spinner } from 'reactstrap';
import PropTypes from 'prop-types';

export const Loader = ({ color }) => {
    return (<Spinner color={color} />)
};

Loader.propTypes = {
    color: PropTypes.string.isRequired
};