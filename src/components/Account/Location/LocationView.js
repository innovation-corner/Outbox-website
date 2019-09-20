import React, { Component } from 'react';
import { Button, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import LayoutView from '../Layout/LayoutView';
import { ContentContainer } from '../../Reuse/ContentContainer';
import AddLocationModal from '../../modals/AddLocationModal/AddLocationModal';
import { 
    IoIosAdd
} from 'react-icons/io';
import './styles.scss';

class LocationView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: '1',
            modal: false
        };
    };

    componentDidMount() {
        const { toggleMenu } = this.props;
        toggleMenu({
            key: 'location',
            value: true
        });
    };
    
    toggleModal = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    };

    render() {
        return (
            <LayoutView>
                <AddLocationModal modal={this.state.modal} toggle={this.toggleModal} />
                <div className="top-breadcrumb">
                    <Row>
                        <Col sm="6">
                            <h2 className="title">Location</h2>
                        </Col>
                        <Col sm="6" className="">
                            <Button className="pull-right add-btn" size="lg" onClick={this.toggleModal}>
                                Add New {" "}<IoIosAdd />
                            </Button>
                        </Col>
                    </Row>
                </div>
                <ContentContainer>

                </ContentContainer>
            </LayoutView>
        );
    };
};

export default LocationView;