'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Restaurant extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    Restaurant.init({
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
            field: "id"
        },
        name: DataTypes.STRING,
        desciption: DataTypes.STRING,
        logo: DataTypes.STRING,
        hotline: DataTypes.STRING,
        status: {
            type: DataTypes.ENUM(['active', 'disabled']),
            allowNull: false,
            field: 'status',
            validate: {
                isIn: [['active', 'disabled']]
            }
        },
    }, {
        sequelize,
        timestamps: true,
        tableName: "restaurants",
    });
    return Restaurant;
};
