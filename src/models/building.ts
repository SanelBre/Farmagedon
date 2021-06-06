import { Model, Sequelize, DataTypes } from "sequelize";

export interface BuildingAttributes {
  id: number;
  name: string;
  type: string;
  gaveFoodAt: Date;
}

module.exports = (sequelize: Sequelize) => {
  class Building extends Model<BuildingAttributes> {
    static associate(models) {
      // this.myAssociation =
      this.hasMany(models.units);
    }
  }
  Building.init(
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