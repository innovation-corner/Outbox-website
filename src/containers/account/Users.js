import React, { Component } from 'react';
import { connect } from 'react-redux';
import { switchActiveMenu } from '../../store/actions';
import UsersView from '../../components/Account/Users/UsersView';

class Users extends Component {
    render() {
        const { toggleMenu } = this.props;
        return (
            <UsersView 
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

export default connect(mapStateToProps, mapDispatchToProps)(Users);