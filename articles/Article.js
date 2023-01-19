const Sequelize = require("sequelize");
const connection = require("../database/database");
//importando para definir o relacionamento com a tabela Artigo
const Category = require("../categories/Category");

const Article = connection.define('articles',{
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },slug: {
        type: Sequelize.STRING,
        allowNull: false
    },
    body: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})

Category.hasMany(Article); //uma categoria pertence a varios artigos
Article.belongsTo(Category); //um artigo pertence a uma categoria

//force só precisa ser executado uma vez, depois pode ser comentado.
//Article.sync({force: true});

module.exports = Article;
