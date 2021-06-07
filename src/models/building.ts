import { Model, Sequelize, DataTypes } from "sequelize";

export interface BuildingType {
  id: string;
  name: string;
  type: string;
  gaveFoodAt: Date;
}

module.exports = (sequelize: Sequelize) => {
  class Building extends Model<BuildingType> {
    static associate(models) {
      this.hasMany(models.unit);
    }
  }
  Building.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      type: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      gaveFoodAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "building",
    }
  );
  return Building;
};
