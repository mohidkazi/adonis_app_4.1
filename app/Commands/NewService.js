'use strict'

const { Command } = require('@adonisjs/ace')
const Helpers = use('Helpers')

class NewService extends Command {
  static get signature () {
    return `new:service  { name: Name of the Project }`;
  }

  static get description () {
    return 'Create a service file';
  }

  async handle (args, options) {
    this.info('Dummy implementation for new:service command');
    await this.ensureDir(Helpers.appRoot('App/Services'))
    this.generateFile(Helpers.appRoot`App/Services/${args.name}Service`), Helpers.appRoot('templates/Service.mustache'), args);
  }
}

module.exports = NewService
