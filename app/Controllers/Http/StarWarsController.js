'use strict'

const StarWarService = use('App/Services/StarWarsService');
const got = require('got');

class StarWarsController {
  async show({ view }) {
    const service = new StarWarService();
    const data = await service.show();
    console.log(data[0]);
    return view.render('star-wars', { data });
  }
}

module.exports = StarWarsController;
