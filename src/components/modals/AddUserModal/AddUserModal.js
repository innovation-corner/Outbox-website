import React, { Fragment } from 'react';
import { 
  Button, 
  Modal, 
  ModalHeader, 
  ModalBody, 
  FormGroup, 
  Form,
  Label,
  Input,
} from 'reactstrap';
import InputField from '../../Reuse/InputField/InputField';
import { validatePassword, validateEmail } from '../../../utils/regexValidation';
import { styles } from './styles.js'

class AddUserModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      email: '',
      location: '',
      gender: '',
      role: ''
    };
  };

  handleInputChange = ({ target: { value, name } }) => {
    // validatePassword("passwordErr", value, this);
    this.setState({
        [name]: value
    });
  };
  
  onAddUser = e => {
    e.preventDefault();
  };

  render() {
    return (
      <Fragment>
        <Modal isOpen={this.props.modal} toggle={this.props.toggle} className={this.props.className}>
          <ModalHeader style={styles.modalHeader} toggle={this.props.toggle}>
            <h3>Add New User</h3>
          </ModalHeader>
          <ModalBody style={styles.modalBody}>
              <Form onSubmit={this.onAddUser}>
                <FormGroup>
                  <InputField 
                    fieldName="firstName" 
                    fieldType="text" 
                    fieldValue={this.state.firstName} 
                    onChangeField={this.handleInputChange}
                    placeholder="First Name"
                    styles={styles.inputField}
                    // error={message} 
                  /> 
                  {/* {message && ( 
                    <small style={{ color: "red" }}> 
                        {message} 
                    </small> 
                  )}  */}
                </FormGroup>
                <FormGroup>
                  <InputField 
                    fieldName="email" 
                    fieldType="email" 
                    fieldValue={this.state.email} 
                    onChangeField={this.handleInputChange}
                    placeholder="Email Address"
                    styles={styles.inputField}
                    // error={message} 
                  /> 
                  {/* {message && ( 
                    <small style={{ color: "red" }}> 
                        {message} 
                    </small> 
                  )}  */}
                </FormGroup>
                <FormGroup>
                  <select 
                    value={this.state.role}
                    style={styles.inputField} 
                    className="form-control" name="role" 
                    onChangeField={this.handleInputChange}>
                    <option value="">Role</option>
                  </select>
                </FormGroup>
                <FormGroup>
                  <label style={{fontSize: '16px'}}>Gender</label>
                  <FormGroup check>
                    <div className="row">
                      <div className="col-md-3">
                        <Input 
                          type="radio"
                          name="gender"
                          value="male"
                          onChange={this.onChangeField}
                          style={styles.radio} /> {'  '}
                        <span style={styles.ratioContainer}>Male</span>
                      </div>
                      <div className="col-md-3">
                        <Input 
                          type="radio" 
                          name="gender"
                          value="female"
                          onChange={this.onChangeField}
                          style={styles.radio} /> {'  '} 
                        <span style={styles.ratioContainer}>Female</span>
                      </div>
                    </div>
                  </FormGroup>
                </FormGroup>
                <FormGroup>
                  <select 
                    value={this.state.location}
                    style={styles.inputField} 
                    className="form-control" name="role" 
                    onChangeField={this.handleInputChange}>
                    <option value="">Location</option>
                  </select>
                </FormGroup>
              </Form>
              <Button type="submit" color="primary" style={styles.addButton} className="pull-right" disabled>Add User</Button>{' '}
          </ModalBody>
        </Modal>
      </Fragment>
    );
  }
}

export default AddUserModal;