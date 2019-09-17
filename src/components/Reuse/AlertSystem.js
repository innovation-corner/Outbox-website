import React, { Fragment } from 'react';
import { Alert } from 'reactstrap';
import { connect } from 'react-redux';

class AlertSystem extends React.Component {
    render() {
        const { message, type, isActive } = this.props;
        return (
            <Fragment>
                {isActive &&
                    <Alert color={type}>
                        {message}
                    </Alert>
                }
            </Fragment>
        );
    }
};

const mapStateToProps = state => ({
    message: state.alert.message,
    type: state.alert.type,
    isActive: state.alert.isActive
});

export default connect(mapStateToProps, null)(AlertSystem);