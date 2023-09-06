import Sequelize from 'sequelize';
import connect from '../../db';

const conn = connect();
conn.sync();

export default conn.define('testimonials', {
  tId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    get(x) {return enCode(this.getDataValue(x))}
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
  },
  clientId: {
    type: Sequelize.INTEGER,
  },
  TState: {
    type: Sequelize.INTEGER,
  },
  createAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
  },
});
