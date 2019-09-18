import React, { Component, Fragment } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { LayoutView } from '../Layout/LayoutView';
import { ContentContainer } from '../../Reuse/ContentContainer';
import './styles.scss';

class UsersView extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
    };
    
    toggle(tab) {
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
                            <h2>Users</h2>
                        </Col>
                        <Col sm="4">
                            <Nav tabs>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: this.state.activeTab === '1' })}
                                        onClick={() => { this.toggle('1'); }}>
                                        All
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink 
                                        className={classnames({ active: this.state.activeTab === '2' })} 
                                        onClick={() => { this.toggle('2'); }}>
                                        Admins
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Col>
                        <Col sm="6" className="">
                            <Button color="primary" className="pull-right" size="lg">
                                Add Users
                            </Button>
                        </Col>
                    </Row>
                </div>
                <ContentContainer>
                    <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="1">
                            <Row>
                                <Col sm="12">
                                    <h4>Tab 1 Contents</h4>
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