const sequelize = require("../config/connection");
const { User, Post } = require("../models");

const userdata = [
  {
    username: "rodentBoi",
    email: "rat0@gmail.com",
    password: "password123",
  },
  {
    username: "Rat333",
    email: "mouseman@gmail.com",
    password: "password123",
  },
  {
    username: "cheeseLUVR",
    email: "queso@gmail.com",
    password: "password123",
  },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
