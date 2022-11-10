const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('report', {
    id_report: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tablenumber: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    total: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'report',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "report_pkey",
        unique: true,
        fields: [
          { name: "id_report" },
        ]
      },
    ]
  });
};
