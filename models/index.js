const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "local";
const config = require("../config/database.config")[env];
const path = require("path")

//PostgreSQL TIMESTAMP WITHOUT TIME ZONE
// require('pg').types.setTypeParser(1114, stringValue => {
//     return new Date(stringValue + '+0000');
//     // e.g., UTC offset. Use any offset that you would like.
// });

let sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    port: config.port,
    dialect: config.dialect,
    logging: config.logging,
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

sequelize
    .authenticate()
    .then(err => {
        if (err) {
            console.info(`Authenticate DB: ${process.env.NODE_ENV} ${err}`);
        } else {
            console.info(`DB connection has connected on environment: ${process.env.NODE_ENV}`);
            if (process.env.NODE_ENV && process.env.NODE_ENV !== "local") {
                setInterval(() => {
                    sequelize
                        .query(`SELECT 'TEST CONNECTION OK AT ${Date.now()}'`, {
                            type: Sequelize.QueryTypes.SELECT
                        })
                        .then(_ => {
                            console.info('Ping oke')
                        })
                        .catch(err => {
                            console.error(err);
                        });
                }, 5000);
            }
        }
    })
    .catch(err => {
        console.error("Unable to connect to the database:", err);
        process.exit(0);
    });

//Load models
const models = {
    Restaurant: require(path.join(__dirname, "restaurant.model.js"))(sequelize, Sequelize.DataTypes),
    Branch: require(path.join(__dirname, "branch.model.js"))(sequelize, Sequelize.DataTypes),
    Section: require(path.join(__dirname, "section.model.js"))(sequelize, Sequelize.DataTypes),
    OpenHour: require(path.join(__dirname, "openhour.model.js"))(sequelize, Sequelize.DataTypes),
    Table: require(path.join(__dirname, "table.model.js"))(sequelize, Sequelize.DataTypes),
    Guest: require(path.join(__dirname, "guest.model.js"))(sequelize, Sequelize.DataTypes),
    Reservation: require(path.join(__dirname, "reservation.model.js"))(sequelize, Sequelize.DataTypes),
};

Object.keys(models)
    .filter(key => typeof models[key].associate === "function")
    .forEach(key => {
        if (models[key].associate) {
            models[key].associate(models);
        }
    });

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;
