import React, { Component } from 'react';
import { connect } from 'react-redux';
import { switchActiveMenu } from '../../store/actions';
import DashboardView from '../../components/Account/Dashboard/DashboardView';

class Dashboard extends Component {
    render() {
        const { toggleMenu } = this.props;
        return (
            <DashboardView 
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);