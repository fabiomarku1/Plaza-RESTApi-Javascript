const UserService = require('../services/UserService');
require('../services/UserService');
class UserController {
  constructor() {
    this.userService = new UserService();
  }

  async createUser(req, res) {
    const user = await this.userService.createUser(req.body);
    res.json(user);
  }

  async getUserByEmail(req, res) {
    const user = await this.userService.getUserByEmail(req.params.email);
    res.json(user);
  }

  async getUserById(req, res) {
    const user = await this.userService.getUserById(req.params.id);
    res.json(user);
  }

  async updateUser(req, res) {
    const user = await this.userService.updateUser(req.params.id, req.body);
    res.json(user);
  }

  async deleteUser(req, res) {
    await this.userService.deleteUser(req.params.id);
    res.sendStatus(204);
  }

  async getUsers(req, res) {
    const users = await this.userService.getUsers();
    res.json(users);
  }
}

module.exports = UserController;
