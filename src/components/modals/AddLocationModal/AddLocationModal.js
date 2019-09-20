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
import { styles } from '../AddUserModal/styles'

class AddLocationModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationName: '',
      email: '',
      locationContact: '',
      locationEmail: '',
      admin: ''
    };
  };

  handleInputChange = ({ target: { value, name } }) => {
    this.setState({
        [name]: value
    });
  };
  
  onAddLocation = e => {
    e.preventDefault();
  };

  render() {
    return (
      <Fragment>
        <Modal isOpen={this.props.modal} toggle={this.props.toggle} className={this.props.className}>
          <ModalHeader style={styles.modalHeader} toggle={this.props.toggle}>
            <h3>Add New Location</h3>
          </ModalHeader>
          <ModalBody style={styles.modalBody}>
              <Form onSubmit={this.onAddLocation}>
                <FormGroup>
                  <InputField 
                    fieldName="location" 
                    fieldType="text" 
                    fieldValue={this.state.locationName} 
                    onChangeField={this.handleInputChange}
                    placeholder="Location Name"
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
                    fieldName="contactAddress" 
                    fieldType="text" 
                    fieldValue={this.state.contactAddress} 
                    onChangeField={this.handleInputChange}
                    placeholder="Contact Address"
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
                    fieldName="ContactNumber" 
                    fieldType="text" 
                    fieldValue={this.state.contactNumber} 
                    onChangeField={this.handleInputChange}
                    placeholder="Contact Number"
                    styles={styles.inputField}
                    // error={message} 
                  /> 
                </FormGroup>
                <FormGroup>
                  <InputField 
                    fieldName="email" 
                    fieldType="email" 
                    fieldValue={this.state.email} 
                    onChangeField={this.handleInputChange}
                    placeholder="Contact Email"
                    styles={styles.inputField}
                    // error={message} 
                  /> 
                </FormGroup>
                <FormGroup>
                  <select 
                    value={this.state.admin}
                    style={styles.inputField} 
                    className="form-control" name="role" 
                    onChangeField={this.handleInputChange}>
                    <option value="">Add Admin</option>
                  </select>
                </FormGroup>
              </Form>
              <Button type="submit" color="primary" style={styles.addButton} className="pull-right" disabled>Add Location</Button>{' '}
          </ModalBody>
        </Modal>
      </Fragment>
    );
  }
}

export default AddLocationModal;