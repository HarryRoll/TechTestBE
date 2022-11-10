const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('orderlist', {
    id_list: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_report: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'report',
        key: 'id_report'
      }
    },
    menuname: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    qty: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'orderlist',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "orderlist_pkey",
        unique: true,
        fields: [
          { name: "id_list" },
        ]
      },
    ]
  });
};
