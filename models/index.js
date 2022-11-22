const config = require('../config/db.config.js');
const Sequalize = require('sequelize');

const sequalize = new Sequalize(config.DB, config.USER, config.PASSWORD, {
    host: config.HOST,
    dialect: config.dialect
});

const db = {};

db.Sequalize = Sequalize;
db.sequalize = sequalize;

db.student = require('./student.model.js')(sequalize, Sequalize);

db.course = require('./course.model.js')(sequalize, Sequalize);

db.contant = require('./contact.model.js')(sequalize, Sequalize);

db.user = require('./user.model.js')(sequalize, Sequalize);

db.student.hasMany(db.course, {
    foreignKey: 'studentId',
    as:"course"
});

db.course.belongsTo(db.student, {
    foreignKey: 'studentId',
    as: "student"
});

module.exports = db;