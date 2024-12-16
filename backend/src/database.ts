import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('SEprofiles', 'SEDBuser', 'pass123', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false, // Disable SQL query logging
});

export default sequelize;
