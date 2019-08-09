import React, { Component } from 'react';
import { 
    Container, 
    Row, 
    Col,
    Form,
    FormGroup,
    Input,
    Button
} from 'reactstrap';
import TopNavBar from '../../components/NavBar/index';
import BackgroundSlideshow from 'react-background-slideshow';

import image1 from '../../assets/images/background-1.jpeg';
import image2 from '../../assets/images/background-2.jpeg';
import './styles.scss';

class Home extends Component {
    render() {
        return (
            <div>
                <div className="content-container">
                    <TopNavBar />
                    <Container className="main-body" fluid>
                        <Row className="first-row">
                            <Col xs="12" sm="3" className="form-box">
                                <div className="form-header">
                                    <h3>Hello</h3>
                                    <p>Sign in with your credentials or <br/>create a new account</p>
                                </div>
                                <Form className="form-content">
                                    <FormGroup>
                                        <Input type="email" name="email" placeholder="Email address" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Input type="password" name="email" placeholder="Password" />
                                    </FormGroup>
                                </Form>
                                <div className="form-footer">
                                    <Row>
                                        <Col md="6">
                                            <FormGroup>
                                                <Button color="primary" disabled>Login</Button>
                                            </FormGroup>
                                        </Col>
                                        <Col></Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col xs="12" sm="4"></Col>
                            <Col xs="12" sm="4"></Col>
                        </Row>
                    </Container>
                </div>

                <div className="background-container">
                    <BackgroundSlideshow images={[ image1, image2 ]} />
                </div>
            </div>
        );
    };
};

export default Home;