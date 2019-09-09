import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login, register } from '../store/actions/authActions';
import LoginView from '../components/LoginPage/LoginView';

class Login extends Component {
    render() {
        const { isLoading } = this.props;
        return (
            <LoginView 
                onLogin={(payload) => this.props.onLogin(payload)}
                onRegister={(payload) => this.props.onRegister(payload)}
                isLoading={isLoading}
            />
        );
    };
};

const mapStateToProps = state => ({
    isLoading: state.auth.isLoading
});

const mapDispatchToProps = dispatch => ({
    onLogin: (payload) => dispatch(login(payload)),
    onRegister: (payload) => dispatch(register(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);