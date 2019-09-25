import React, { Component } from 'react';
import { connect } from 'react-redux';
import { switchActiveMenu } from '../../store/actions';
import { addNew, getAll } from '../../store/actions/usersActions';
import { reset } from '../../store/actions/authActions';
import UsersView from '../../components/Account/Users/UsersView';

class Users extends Component {
    render() {
        const { 
            toggleMenu, 
            allUsers, 
            isLoading, 
            businessId,
            onReset,
            addNewUser,
            getUsers,
            locations
        } = this.props;

        return (
            <UsersView 
                toggleMenu={(payload) => toggleMenu(payload)}
                users={allUsers}
                isLoading={isLoading}
                businessId={businessId}
                reset={() => onReset()}
                addNew={(payload) => addNewUser(payload)}
                getUsers={() => getUsers()}
                locations={locations}
            />
        );
    };
};

const mapStateToProps = state => ({
    allUsers: state.user.users,
    isLoading: state.auth.isLoading,
    businessId: state.auth.userData.businessId,
    locations: state.location.locations
});

const mapDispatchToProps = dispatch => ({
    toggleMenu: (payload) => dispatch(switchActiveMenu(payload)),
    addNewUser: (payload) => dispatch(addNew(payload)),
    onReset: () => dispatch(reset()),
    getUsers: () => dispatch(getAll())
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);