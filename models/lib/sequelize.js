const Sequelize = require('sequelize')

const sequelize = new Sequelize('blog', 'root', 'password', {
    host: 'localhost',
    pool: {
        max: 5,
        min: 0,
        acquire: 3000,
        idle: 1000
    },
    dialect: 'mysql'
})

const article = sequelize.define('article_info', {
    title: {
        type: Sequelize.STRING
    },
    author: {
        type: Sequelize.STRING
    },
    introduction: {
        type: Sequelize.STRING
    },
    article_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    content: Sequelize.TEXT,
    visitor_total: Sequelize.INTEGER,
    created_at: Sequelize.DATE
}, {
    freezeTableName: true,
    timestamps: false
})

module.exports = {
    article
}