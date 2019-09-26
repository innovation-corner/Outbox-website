import React, { Fragment, Component } from 'react';
import { verifyEmail } from '../../store/services/authService';

class ConfirmationView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVerified: false
        };
    };

    componentDidMount() {
        alert("hello");
        const { token } = this.props.match.params;
        verifyEmail(token)
        .then(response => {
            console.log(response);
            this.setState({
                isVerified: true
            });
        })
        .catch(error => {
            console.log(error);
        })
    };

    render() {
        return (
            <Fragment>
                <div>
                    {
                        !this.state.isVerified ?
                        <p>Verifying your email. Please wait...</p> :
                        <p>Email verified successfully.</p>
                    }
                </div>
            </Fragment>
        );
    }
};

export default ConfirmationView;