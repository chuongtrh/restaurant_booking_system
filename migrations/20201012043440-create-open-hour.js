'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('open_hours', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            branch_id: {
                type: Sequelize.INTEGER
            },
            day_of_week: {
                type: Sequelize.INTEGER
            },
            open_time: {
                type: Sequelize.INTEGER
            },
            close_time: {
                type: Sequelize.INTEGER
            },
            last_order: {
                type: Sequelize.INTEGER
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
        await queryInterface.dropTable('open_hours');
    }
};
