import { generateToken } from '../../helpers'
import { ApolloError } from 'apollo-server-express'
import Users  from '../../models/users'
import { Op } from 'sequelize'

export const newRegisterUser = async (root, input) => {
  const {
    name,
    password,
    email,
    username
  } = input.input
  try {
      const { count, rows } = await Users.findAndCountAll({
          where: {
              [Op.or]: [
                  {
                      email: {
                          [Op.like]: email
                      }
                  }
              ]
          },
          offset: 10,
          limit: 2
      });
      const project = await Users.findByPk(1);
      if (project === null) {
          console.log('Not found!', 53);
      } else {
          // console.log(project instanceof Project, 0); // true
          // Its primary key is 123
      }

      const [user, _created] = await Users.findOrCreate({
          where: { email: email },
          defaults: {
              name,
              password,
              email,
              username
          }
      })
      const tokenGoogle = {
          name: name,
          username: username,
          id: user.id
      }
      const tokenGo = await generateToken(tokenGoogle)
      return {
          token: tokenGo,
          roles: false,
          success: true,
          userId: user.id,
          message: `Bienvenido ${name}`,
      }
  } catch (e) {
    console.log(e)
      const error = new ApolloError('Lo sentimos, ha ocurrido un error interno', 400)
      return error
  }
}


export default {
  TYPES: {
  },
  QUERIES: {
  },
  MUTATIONS: {
      newRegisterUser,
  }
}