'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const transaction = await queryInterface.sequelize.transaction();
        try {
            await queryInterface.bulkInsert('restaurants', [
                {
                    name: 'Demo Restaurant',
                    desciption: 'non enim praesent elementum facilisis leo vel fringilla est ullamcorper',
                    logo: 'logo',
                    hotline: 'hotline',
                    status: 'active',
                    createdAt: new Date(),
                    updatedAt: new Date()
                }
            ], { transaction });

            await queryInterface.bulkInsert('branches', [
                {
                    restaurant_id: 1,
                    name: 'Branch 01',
                    location: 'localtion 01',
                    hotline: 'hotline branch 01',
                    status: 'active',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    restaurant_id: 1,
                    name: 'Branch 02',
                    location: 'localtion 02',
                    hotline: 'hotline branch 02',
                    status: 'active',
                    createdAt: new Date(),
                    updatedAt: new Date()
                }
            ], { transaction });

            //branch 1
            await queryInterface.bulkInsert('open_hours', [
                {
                    branch_id: 1,
                    day_of_week: 0,
                    open_time: 600,
                    close_time: 1380,
                    last_order: 1140,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    branch_id: 1,
                    day_of_week: 1,
                    open_time: 600,
                    close_time: 1380,
                    last_order: 1140,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    branch_id: 1,
                    day_of_week: 2,
                    open_time: 600,
                    close_time: 1380,
                    last_order: 1140,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    branch_id: 1,
                    day_of_week: 3,
                    open_time: 600,
                    close_time: 1380,
                    last_order: 1140,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    branch_id: 1,
                    day_of_week: 4,
                    open_time: 600,
                    close_time: 1380,
                    last_order: 1140,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    branch_id: 1,
                    day_of_week: 5,
                    open_time: 600,
                    close_time: 1380,
                    last_order: 1140,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    branch_id: 1,
                    day_of_week: 6,
                    open_time: 600,
                    close_time: 1380,
                    last_order: 1140,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },

            ], { transaction });

            //branch 2
            await queryInterface.bulkInsert('open_hours', [
                {
                    branch_id: 2,
                    day_of_week: 0,
                    open_time: 840,
                    close_time: 1380,
                    last_order: 1140,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    branch_id: 2,
                    day_of_week: 1,
                    open_time: 840,
                    close_time: 1380,
                    last_order: 1140,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    branch_id: 2,
                    day_of_week: 2,
                    open_time: 840,
                    close_time: 1380,
                    last_order: 1140,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    branch_id: 2,
                    day_of_week: 3,
                    open_time: 840,
                    close_time: 1380,
                    last_order: 1140,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    branch_id: 2,
                    day_of_week: 4,
                    open_time: 840,
                    close_time: 1380,
                    last_order: 1140,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    branch_id: 2,
                    day_of_week: 5,
                    open_time: 840,
                    close_time: 1380,
                    last_order: 1140,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    branch_id: 2,
                    day_of_week: 6,
                    open_time: 840,
                    close_time: 1380,
                    last_order: 1140,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },

            ], { transaction });


            await queryInterface.bulkInsert('sections', [
                {
                    branch_id: 1,
                    name: 'Area A',
                    status: 'active',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    branch_id: 1,
                    name: 'Area B',
                    status: 'active',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    branch_id: 2,
                    name: 'Floor 1',
                    status: 'active',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    branch_id: 2,
                    name: 'Floor 2',
                    status: 'active',
                    createdAt: new Date(),
                    updatedAt: new Date()
                }
            ], { transaction });

            //table for branch 1
            await queryInterface.bulkInsert('tables', [
                {
                    branch_id: 1,
                    section_id: 1,
                    name: 'Table 01',
                    code: 'A01',
                    status: 'active',
                    min_seat: 1,
                    max_seat: 4,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    branch_id: 1,
                    section_id: 1,
                    name: 'Table 02',
                    code: 'A02',
                    status: 'active',
                    min_seat: 1,
                    max_seat: 4,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    branch_id: 1,
                    section_id: 1,
                    name: 'Table 03',
                    code: 'A03',
                    status: 'active',
                    min_seat: 1,
                    max_seat: 4,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    branch_id: 1,
                    section_id: 2,
                    name: 'Table 04',
                    code: 'B01',
                    status: 'active',
                    min_seat: 4,
                    max_seat: 8,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    branch_id: 1,
                    section_id: 2,
                    name: 'Table 05',
                    code: 'B02',
                    status: 'active',
                    min_seat: 4,
                    max_seat: 8,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    branch_id: 1,
                    section_id: 2,
                    name: 'Table 06',
                    code: 'B03',
                    status: 'active',
                    min_seat: 4,
                    max_seat: 8,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
            ], { transaction });


            //table for branch 2
            await queryInterface.bulkInsert('tables', [
                {
                    branch_id: 2,
                    section_id: 3,
                    name: 'Table 01',
                    code: 'F101',
                    status: 'active',
                    min_seat: 1,
                    max_seat: 4,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    branch_id: 2,
                    section_id: 3,
                    name: 'Table 02',
                    code: 'F102',
                    status: 'active',
                    min_seat: 1,
                    max_seat: 4,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    branch_id: 2,
                    section_id: 3,
                    name: 'Table 03',
                    code: 'F103',
                    status: 'active',
                    min_seat: 1,
                    max_seat: 4,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    branch_id: 2,
                    section_id: 4,
                    name: 'Table 04',
                    code: 'F201',
                    status: 'active',
                    min_seat: 4,
                    max_seat: 8,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    branch_id: 2,
                    section_id: 4,
                    name: 'Table 05',
                    code: 'F202',
                    status: 'active',
                    min_seat: 4,
                    max_seat: 8,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    branch_id: 2,
                    section_id: 4,
                    name: 'Table 06',
                    code: 'F203',
                    status: 'active',
                    min_seat: 4,
                    max_seat: 8,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
            ], { transaction });

            //commit transaction
            await transaction.commit();

        } catch (error) {
            await transaction.rollback();
            return Promise.reject(error);
        }
    },

    down: async (queryInterface, Sequelize) => {
        const transaction = await queryInterface.sequelize.transaction();
        try {
            await queryInterface.bulkDelete('restaurants', null, { transaction });
            await transaction.commit();

        } catch (error) {
            await transaction.rollback();
            throw error;
        }
    }
};
