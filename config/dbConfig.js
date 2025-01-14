const Sequelize = require('sequelize');
const path = require('path');

const envPath = path.resolve(__dirname + './../../.env')
require('dotenv').config({path:envPath})

const sequelize = new Sequelize("spotNew", process.env.user, process.env.password, {
    host: process.env.host,
    dialect: "mysql",
    logging: false,
    operatorsAliases: 0,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  })
// const sequelize = new Sequelize("spotNew", "chand", 'Hrportal@12345', {
//     host: "159.223.177.89",
//     dialect: "mysql",
//     logging: false,
//     operatorsAliases: 0,
//     pool: {
//       max: 5,
//       min: 0,
//       acquire: 30000,
//       idle: 10000,
//     },
//   })

const db= {};

db.user = require('../model/userModel')(Sequelize,sequelize);
db.otp = require('../model/otp')(Sequelize,sequelize);
db.captcha = require('../model/captcha.model')(Sequelize,sequelize);

module.exports = db;