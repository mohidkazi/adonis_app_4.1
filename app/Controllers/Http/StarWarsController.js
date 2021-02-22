'use strict'

// const StarWarsService = require('App/Services/StarWarsService.js');
const got = require('got');

class StarWarsController {
    async show({ response }) {
        // const service = new StarWarsService();
        // return service.show();
        console.log('start');
        const data = await got('https://swapi.dev/api/starships/');
        console.log(data.body);
        response.json(data.body);
    }
}

module.exports = StarWarsController;
