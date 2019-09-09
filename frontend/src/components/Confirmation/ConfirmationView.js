import React, { Fragment, Component } from 'react';

class ConfirmationView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVerified: false
        };
    };

    componentWillMount() {
        //get user token here for verification
    };

    render() {
        return (
            <Fragment>
                <div>
                    {isVerified && 
                        <>
                            <p>Your email has been verified successfully. Redirecting in 3</p>
                        </>
                    }
                </div>
            </Fragment>
        );
    }
};

export default ConfirmationView;