import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login, register, reset } from '../store/actions/authActions';
import LoginView from '../components/LoginPage/LoginView';

class Login extends Component {
    render() {
        const { isLoading, message } = this.props;
        return (
            <LoginView 
                onLogin={(payload) => this.props.onLogin(payload)}
                onRegister={(payload) => this.props.onRegister(payload)}
                onReset={() => this.props.onReset()}
                isLoading={isLoading}
                message={message}
            />
        );
    };
};

const mapStateToProps = state => ({
    isLoading: state.auth.isLoading,
    message: state.auth.message
});

const mapDispatchToProps = dispatch => ({
    onLogin: (payload) => dispatch(login(payload)),
    onRegister: (payload) => dispatch(register(payload)),
    onReset: () => dispatch(reset())
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);