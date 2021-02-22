'use strict'

const axios = require('axios');

class StarWarService {
    async show() {
        return axios.get('https://swapi.dev/api/starships/');
    }
}

module.exports = StarWarService;
