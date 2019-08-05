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
import TopNavBar from '../components/NavBar/index';
import BackgroundSlideshow from 'react-background-slideshow';

import image1 from '../assets/images/background-1.jpeg';
import image2 from '../assets/images/background-2.jpeg';

class Home extends Component {
    render() {
        return (
            <div>
                <div className="content-container">
                    <TopNavBar />
                    <Container className="main-body" fluid>
                        <Row className="first-row">
                            <Col xs="12" sm="2" className="form-box">
                                <div className="form-header">
                                    <h3>Sale your space</h3>
                                    <p>Or select a folder</p>
                                </div>
                                <Form className="form-content">
                                    <FormGroup>
                                        <Input type="email" name="email" placeholder="Email to" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Input type="email" name="email" placeholder="Your email" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Input type="textarea" name="text" id="exampleText" placeholder="Message"/>
                                    </FormGroup>
                                </Form>
                                <div className="form-footer">
                                    <FormGroup>
                                        <Button color="primary" disabled>Transfer</Button>
                                    </FormGroup>
                                </div>
                            </Col>
                            <Col xs="12" sm="3"></Col>
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