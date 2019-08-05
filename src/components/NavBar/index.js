import React from 'react';
import { Container, Row, Col, Button, ButtonGroup } from 'reactstrap';
import './index.scss';

const TopNavBar = () => {
    return(
        <div>
            <Container fluid>
                <Row>
                    <Col xs="12" sm="6"></Col>
                    <Col xs="12" sm="6">
                        <div className="pull-right">
                            <ButtonGroup className="buttonGroup">
                                <Button>Help</Button>
                                <Button>About</Button>
                                <Button>Contact Us</Button>
                            </ButtonGroup>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default TopNavBar;