import React, { Component } from 'react';
import { Button, Row, Col } from 'reactstrap';
import LayoutView from '../Layout/LayoutView';
import { ContentContainer } from '../../Reuse/ContentContainer';
import AddLocationModal from '../../modals/AddLocationModal/AddLocationModal';
import LocationCard from '../../Reuse/LocationCard';
import { IoIosAdd, IoIosFolderOpen } from 'react-icons/io';
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
        const { toggleMenu, getLocations, reset } = this.props;
        getLocations().then(payload => {
            this.setState({
                payloadLoading: false
            });
        });

        toggleMenu({
            key: 'location',
            value: true
        });
        reset();
    };
    
    toggleModal = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    };

    render() {
        const { addNew, isLoading, locations, businessId } = this.props;
        return (
            <LayoutView>
                <AddLocationModal 
                    modal={this.state.modal} 
                    toggle={this.toggleModal} 
                    createNew={(payload) => addNew(payload)}
                    isLoading={isLoading}
                    businessId={businessId}
                />
                <div className="top-breadcrumb">
                    <Row>
                        <Col sm="6">
                            <h2 className="title">Location</h2>
                        </Col>
                        <Col sm="6" className="">
                            <Button className="pull-right add-btn" size="lg" onClick={this.toggleModal}>
                               New Location {" "}<IoIosAdd />
                            </Button>
                        </Col>
                    </Row>
                </div>
                <ContentContainer>
                    { locations.length === 0 ?
                        (<div style={{textAlign: 'center'}}>
                            <IoIosFolderOpen style={{fontSize: '70px', color: '#7540EE'}}/><br/>
                            <h3>No locations</h3>
                            <p>Use the new location button to create a new location for your business.</p> 
                            <Button style={{backgroundColor: '#7540EE'}} className="add-btn" size="sm" onClick={this.toggleModal}><IoIosAdd />{" "} Add Users </Button>
                        </div>
                        ) : (
                            this.state.payloadLoading ? 
                            (<div style={{textAlign: 'center'}}><Loader color="blue" /></div>) :
                            (
                                <Row>
                                    {locations && 
                                    locations.map(location => (
                                        <LocationCard 
                                            key={location.id}
                                            name={location.name}
                                            address={location.address}
                                            user=""
                                            rooms={[]}
                                        />
                                    ))}
                                </Row>
                            )
                        ) 
                    }
                </ContentContainer>
            </LayoutView>
        );
    };
};

export default LocationView;