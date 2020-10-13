'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Reservation extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    Reservation.init({
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
            field: "id"
        },
        branch_id: DataTypes.INTEGER,
        guest_id: DataTypes.INTEGER,
        table_id: DataTypes.INTEGER,
        reservation_date: DataTypes.DATEONLY,
        reservation_time: DataTypes.TIME,
        adults: DataTypes.INTEGER,
        children: DataTypes.INTEGER,
        note: DataTypes.STRING,
        status: {
            type: DataTypes.ENUM(['active', 'disabled']),
            allowNull: false,
            field: 'status',
            validate: {
                isIn: [['active', 'disabled']]
            }
        },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    }, {
        sequelize,
        timestamps: true,
        tableName: "reservations",

    });
    return Reservation;
};
