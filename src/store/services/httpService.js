const baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:8080/api/v1/' : "https://outbox-app.herokuapp.com/api/v1/" ;

const getFunc = (path, payload) => {
    const token = `Bearer ${localStorage.getItem("token")}`
    return new Promise((resolve, reject) => {
        fetch(`${baseURL}${path}`, { 
            method: "GET", 
            headers: { 
                "Content-Type": "application/json", 
                Authorization: token 
            }, 
        }) 
        .then(res => res.json()) 
        .then(res => { 
            console.log("TCL: res", res); 
            return resolve({ ...res }); 
        }) 
        .catch(({ response }) => { 
            console.log("TCL: response", response); 
            return reject({ response }); 
        }); 
    });
};

const delFunc = (path, payload) => {
    const token = `Bearer ${localStorage.getItem("token")}`; 
    return new Promise((resolve, reject) => {
        fetch(`${baseURL}${path}`, { 
            method: "DELETE", 
            headers: { 
                "Content-Type": "application/json", 
                Authorization: token 
            }
        }) 
        .then(res => res.json()) 
        .then(res => { 
            console.log("TCL: res", res); 
            return resolve({ ...res }); 
        }) 
        .catch(({ response }) => { 
            console.log("TCL: response", response); 
            return reject({ ...response.message }); 
        }); 
    });
};

const postFunc = (path, payload) => {
    return new Promise((resolve, reject) => {
        fetch(`${baseURL}${path}`, { 
            method: "POST", 
            headers: { 
                "Content-Type": "application/json", 
            }, 
            body: JSON.stringify(payload) 
        }) 
        .then(res => res.json()) 
        .then(res => { 
            console.log("TCL: res", res.message); 
            return resolve({ ...res }); 
        }) 
        .catch(({ response }) => { 
            console.log("TCL: response", response); 
            return reject({ response }); 
        }); 
    });
};

const singlePostFunc = (path, payload) => {
    return new Promise((resolve, reject) => {
        fetch(`${baseURL}${path}`, { 
            method: "POST", 
            headers: { 
                "Content-Type": "application/json", 
            }, 
            // body: JSON.stringify(payload) 
        }) 
        .then(res => res.json()) 
        .then(res => { 
            console.log("TCL: res", res.message); 
            return resolve({ ...res }); 
        }) 
        .catch(({ response }) => { 
            console.log("TCL: response", response); 
            return reject({ response }); 
        }); 
    });
};

const putFunc = (path, payload) => {
    const token = `Bearer ${localStorage.getItem("token")}`; 
    return new Promise((resolve, reject) => {
        fetch(`${baseURL}${path}`, { 
            method: "PUT", 
            headers: { 
                "Content-Type": "application/json",
                Authorization: token 
            }, 
            body: JSON.stringify(payload) 
        }) 
        .then(res => res.json()) 
        .then(res => { 
            console.log("TCL: res", res); 
            return resolve({ ...res }); 
        }) 
        .catch(({ response }) => { 
            console.log("TCL: response", response); 
            return reject({ response }); 
        }); 
    });
};

export { getFunc, delFunc, postFunc, singlePostFunc, putFunc };