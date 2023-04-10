const { Op } = require('sequelize');
const User = require('../models/Users');

class UserRepository {
  async createUser(user) {
    return await User.create(user);
  }

  async getUserByEmail(email) {
    return await User.findOne({
      where: {
        email: {
          [Op.eq]: email
        }
      }
    });
  }


  async getUserById(id) {
    return await User.findOne({
      where: {
        id: {
          [Op.eq]: id
        }
      }
    });
  }
  async updateUser(id, user) {
    const existingUser = await User.findByPk(id);
    if (!existingUser) {
      return null;
    }
    return await existingUser.update(user);
  }

  async deleteUser(id) {
    return await User.destroy({
      where: {
        id: {
          [Op.eq]: id
        }
      }
    });
  }

  async getUsers() {
    return await User.findAll();
  }
}

module.exports = UserRepository;
