import React from 'react';
import { Container, Row, Col, Button, ButtonGroup } from 'reactstrap';
import LogoImage from '../../assets/images/logo.png';
import './index.scss';

const TopNavBar = () => {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col xs="12" sm="6"><img src={LogoImage} width="100" alt="logo" /></Col>
                    <Col xs="12" sm="6">
                        <div className="top">
                            <ButtonGroup className="buttonGroup">
                                <Button style={{borderLeft: 0}}>Help</Button>
                                <Button><a href="/web/">About</a></Button>
                                <Button style={{borderRight: 0}}>Contact Us</Button>
                            </ButtonGroup>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default TopNavBar;