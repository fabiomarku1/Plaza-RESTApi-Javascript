const Sequelize = require('sequelize');
const UserModel = require('./User');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  protocol: 'postgres',
  logging: false,
});

const models = {
  User: UserModel(sequelize, Sequelize.DataTypes),
};

Object.values(models)
  .filter(model => typeof model.associate === 'function')
  .forEach(model => model.associate(models));

module.exports = {
  ...models,
  sequelize,
  Sequelize,
};
