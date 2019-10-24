import Sequelize, { Model } from 'sequelize';

class Student extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        weight: Sequelize.FLOAT,
        height: Sequelize.FLOAT,
        age: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
  }
}

export default Student;
