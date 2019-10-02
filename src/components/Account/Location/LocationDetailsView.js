import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Button, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import LayoutView from '../Layout/LayoutView';
import { ContentContainer } from '../../Reuse/ContentContainer';
import AddRoomModal from '../../modals/AddRoomModal/AddRoomModal';
import { IoIosAdd, IoIosFolderOpen } from 'react-icons/io';
import User from '../../../assets/images/user-1.png';
import { Loader } from '../../Reuse/Loader';
import './styles.scss';

class LocationDetailsView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: '1',
            modal: false,
            payloadLoading: true
        };
    };

    componentDidMount() {
        const { toggleMenu, reset, getLocationDetails, params } = this.props;
        getLocationDetails(params.id);
        reset();
        toggleMenu({key: 'users', value: true});
    };
    
    toggle = (tab) => {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        };
    };

    toggleModal = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    };

    render() {
        const { addNewRoom, isLoading, businessId, locationDetails, allRooms } = this.props;
        return (
            <LayoutView>
                <div className="top-breadcrumb">
                    <Row>
                        <Col sm="2">
                            <h2 className="title">{locationDetails.name}</h2>
                        </Col>
                        <Col sm="4">
                            <Nav className="top-tab" tabs>
                                <NavItem>
                                    <NavLink
                                        className={classnames('tab-item', this.state.activeTab === '1' ? 'active-link' : '')}
                                        onClick={() => { this.toggle('1'); }}>
                                        Rooms {" "}
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink 
                                        className={classnames('tab-item', this.state.activeTab === '2' ? 'active-link' : '')} 
                                        onClick={() => { this.toggle('2'); }}>
                                        Users {" "}
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Col>
                        <Col sm="6" className="">
                            <Button className="pull-right add-btn" size="lg" onClick={this.toggleModal}>
                                New Room {" "}<IoIosAdd />
                            </Button>
                        </Col>
                    </Row>
                    <AddRoomModal 
                        modal={this.state.modal} 
                        toggle={this.toggleModal}
                        createNew={(payload) => addNewRoom(payload)}
                        isLoading={isLoading}
                        businessId={businessId}
                    />
                </div>
                <ContentContainer className="content-body">
                    <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="1">
                            <Row>
                                <Col sm="12">
                                    { allRooms.length === 0 ?
                                        (<div style={{textAlign: 'center'}}>
                                            <IoIosFolderOpen style={{fontSize: '70px', color: '#7540EE'}}/><br/>
                                            <h3>No Rooms</h3>
                                            <p>Use the add room button to create a new room for your location.</p> 
                                            <Button style={{backgroundColor: '#7540EE'}} className="add-btn" size="sm" onClick={this.toggleModal}><IoIosAdd />{" "} Add Users </Button>
                                        </div>
                                        ) :
                                        (
                                            this.state.payloadLoading ? 
                                            (<div style={{textAlign: 'center'}}><Loader color="blue" /></div>) :
                                            (
                                                <></>
                                            )
                                        )
                                    } 
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="2">
                            <Row>
                                <Col sm="12">
                                    <div style={{textAlign: 'center'}}>
                                        <IoIosFolderOpen style={{fontSize: '70px', color: '#7540EE'}}/><br/>
                                        <h3>No Users</h3>
                                        <p>Use the new user button to create a new users for your business.</p> 
                                        <Button style={{backgroundColor: '#7540EE'}} className="add-btn" size="sm" onClick={this.toggleModal}><IoIosAdd />{" "} Add Users </Button>
                                    </div>
                                </Col>
                            </Row>
                        </TabPane>
                    </TabContent>
                </ContentContainer>
            </LayoutView>
        );
    };
};

export default LocationDetailsView;