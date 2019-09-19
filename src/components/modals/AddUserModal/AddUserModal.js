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
      gender: '',
      locationId: '',
      role: ''
    }
  };

  handleInputChange = ({ target: { value, name } }) => {
    validatePassword("passwordErr", value, this);
    this.setState({
        [name]: value
    });
  };

  render() {
    return (
      <Fragment>
        <Modal isOpen={this.props.modal} toggle={this.props.toggle} className={this.props.className}>
          <ModalHeader style={styles.modalHeader} toggle={this.props.toggle}>
            <h3>Add New User</h3>
          </ModalHeader>
          <ModalBody style={styles.modalBody}>
              <Form>
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
                  <select style={styles.inputField} className="form-control" name="role" onChangeField={this.handleInputChange}>
                    <option value="">Role</option>
                  </select>
                </FormGroup>
                <FormGroup>
                  <label>Gender</label>
                  <FormGroup check>
                    <div className="row">
                      <div className="col-md-2">
                        <Label check>
                          <Input type="radio" id="checkbox2" />{' '}Male
                        </Label>
                      </div>
                      <div className="col-md-3">
                        <Label check>
                          <Input type="radio" id="checkbox2" />{' '}Male
                        </Label>
                      </div>
                    </div>
                  </FormGroup>
                </FormGroup>
                <FormGroup>
                  <select style={styles.inputField} className="form-control" name="role" onChangeField={this.handleInputChange}>
                    <option value="">Location</option>
                  </select>
                </FormGroup>
              </Form>
              <Button color="primary" className="pull-right">Add User</Button>{' '}
          </ModalBody>
        </Modal>
      </Fragment>
    );
  }
}

export default AddUserModal;