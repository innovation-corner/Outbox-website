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
import TopNavBar from '../NavBar/index';
import { Loader } from '../Reuse/Loader';
import BackgroundSlideshow from 'react-background-slideshow';
import image1 from '../../assets/images/background-1.jpeg';
import image2 from '../../assets/images/background-2.jpeg';
import './styles.scss';

class LoginView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            businessName: "",
            showReg: false,
            type: "password"
        };
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    toggleFormView = () => {
        this.setState({showReg: this.state.showReg ? false : true});
    };

    showHidePassword = e => {
        e.preventDefault();
        this.setState({
            type: this.state.type === "input" ? "password" : "input"
        });
    };

    handleSignUp = (e) => {
        e.preventDefault();
        const { onRegister } = this.props;
        const payload = {
            businessName: this.state.businessName,
            email: this.state.email,
            password: this.state.password
        };
        onRegister(payload);
    };

    handleSignIn = (e) => {
        e.preventDefault();
        const { onLogin } = this.props;
        const payload = {
            email: this.state.email,
            password: this.state.password
        };
        onLogin(payload);
    };

    render() {
        const { isLoading } = this.props;
        return (
            <div>
                <div className="content-container">
                    <TopNavBar />
                    <Container className="main-body" fluid>
                        <Row className="first-row">
                            <Col xs="12" sm="12" md="4" lg="3" className="form-box">
                                {this.state.showReg ? 
                                (
                                    <div>
                                        <div className="form-header">
                                            <h3>Create new account</h3>
                                            <p>
                                                Already have an account? <br/>
                                                <button type="button" onClick={this.toggleFormView}>Sign In</button>
                                            </p>
                                        </div>
                                        <Form className="form-content" onSubmit={this.handleSignUp}>
                                            <FormGroup>
                                                <Input 
                                                    type="text" 
                                                    name="businessName" 
                                                    placeholder="Business name" 
                                                    onChange={this.handleChange}
                                                    value={this.state.businessName}
                                                />
                                            </FormGroup>
                                            <FormGroup>
                                                <Input 
                                                    type="email" 
                                                    name="email" 
                                                    placeholder="Email address" 
                                                    onChange={this.handleChange} 
                                                    valaue={this.state.email}
                                                />
                                            </FormGroup>
                                            <FormGroup>
                                                <Input 
                                                    type={this.state.type} 
                                                    name="password" 
                                                    placeholder="Password" 
                                                    onChange={this.handleChange} 
                                                    value={this.state.password}
                                                />
                                                <span
                                                    className="fa fa-fw fa-eye field-icon toggle-password"
                                                    onClick={this.showHidePassword}
                                                />
                                            </FormGroup>
                                            <div className="form-footer">
                                                <FormGroup>
                                                    { 
                                                        isLoading ? 
                                                        (<Loader color="primary" />) : 
                                                        (<Button color="primary" type="submit">Sign Up</Button>)
                                                    }
                                                </FormGroup> 
                                            </div>
                                        </Form>
                                    </div>
                                ) : 
                                (
                                    <div>
                                        <div className="form-header">
                                            <h3>Hello</h3>
                                            <p>
                                                Sign in with your credentials or <br/>
                                                <button onClick={this.toggleFormView}>create a new account</button>
                                            </p>
                                        </div>
                                        <Form className="form-content" onSubmit={this.handleSignIn}>
                                            <FormGroup>
                                                <Input 
                                                    type="email" 
                                                    name="email" 
                                                    placeholder="Email address"
                                                    onChange={this.handleChange}
                                                    value={this.state.email}
                                                />
                                            </FormGroup>
                                            <FormGroup>
                                                <Input 
                                                    type={this.state.type}
                                                    name="password" 
                                                    placeholder="Password"
                                                    onChange={this.handleChange}
                                                    value={this.state.password}
                                                />
                                                <span
                                                    className="fa fa-fw fa-eye field-icon toggle-password"
                                                    onClick={this.showHidePassword}
                                                />
                                            </FormGroup>
                                            <div className="form-footer">
                                                <FormGroup>
                                                    { 
                                                        isLoading ? 
                                                        (<Loader color="primary" />) : 
                                                        (<Button color="primary" type="submit">Login</Button>)
                                                    }
                                                </FormGroup>
                                            </div>
                                        </Form>
                                    </div>
                                )
                                }
                            </Col>
                            <Col xs="12" sm="12" md="4" lg="4"></Col>
                            <Col xs="12" sm="12" md="4" lg="4"></Col>
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

export default LoginView;