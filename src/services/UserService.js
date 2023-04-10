const bcrypt = require('bcrypt');
const UserRepository = require('../repositories/UserRepository');

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async createUser(user) {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    const userToCreate = {
      ...user,
      password: hashedPassword
    };
    return await this.userRepository.createUser(userToCreate);
  }

  async getUserByEmail(email) {
    return await this.userRepository.getUserByEmail(email);
  }

  async getUserById(id) {
    return await this.userRepository.getUserById(id);
  }

  async getUserById(email) {
    return await this.userRepository.getUserById(email);
  }

  async updateUser(id, user) {
    return await this.userRepository.updateUser(id, user);
  }

  async deleteUser(id) {
    return await this.userRepository.deleteUser(id);
  }

  async getUsers() {
    return await this.userRepository.getUsers();
  }
}

module.exports = UserService;
