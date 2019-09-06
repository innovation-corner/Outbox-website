import React from 'react';
import { connect } from 'react-redux';
import { login, register } from '../store/actions/authActions';
import LoginView from '../components/LoginPage/LoginView';

class Login extends Component {

    login = (payload) => {
        const { onLogin } = this.props;
        onLogin(payload);
    };

    register= (payload) => {
        const { onRegister } = this.props;
        onRegister(payload);
    };

    render() {
        const { isLoading } = this.props;

        return (
            <LoginView 
                onLogin={payload => this.login(payload)}
                onRegister={payload => this.register(payload)}
                isLoading={isLoading}
            />
        );
    };
};

const mapStateToProps = state => ({
    isLoading: state.isLoading
});

const mapDispatchToProps = dispatch => ({
    onLogin: (payload) => dispatch(login(payload)),
    onRegister: (data) => dispatch(register(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);