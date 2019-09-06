export const axios = require("axios");
export const _axios = axios.create({
    baseURL: "http://localhost:5000/api/v1/"
});

// _axios.interceptors.request.use(
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
        _axios.get(path, payload)
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
        _axios.delete(path)
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
        _axios.post(path, payload)
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
        _axios.put(path, payload)
        .then(res => {
            return resolve({ ...res });
        })
        .catch(({ response }) => {
            return reject({ response });
        });
    });
};

export { getFunc, delFunc, postFunc, putFunc };
