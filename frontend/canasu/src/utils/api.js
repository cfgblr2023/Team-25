import axios from 'axios';
import toast from 'react-hot-toast';

const TEST_MODE = window.location.href.includes("localhost")? true : false;

export const servicePost = async (path, payload, headers = null) => {
    return new Promise((resolve, reject) => {
        axios
            .post(`http://localhost:4000${path}`, payload, {
                headers: headers,
            })
            .then(function (response) {
                resolve(response.data);
            })
            .catch(function (error) {
                reject(error);
            });
    });
};

export const serviceGet = async (path, headers) => {
    console.log(headers);
    return new Promise((resolve, reject) => {
        axios
            .get(`http://localhost:4000${path}`, {
                headers: headers
            })
            .then(function (response) {
                resolve(response.data);
            })
            .catch(function (error) {
                reject(error);
            });
    });
};

export const servicePut = async (path, payload, headers = null) => {
    return new Promise((resolve, reject) => {
        axios
            .put(`http://localhost:4000${path}`, payload, {
                headers: headers,
            })
            .then(function (response) {
                resolve(response.data);
            })
            .catch(function (error) {
                reject(error);
            });
    });
};

export const serviceDelete = async (path, headers) => {
    return new Promise((resolve, reject) => {
        axios
            .delete(`http://localhost:4000${path}`, {
                headers: headers
            })
            .then(function (response) {
                resolve(response.data);
            })
            .catch(function (error) {
                reject(error);
            });
    });
};