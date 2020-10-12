'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Branch extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    Branch.init({
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
            field: "id"
        },
        restaurant_id: DataTypes.INTEGER,
        name: DataTypes.STRING,
        location: DataTypes.STRING,
        status: {
            type: DataTypes.ENUM(['active', 'disabled']),
            allowNull: false,
            field: 'status',
            validate: {
                isIn: [['active', 'disabled']]
            }
        },
        hotline: DataTypes.STRING,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    }, {
        sequelize,
        timestamps: true,
        tableName: "branches",
    });
    return Branch;
};
