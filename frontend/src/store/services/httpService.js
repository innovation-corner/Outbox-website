export const axios = require("axios");
const baseURL = 
    process.env.NODE_ENV === 'development' ? 
    "http://localhost:5000/api/v1/" : 
    "" ;

// axios.interceptors.request.use(
//     config => {
//         const decryptedToken = decryptAndRead(ENCRYPT_USER);
//         if (decryptedToken) { 
//             const { access_token, expired } = decryptedToken;
//             if (!expired) {
//                 config.headers["Authorization"] = `Bearer ${access_token}`;
//             }
//         }
//         return config;
//     },
//     error => {
//         return Promise.reject({ error });
//     }
// );

const getFunc = (path, payload) => {
    return new Promise((resolve, reject) => {
        axios.get(baseURL + path, payload)
        .then(res => {
            return resolve({ ...res });
        })
        .catch(({ response }) => {
            return reject({ response });
        });
    });
};

const delFunc = path => {
    return new Promise((resolve, reject) => {
        axios.delete(baseURL + path)
        .then(res => {
            return resolve({ ...res });
        })
        .catch(({ response }) => {
            return reject({ response });
        });
    });
};

const postFunc = (path, payload) => {
    return new Promise((resolve, reject) => {
        axios.post(baseURL + path, payload)
        .then(res => {
            return resolve({ ...res });
        })
        .catch(({ response }) => {
            return reject({ response });
        });
    });
};

const putFunc = (path, payload) => {
    return new Promise((resolve, reject) => {
        axios.put(baseURL + path, payload)
        .then(res => {
            return resolve({ ...res });
        })
        .catch(({ response }) => {
            return reject({ response });
        });
    });
};

export { getFunc, delFunc, postFunc, putFunc };