'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class OpenHour extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    OpenHour.init({
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
            field: "id"
        },
        branch_id: DataTypes.INTEGER,
        day_of_week: DataTypes.INTEGER,
        open_time: DataTypes.INTEGER,
        close_time: DataTypes.INTEGER,
        last_order: DataTypes.INTEGER
    }, {
        sequelize,
        timestamps: true,
        tableName: "open_hours",
    });
    return OpenHour;
};
