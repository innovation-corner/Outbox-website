import React, { Component } from 'react';
import { Button, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import LayoutView from '../Layout/LayoutView';
import { ContentContainer } from '../../Reuse/ContentContainer';
import AddLocationModal from '../../modals/AddLocationModal/AddLocationModal';
import LocationCard from '../../Reuse/LocationCard';
import { 
    IoIosAdd
} from 'react-icons/io';
import './styles.scss';
import { Loader } from '../../Reuse/Loader';

class LocationView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: '1',
            modal: false,
            payloadLoading: true
        };
    };

    componentDidMount() {
        const { toggleMenu, getLocations } = this.props;
        getLocations().then(payload => {
            this.setState({
                payloadLoading: false
            });
        });

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
        const { addNew, isLoading, reset, locations, businessId } = this.props;
        return (
            <LayoutView>
                <AddLocationModal 
                    modal={this.state.modal} 
                    toggle={this.toggleModal} 
                    createNew={(payload) => addNew(payload)}
                    isLoading={isLoading}
                    reset={() => reset()}
                    businessId={businessId}
                />

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
                    {
                        this.state.payloadLoading ? 
                        (<p style={{textAlign: 'center'}}><Loader color="blue" /></p>) :
                        (
                            <Row>
                                {
                                    locations && 
                                    locations.map(location=> (
                                        <LocationCard 
                                            key={location.id}
                                            name={location}
                                            address={location}
                                            user={location}
                                            rooms={location}
                                        />
                                    ))
                                }
                            </Row>
                        )
                    }
                </ContentContainer>
            </LayoutView>
        );
    };
};

export default LocationView;