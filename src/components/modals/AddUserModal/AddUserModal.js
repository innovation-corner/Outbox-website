import React, { Fragment } from 'react';
import { 
  Button, 
  Modal, 
  ModalHeader, 
  ModalBody, 
  FormGroup,
  Input,
} from 'reactstrap';
import InputField from '../../Reuse/InputField/InputField';
import { Loader } from '../../Reuse/Loader';
import AlertSystem from '../../Reuse/AlertSystem';
// import { validatePassword, validateEmail } from '../../../utils/regexValidation';
import { styles } from './styles.js'

class AddUserModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      gender: '',
      locationId: ''
    };
  };

  handleInputChange = ({ target: { value, name } }) => {
    this.setState({
      [name]: value
    });
  };
  
  addNewUser = e => {
    e.preventDefault();
    const { createNew, businessId } = this.props;
    const payload = {
      businessId: businessId,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      gender: this.state.gender,
      email: this.state.email,
      location: this.state.locationId,
      role: 'subAdmin'
    };
    createNew(payload)
    .then(data => {
      this.setState({
        businessId: '',
        email: '',
        firstName: '',
        lastName: '',
        locationId: '',
        gender: ''
      });
      // window.location.reload();
    });
  };

  render() {
    const { isLoading, locations } = this.props;
    return (
      <Fragment>
        <Modal isOpen={this.props.modal} toggle={this.props.toggle} className={this.props.className}>
          <ModalHeader style={styles.modalHeader} toggle={this.props.toggle}>
            Add New User
          </ModalHeader>
          <ModalBody style={styles.modalBody}>
            <AlertSystem />
              <form onSubmit={this.addNewUser}>
                <FormGroup>
                  <InputField 
                    fieldName="firstName" 
                    fieldType="text" 
                    fieldValue={this.state.firstName} 
                    onChangeField={this.handleInputChange}
                    placeholder="First Name"
                    styles={styles.inputField}
                  /> 
                </FormGroup>
                <FormGroup>
                  <InputField 
                    fieldName="lastName" 
                    fieldType="text" 
                    fieldValue={this.state.lastName} 
                    onChangeField={this.handleInputChange}
                    placeholder="Last Name"
                    styles={styles.inputField}
                  /> 
                </FormGroup>
                <FormGroup>
                  <InputField 
                    fieldName="email" 
                    fieldType="email" 
                    fieldValue={this.state.email} 
                    onChangeField={this.handleInputChange}
                    placeholder="Email Address"
                    styles={styles.inputField}
                  /> 
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
                          onChange={this.handleInputChange}
                          style={styles.radio} /> {'  '}
                        <span style={styles.ratioContainer}>Male</span>
                      </div>
                      <div className="col-md-3">
                        <Input 
                          type="radio" 
                          name="gender"
                          value="female"
                          onChange={this.handleInputChange}
                          style={styles.radio} /> {'  '} 
                        <span style={styles.ratioContainer}>Female</span>
                      </div>
                    </div>
                  </FormGroup>
                </FormGroup>
                <FormGroup>
                  <select 
                    value={this.state.locationId}
                    style={styles.inputField} 
                    className="form-control" name="locationId" 
                    onChange={this.handleInputChange} required>
                    <option value="">--select--</option>
                    {locations &&
                      locations.map(location => (
                        <option value={location.id}>{location.name}</option>
                      ))
                    }
                  </select>
                </FormGroup>
                <Button 
                  type="submit" 
                  color="primary" 
                  style={styles.addButton} 
                  className="pull-right">
                  {isLoading ? 
                    (<span><Loader color="white"/> {' '} Adding...</span>) :
                    ("Add User")
                  }
                </Button>
              </form>
          </ModalBody>
        </Modal>
      </Fragment>
    );
  }
}

export default AddUserModal;