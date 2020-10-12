'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Guest extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    Guest.init({
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
            field: "id"
        },
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        email: {
            type: DataTypes.STRING(256),
            field: 'email',
            allowNull: false,
            unique: {
                args: true,
                msg: "email existed"
            },
            validate: {
                len: {
                    args: [0, 255]
                },
                isEmail: true
            }
        },
        phone_number: DataTypes.STRING,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,

    }, {
        sequelize,
        timestamps: true,
        tableName: "guests",
    });
    return Guest;
};
