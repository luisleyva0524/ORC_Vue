const Sequelize = require('sequelize').Sequelize;
function params(){
    const sequelize = new Sequelize(
        'ORC',
        'dev',
        '1a2b3c4d', {
            dialect: 'mysql',
            host: 'localhost'
        }
    );
    return sequelize;
}

module.exports = params();