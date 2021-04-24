'use strict';
const fs = require('fs').promises;
const Helpers = use('Helpers')
const axios = require('axios');

class StarWarService {
  async show() {
    try {
      const data = await fs.readFile(`${Helpers.appRoot()}/data.json`);
      return JSON.parse(data);
    } catch (error) {
      const response = await axios.get('https://swapi.dev/api/starships/');
      return response.data;
    }
  }
}

module.exports = StarWarService;
