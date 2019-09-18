import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Badge, Button, Row, Col, Table } from 'reactstrap';
import classnames from 'classnames';
import { LayoutView } from '../Layout/LayoutView';
import { ContentContainer } from '../../Reuse/ContentContainer';
import { 
    IoIosAdd
} from 'react-icons/io';
import User from '../../../assets/images/user-1.png';
import './styles.scss';

class UsersView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: '1'
        };
    };
    
    toggle = (tab) => {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        };
    };

    render() {
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
                                        <Badge color="primary" pill>121</Badge>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink 
                                        className={classnames('tab-item', this.state.activeTab === '2' ? 'active-link' : '')} 
                                        onClick={() => { this.toggle('2'); }}>
                                        Admins {" "}
                                        <Badge color="primary" pill>45</Badge>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Col>
                        <Col sm="6" className="">
                            <Button className="pull-right add-btn" size="lg">
                                Add Users {" "}<IoIosAdd />
                            </Button>
                        </Col>
                    </Row>
                </div>
                <ContentContainer className="content-body">
                    <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="1">
                            <Row>
                                <Col sm="12">
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
                                        <tr>
                                            <th scope="row"></th>
                                            <td>
                                                <img className="" alt="profile-pic" src={User}/>
                                                <span>Mark</span>
                                            </td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </Table>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="2"></TabPane>
                    </TabContent>
                </ContentContainer>
            </LayoutView>
        );
    };
};

export default UsersView;