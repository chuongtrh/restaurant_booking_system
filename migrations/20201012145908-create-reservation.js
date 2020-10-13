'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('reservations', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            branch_id: {
                type: Sequelize.INTEGER
            },
            guest_id: {
                type: Sequelize.INTEGER
            },
            table_id: {
                type: Sequelize.INTEGER
            },
            reservation_date: {
                type: Sequelize.DATEONLY
            },
            reservation_time: {
                type: Sequelize.TIME
            },
            adults: {
                type: Sequelize.INTEGER
            },
            children: {
                type: Sequelize.INTEGER
            },
            note: {
                type: Sequelize.STRING
            },
            status: {
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('reservations');
    }
};
