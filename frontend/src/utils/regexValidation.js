import React, { Fragment } from "react"; 
// testing that input is + or digits 
export const areDigits = input => { 
    const re_digits = /^[+]?[0-9]*$/; 
    return re_digits.test(input); 
}; 
 
export const validatePassword = (prop, value, el = this) => { 
    const re_password = /^((?=.*\d)(?=.*[A-Z])(?=.*\W).{8,40})$/; 
    if (!re_password.test(value)) { 
        el.setState({ 
            error: { 
                [prop]: 
                    "Password must be between 8 - 40 characters long, contain alphanumeric and special characters!" 
            } 
        }); 
    } else { 
        el.setState({ 
            error: { 
                [prop]: "" 
            } 
        }); 
    } 
}; 
 
export const validateEmail = (prop, value, el = this) => { 
    const re_email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
    const testResult = re_email.test(value); 
    if (!testResult) { 
        el.setState({ 
            error: { 
                [prop]: "Invalid email!" 
            } 
        }); 
    } else { 
        el.setState({ 
            error: { 
                [prop]: "" 
            } 
        }); 
    } 
}; 
 
export const validateNumber = number => { 
    const re_phone = /^[0]?\d([7](?=0)|[8](?=0|1)|[9](?=0))\d{9}$/; 
    return re_phone.test(number); 
}; 
 
export const validateDigit = input => { 
    const re_validateDigits = /^[0-9]*$/; 
    return re_validateDigits.test(input); 
}; 