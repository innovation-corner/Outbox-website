import React from "react"; 
import PropTypes from "prop-types"; 
// import "./InputField.scss"; 
// import { eye, eyeSlash } from "react-icons-kit/fa"; 
// import { Icon } from "react-icons-kit"; 
const InputField = ({ 
    fieldName, 
    fieldType, 
    fieldValue, 
    onShowPassword, 
    onChangeField, 
    error, 
    onInputChange, 
    placeholder, 
    show 
}) => { 
    if (fieldType === "password") { 
        return ( 
            <div className="input-cont"> 
                <input 
                    type={fieldType} 
                    className={`form-control input-field ${ 
                        error ? "error" : "" 
                    }`} 
                    name={fieldName} 
                    value={fieldValue} 
                    onChange={onChangeField} 
                    placeholder={placeholder} 
                /> 
 
                <span className="toggle-password-icon" onClick={onShowPassword}> 
                    {/* <Icon icon={eyeSlash} size={20} />  */}
                </span> 
            </div> 
        ); 
    } else { 
        return ( 
            <div className="input-cont"> 
                <input 
                    type={fieldType} 
                    className={`form-control input-field ${ 
                        error ? "error" : "" 
                    }`} 
                    placeholder={ 
                        fieldName === "email" ? "Enter your email address" : "" 
                    } 
                    name={fieldName} 
                    value={fieldValue} 
                    onChange={onChangeField} 
                /> 
                {show ? ( 
                    <span 
                        className="toggle-password-icon" 
                        onClick={onShowPassword}> 
                        {/* <Icon icon={eye} size={20} />  */}
                    </span> 
                ) : null} 
            </div> 
        ); 
    } 
}; 
 
InputField.propTypes = { 
    fieldName: PropTypes.string, 
    fieldType: PropTypes.string, 
    fieldValue: PropTypes.string, 
    onChangeField: PropTypes.func, 
    onInputChange: PropTypes.func, 
    onShowPassword: PropTypes.func, 
    show: PropTypes.bool, 
    placeholder: PropTypes.string 
}; 
 
export default InputField; 