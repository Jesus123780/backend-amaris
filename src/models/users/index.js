import Sequelize from 'sequelize'
import connect from '../../db'
import { enCode } from '../../helpers'

const conn = connect()
conn.sync()

export default conn.define('users', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        get(x) {return enCode(this.getDataValue(x))}
    },
    name: {
        type: Sequelize.STRING,
        require: true
    },
    username: {
        type: Sequelize.STRING,
        require: true,
        trim: true,
        unique: true
    },
    lastName: {
        type: Sequelize.STRING,
        require: true,
        trim: true,
        unique: true
    },
    email: {
        type: Sequelize.STRING,
        require: true,
        trim: true,
        unique: true
    },
    avatar: {
        type: Sequelize.STRING,
        trim: true
    },
    // News
    uToken: {
        type: Sequelize.STRING(100),
        trim: true
    },
    uPhoNum: {
        type: Sequelize.STRING(50)
    },
    ULocation: {
        type: Sequelize.STRING(100)
    },
    upLat: {
        type: Sequelize.STRING(30)
    },
    uState: {
        type: Sequelize.INTEGER(30)
    },
    upLon: {
        type: Sequelize.STRING(30)
    },
    upIdeDoc: {
        type: Sequelize.STRING(50)
    },
    siteWeb: {
        type: Sequelize.STRING,
        trim: true
    },
    description: {
        type: Sequelize.STRING,
        trim: true
    },
    password: {
        type: Sequelize.STRING,
        trim: true,
        require: true
    },
    createAt: {
        type: Sequelize.DATE,
        default: Date.now()
    }

})
