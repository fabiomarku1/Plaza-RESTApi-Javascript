const UserService = require('../services/UserService');
const asyncHandler = require('express-async-handler');
const { NotFound } = require('../errors/errorHandler');

class UserController {
  constructor() {
    this.userService = new UserService();
  }

  createUser = asyncHandler(async (req, res) => {
    const user = await this.userService.createUser(req.body);
    res.json(user);
  });

  getUserByEmail = asyncHandler(async (req, res) => {
    const user = await this.userService.getUserByEmail(req.params.email);
    res.json(user);
  });

  getUserById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const user = await this.userService.getUserById(id);

    if (!user) {
      throw new NotFound('User not found');
    }

    res.json(user);
  });

  updateUser = asyncHandler(async (req, res) => {
    const user = await this.userService.updateUser(req.params.id, req.body);
    res.json(user);
  });

  deleteUser = asyncHandler(async (req, res) => {
    await this.userService.deleteUser(req.params.id);
    res.sendStatus(204);
  });

  getUsers = asyncHandler(async (req, res) => {
    const users = await this.userService.getUsers();
    res.json(users);
  });
}

module.exports = UserController;
