import React, { Component } from 'react';
import { connect } from 'react-redux';
import { switchActiveMenu } from '../../../store/actions';
import { addNewRoom, getAll, getLocationDetails } from '../../../store/actions/locationActions';
import { reset } from '../../../store/actions/authActions';
import LocationDetailsView from '../../../components/Account/Location/LocationDetailsView';

class LocationDetails extends Component {
    render() {
        const { 
            toggleMenu, 
            addNewRoom, 
            isLoading, 
            onReset, 
            getLocations,
            allLocations,
            businessId,
            getLocationDetails,
            locationDetails,
            params
        } = this.props;
        return (
            <LocationDetailsView 
                toggleMenu={(payload) => toggleMenu(payload)}
                addNewRoom={(payload) => addNewRoom(payload)}
                isLoading={isLoading}
                reset={() => onReset()}
                allRooms={() => getLocations()}
                allUsers={allLocations}
                businessId={businessId}
                getLocationDetails={id => getLocationDetails(id)}
                locationDetails={locationDetails}
                params={params}
            />
        );
    };
};

const mapStateToProps = (state, ownProps) => ({
    params: ownProps.match.params,
    allRooms: state.location.locationRooms,
    allUsers: state.location.locationUsers,
    locationDetails: state.location.locationDetails,
    isLoading: state.auth.isLoading,
    businessId: state.auth.userData.businessId
});

const mapDispatchToProps = dispatch => ({
    toggleMenu: (payload) => dispatch(switchActiveMenu(payload)),
    addNewRoom: (payload) => dispatch(addNewRoom(payload)),
    onReset: () => dispatch(reset()),
    getLocationDetails: id => dispatch(getLocationDetails(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationDetails);