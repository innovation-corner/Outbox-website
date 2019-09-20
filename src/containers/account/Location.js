import React, { Component } from 'react';
import { connect } from 'react-redux';
import { switchActiveMenu } from '../../store/actions';
import LocationView from '../../components/Account/Location/LocationView';

class Location extends Component {
    render() {
        const { toggleMenu } = this.props;
        return (
            <LocationView 
                toggleMenu={(payload) => toggleMenu(payload)}
            />
        );
    };
};

const mapStateToProps = state => ({
    
});

const mapDispatchToProps = dispatch => ({
    toggleMenu: (payload) => dispatch(switchActiveMenu(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Location);