const bcrypt = require('bcrypt');
const UserRepository = require('../repositories/UserRepository');
const { BadRequest, NotFound } = require("../errors/errorHandler");

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
    const user=await this.userRepository.getUserById(id);
    if(user == null)
     console.log(" ITS IS FCKKKKK MEPTYYY");
    if (!user) {
      throw new NotFound(`User with ID ${userId} not found`);
    }
    return user ;
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
    console.log(" alll users hereee");
    throw new NotFound(" just an exception");
    return await this.userRepository.getUsers();
  }
}

module.exports = UserService;
