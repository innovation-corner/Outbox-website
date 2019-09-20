import React from "react"; 
import PropTypes from "prop-types"; 
import "./InputField.scss"; 
import { eye, eyeSlash } from "react-icons-kit/fa";
import { Icon } from "react-icons-kit"; 
const InputField = ({ 
    fieldName, 
    fieldType, 
    fieldValue, 
    onShowPassword, 
    onChangeField, 
    error, 
    onInputChange, 
    placeholder, 
    show,
    styles
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
                    style={styles}
                /> 
 
                <span className="toggle-password-icon" onClick={onShowPassword}> 
                    <Icon icon={eyeSlash} size={20} /> 
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
                    placeholder={placeholder} 
                    name={fieldName} 
                    value={fieldValue} 
                    onChange={onChangeField}
                    style={styles}
                /> 
                {show ? ( 
                    <span 
                        className="toggle-password-icon" 
                        onClick={onShowPassword}> 
                        <Icon icon={eye} size={20} /> 
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