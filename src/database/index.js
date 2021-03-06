import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

import Admin from '../app/models/Admin';
import Student from '../app/models/Student';

const models = [Student, Admin];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
  }
}

export default new Database();
