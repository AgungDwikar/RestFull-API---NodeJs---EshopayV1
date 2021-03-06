const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    user_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_name: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    user_firstname: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    user_lastname: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    user_email: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    user_password: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    user_phone: {
      type: DataTypes.STRING(15),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'users',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "users_pkey",
        unique: true,
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
};
