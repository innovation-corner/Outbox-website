import React, { Component } from 'react';
import { connect } from 'react-redux';
import { switchActiveMenu } from '../../store/actions';
import { addNew, getAll } from '../../store/actions/locationActions';
import { reset } from '../../store/actions/authActions';
import LocationView from '../../components/Account/Location/LocationView';

class Location extends Component {
    render() {
        const { 
            toggleMenu, 
            addNewLocation, 
            isLoading, 
            onReset, 
            getLocations,
            allLocations,
            businessId,
        } = this.props;
        return (
            <LocationView 
                toggleMenu={(payload) => toggleMenu(payload)}
                addNew={(payload) => addNewLocation(payload)}
                isLoading={isLoading}
                reset={() => onReset()}
                getLocations={() => getLocations()}
                locations={allLocations}
                businessId={businessId}
            />
        );
    };
};

const mapStateToProps = state => ({
    allLocations: state.location.locations,
    locationDetails: state.location.locationDetails,
    isLoading: state.auth.isLoading,
    businessId: state.auth.userData.businessId,
});

const mapDispatchToProps = dispatch => ({
    toggleMenu: (payload) => dispatch(switchActiveMenu(payload)),
    addNewLocation: (payload) => dispatch(addNew(payload)),
    onReset: () => dispatch(reset()),
    getLocations: () => dispatch(getAll()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Location);