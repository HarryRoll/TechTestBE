const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('food', {
    id_food: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    img: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    foodname: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'food',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "food_pkey",
        unique: true,
        fields: [
          { name: "id_food" },
        ]
      },
    ]
  });
};
