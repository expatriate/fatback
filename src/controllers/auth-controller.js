import axios from 'axios';
import store from '../store.js';

class AuthController {

    constructor() {
        this.api = '';
        this.isAuthenticated = false;
    }

    async registration(email, password) {
        let data = {
            email: email,
            password: password
        };
        let res = await axios({
            method: 'post',
            withCredentials: true,
            url: `${this.api}/registration`,
            data: data
        });
        return res.status === 200 ? res.data : false;
    }

    async login(email, password) {
        return await setTimeout(() => {
            this.isAuthenticated = true
        }, 1000)
    }

    /*async login(email, password) {
        let data = {
            email: email,
            password: password
        };
        let res = await axios({
            method: 'post',
            withCredentials: true,
            url: `${this.api}/login`,
            data: data
        });
        return res.status === 200 ? res.data : false;
    }*/
}

const authController = new AuthController({});

export default authController;