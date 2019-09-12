import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { verifyUser } from '../../store/actions/authActions';

class ConfirmationView extends Component {
    componentDidMount() {
        const { token } = this.props.match.params;
        const { onVerifyUser } = this.props;
        onVerifyUser(token);
    };

    render() {
        const { isVerified } = this.props;
        return (
            <Fragment>
                <div>
                    {isVerified && 
                        (<p>Your email has been verified successfully. Redirecting in 3</p>)
                    }
                </div>
            </Fragment>
        );
    }
};

const mapStateToProps = state => ({
    isVerified: state.auth.isVerified
});

const mapDispatchToProps = dispatch => ({
    onVerifyUser: (token) => dispatch(verifyUser(token))
});

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmationView);