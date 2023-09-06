'use strict'
import dotenv from 'dotenv';
dotenv.config();
import Sequelize from 'sequelize'

let sequelize = null
const isDev = process.env.NODE_ENV === 'development'
const dialectOptions = {
  postgres: {
    ssl: {
      rejectUnauthorized: false
    }
  }
}

function connect () {
  try {
    if (sequelize) return sequelize
    sequelize = new Sequelize(
      process.env.NAME_DB, //name of the database
      process.env.USER_DB, //name of the user database
      process.env.PASS_DB, //password of the database
      {
        host: process.env.HOST_DB,
        logging: isDev,
        port: process.env.PORT_DB,
        dialect: process.env.DIALECT_DB,
        dialectOptions: dialectOptions[process.env.DIALECT_DB] || {}
      }
    )
  } catch (error) {
    throw new Error(error)
  }
  return sequelize
}

export default connect