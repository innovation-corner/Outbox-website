import React from 'react';
import { Container, Row, Col, Button, ButtonGroup } from 'reactstrap';
import LogoImage from '../../assets/images/logo.png';
import './index.scss';

const TopNavBar = () => {
    return(
        <div>
            <Container fluid>
                <Row>
                    <Col xs="12" sm="6"><img src={LogoImage} width="100" alt="logo" /></Col>
                    <Col xs="12" sm="6">
                        <div className="top">
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