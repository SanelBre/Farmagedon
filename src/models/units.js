const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Units extends Model {}
  Units.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      health: {
        type: DataTypes.INTEGER,
      },
      hungerAffection: {
        type: DataTypes.INTEGER,
      },
      lastFeedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "units",
    }
  );
  return Units;
};
