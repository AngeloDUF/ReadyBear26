const { DataTypes } = require("sequelize");
const { sequelize } = require("./index");

const Comment = sequelize.define("Comment", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  user: { type: DataTypes.STRING, allowNull: false },
  content: { type: DataTypes.TEXT, allowNull: false },
});

module.exports = Comment;
