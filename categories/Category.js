const Sequelize = require("sequelize");
const connection = require("../database/database");

const Category = connection.define('categories',{
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },slug: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

//force só precisa ser executado uma vez, depois pode ser comentado.
//Category.sync({force: true});

module.exports = Category;
