const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('drink', {
    id_drink: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    img: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    drinkname: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'drink',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "drink_pkey",
        unique: true,
        fields: [
          { name: "id_drink" },
        ]
      },
    ]
  });
};
