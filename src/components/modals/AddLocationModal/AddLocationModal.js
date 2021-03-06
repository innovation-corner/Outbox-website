import React, { Fragment } from 'react';
import { 
  Button, 
  Modal, 
  ModalHeader, 
  ModalBody, 
  FormGroup, 
  Form
} from 'reactstrap';
import InputField from '../../Reuse/InputField/InputField';
import { Loader } from '../../Reuse/Loader';
import AlertSystem from '../../Reuse/AlertSystem';
// import { validatePassword, validateEmail } from '../../../utils/regexValidation';
import { styles } from '../AddUserModal/styles'

class AddLocationModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationName: '',
      email: '',
      locationDesc: '',
      locationNumber: '',
      locationAddress: '',
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
    const { createNew, businessId } = this.props;
    const payload = {
      businessId: businessId,
      info: this.state.locationDesc,
      email: this.state.email,
      name: this.state.locationName,
      phoneNumber: this.state.locationNumber,
      address: this.state.locationAddress
    };
    createNew(payload)
    .then(data => {
      this.setState({
        locationName: '',
        email: '',
        locationDesc: '',
        locationNumber: '',
        locationAddress: '',
        admin: ''
      });
    });
  };

  render() {
    const { isLoading } = this.props;
    return (
      <Fragment>
        <Modal isOpen={this.props.modal} toggle={this.props.toggle} className={this.props.className}>
          <ModalHeader style={styles.modalHeader} toggle={this.props.toggle}>
            Add New Location
          </ModalHeader>
          <ModalBody style={styles.modalBody}>
            <AlertSystem />
              <Form>
                <FormGroup>
                  <InputField 
                    fieldName="locationName" 
                    fieldType="text" 
                    fieldValue={this.state.locationName} 
                    onChangeField={this.handleInputChange}
                    placeholder="Name"
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
                    fieldName="locationDesc" 
                    fieldType="text" 
                    fieldValue={this.state.locationDesc} 
                    onChangeField={this.handleInputChange}
                    placeholder="Description"
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
                    fieldName="locationAddress" 
                    fieldType="text" 
                    fieldValue={this.state.locationAddress} 
                    onChangeField={this.handleInputChange}
                    placeholder="Address"
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
                    fieldName="locationNumber" 
                    fieldType="text" 
                    fieldValue={this.state.locationNumber} 
                    onChangeField={this.handleInputChange}
                    placeholder="Phone number"
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
                    placeholder="Email address"
                    styles={styles.inputField}
                    // error={message} 
                  /> 
                </FormGroup>
              </Form>
              <Button 
                type="button" 
                color="primary" 
                style={styles.addButton} 
                className="pull-right"
                onClick={this.onAddLocation} 
                >
                  {isLoading ? 
                    (<span><Loader color="white"/> {' '} Adding...</span>) :
                    ("Add Location")
                  }
                </Button>
          </ModalBody>
        </Modal>
      </Fragment>
    );
  }
}

export default AddLocationModal;