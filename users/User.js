const Sequelize = require("sequelize");
const connection = require("../database/database");

const User = connection.define('users',{
    email:{
        type: Sequelize.STRING,
        allowNull: false
    },password: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

//force só precisa ser executado uma vez, depois pode ser comentado.
//User.sync({force: true});

module.exports = User;
