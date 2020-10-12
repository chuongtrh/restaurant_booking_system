'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Table extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    Table.init({
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
            field: "id"
        },
        branch_id: DataTypes.INTEGER,
        section_id: DataTypes.INTEGER,
        name: DataTypes.STRING,
        code: DataTypes.STRING,
        status: {
            type: DataTypes.ENUM(['active', 'disabled']),
            allowNull: false,
            field: 'status',
            validate: {
                isIn: [['active', 'disabled']]
            }
        },
        min_seat: DataTypes.INTEGER,
        max_seat: DataTypes.INTEGER,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    }, {
        sequelize,
        timestamps: true,
        tableName: "tables",
    });
    return Table;
};
