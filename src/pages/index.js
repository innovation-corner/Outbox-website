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

class Home extends Component {
    render() {
        return (
            <div>
                 <TopNavBar />
                <Container className="main-body">
                    <Row>
                        <Col xs="6" sm="3" className="form-box">
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
                        <Col xs="6" sm="3"></Col>
                        <Col xs="6" sm="4"></Col>
                    </Row>
                </Container>
            </div>
        );
    };
};

export default Home;