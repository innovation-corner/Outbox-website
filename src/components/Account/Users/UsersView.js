import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Badge, Button, Row, Col, Table } from 'reactstrap';
import classnames from 'classnames';
import LayoutView from '../Layout/LayoutView';
import { ContentContainer } from '../../Reuse/ContentContainer';
import AddUserModal from '../../modals/AddUserModal/AddUserModal';
import { 
    IoIosAdd
} from 'react-icons/io';
import User from '../../../assets/images/user-1.png';
import { Loader } from '../../Reuse/Loader';
import './styles.scss';

class UsersView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: '1',
            modal: false,
            payloadLoading: true
        };
    };

    componentDidMount() {
        const { toggleMenu, getUsers, reset } = this.props;
        toggleMenu({
            key: 'users',
            value: true
        });

        getUsers().then(response => {
            this.setState({
                payloadLoading: false
            });
        });
        reset();
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
        const { addNew, isLoading, businessId, users, locations } = this.props;
        return (
            <LayoutView>
                <div className="top-breadcrumb">
                    <Row>
                        <Col sm="2">
                            <h2 className="title">Users</h2>
                        </Col>
                        <Col sm="4">
                            <Nav className="top-tab" tabs>
                                <NavItem>
                                    <NavLink
                                        className={classnames('tab-item', this.state.activeTab === '1' ? 'active-link' : '')}
                                        onClick={() => { this.toggle('1'); }}>
                                        All {" "}
                                        <Badge color="primary" pill>0</Badge>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink 
                                        className={classnames('tab-item', this.state.activeTab === '2' ? 'active-link' : '')} 
                                        onClick={() => { this.toggle('2'); }}>
                                        Admins {" "}
                                        <Badge color="primary" pill>0</Badge>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Col>
                        <Col sm="6" className="">
                            <Button className="pull-right add-btn" size="lg" onClick={this.toggleModal}>
                                Add Users {" "}<IoIosAdd />
                            </Button>
                        </Col>
                    </Row>
                    <AddUserModal 
                        modal={this.state.modal} 
                        toggle={this.toggleModal}
                        createNew={(payload) => addNew(payload)}
                        isLoading={isLoading}
                        businessId={businessId}
                        locations={locations}
                    />
                </div>
                <ContentContainer className="content-body">
                    <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="1">
                            <Row>
                                <Col sm="12">
                                    { users.length === 0 ?
                                        (<p style={{textAlign: 'center'}}>No users found</p>) :
                                        (
                                            this.state.payloadLoading ? 
                                            (<p style={{textAlign: 'center'}}><Loader color="blue" /></p>) :
                                            (
                                                <Table hover>
                                                    <thead className="table-head">
                                                        <tr>
                                                            <th></th>
                                                            <th>Name</th>
                                                            <th>Email</th>
                                                            <th>Role</th>
                                                            <th>Location</th>
                                                            <th></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody >
                                                        {
                                                            users &&
                                                            users.map(user => {

                                                            })
                                                        }
                                                    </tbody>
                                                </Table>
                                            )
                                        )
                                    } 
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="2">
                            <Row>
                                <Col sm="12">
                                    <p style={{textAlign: 'center'}}>No users found</p>
                                </Col>
                            </Row>
                        </TabPane>
                    </TabContent>
                </ContentContainer>
            </LayoutView>
        );
    };
};

export default UsersView;