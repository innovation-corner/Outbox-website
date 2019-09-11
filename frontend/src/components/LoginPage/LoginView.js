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
import InputField from '../Reuse/InputField/InputField';
import { validatePassword, validateEmail } from '../../utils/regexValidation';
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
            firstName: "",
            lastName: "",
            showReg: false,
            type: "password",
            error: {} 
        };
    };

    componentDidMount() { 
        this.props.onReset(); 
    };

    emailInputChange= ({ target: { value, name } }) => {
        validateEmail("emailErr", value, this);
        this.setState({
            email: value
        });
    };

    handleInputChange = ({ target: { value, name } }) => {
        validatePassword("passwordErr", value, this);
        this.setState({
            [name]: value
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
        const { onRegister, onReset } = this.props;
        const payload = {
            businessName: this.state.businessName,
            email: this.state.email,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName
        };
        onReset();
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
        const { isLoading, message } = this.props;
        const { 
            error: { passwordErr } 
        } = this.state;
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
                                                <InputField 
                                                    fieldName="firstName" 
                                                    fieldType="text" 
                                                    fieldValue={this.state.firstName} 
                                                    onChangeField={ 
                                                        this.handleInputChange 
                                                    }
                                                    placeholder="First Name"
                                                    error={message} 
                                                /> 
                                                {message && ( 
                                                    <small style={{ color: "red" }}> 
                                                        {message} 
                                                    </small> 
                                                )} 
                                            </FormGroup>
                                            <FormGroup>
                                            <InputField 
                                                    fieldName="lastName" 
                                                    fieldType="text" 
                                                    fieldValue={this.state.lastName} 
                                                    onChangeField={ 
                                                        this.handleInputChange 
                                                    }
                                                    placeholder="Last Name"
                                                    error={message} 
                                                /> 
                                                {message && ( 
                                                    <small style={{ color: "red" }}> 
                                                        {message} 
                                                    </small> 
                                                )} 
                                            </FormGroup>
                                            <FormGroup>
                                                <InputField 
                                                    fieldName="businessName" 
                                                    fieldType="text" 
                                                    fieldValue={this.state.businessName} 
                                                    onChangeField={ 
                                                        this.handleInputChange 
                                                    }
                                                    placeholder="Business Name"
                                                    error={message} 
                                                /> 
                                                
                                            </FormGroup>
                                            <FormGroup>
                                                <InputField 
                                                    fieldName="email" 
                                                    fieldType="email" 
                                                    fieldValue={this.state.email} 
                                                    onChangeField={ 
                                                        this.emailInputChange 
                                                    }
                                                    placeholder="Email Address"
                                                    error={message || this.state.error.emailErr} 
                                                />
                                                {this.state.error.emailErr && ( 
                                                    <small style={{ color: "red" }}> 
                                                        {this.state.error.emailErr} 
                                                    </small> 
                                                )} 
                                            </FormGroup>
                                            <FormGroup>
                                                <InputField 
                                                    fieldName="password" 
                                                    fieldType={this.state.type} 
                                                    fieldValue={this.state.password} 
                                                    onChangeField={ 
                                                        this.handleInputChange 
                                                    } 
                                                    show 
                                                    onShowPassword={this.showHidePassword} 
                                                    error={message || passwordErr} 
                                                /> 
                                                {passwordErr && ( 
                                                    <small style={{ color: "red" }}> 
                                                        {passwordErr} 
                                                    </small> 
                                                )} 
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
                                                <InputField 
                                                    fieldName="email" 
                                                    fieldType="email" 
                                                    fieldValue={this.state.email} 
                                                    onChangeField={ 
                                                        this.emailInputChange 
                                                    }
                                                    placeholder="Email Address"
                                                />
                                            </FormGroup>
                                            <FormGroup>
                                                <InputField 
                                                    fieldName="password" 
                                                    fieldType={this.state.type} 
                                                    fieldValue={this.state.password} 
                                                    onChangeField={ 
                                                        this.handleInputChange 
                                                    } 
                                                    show 
                                                    onShowPassword={this.showHidePassword} 
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