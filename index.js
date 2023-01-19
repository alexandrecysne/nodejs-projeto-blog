const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const session = require("express-session");
const connection = require("./database/database");
const categoriesController = require("./categories/CategoriesController");
const articlesController = require("./articles/ArticlesController");
const usersController = require("./users/UsersController");

const Article = require("./articles/Article");
const Category = require("./categories/Category");
const User = require("./users/User");

//view engine
app.set("view engine",'ejs');

//sessions 2 minutos
app.use(session({
    secret: "qualquercoisaaquiparaaumentarasegurançadoblog", cookie: { maxAge: 120000 }
}))

//static
app.use(express.static('public'));

//body-parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//database
connection
.authenticate()
.then(() => {
    console.log("Conexão feita com sucesso!");
}).catch((error) => {
    console.log(error);
})

//rotas categories
app.use("/", categoriesController);

//rotas articles
app.use("/", articlesController);

//rotas users
app.use("/", usersController);

//rota teste salvar informações na sessão
app.get("/session", (req, res) => {
    req.session.treinamento = "Formação Node.js"
    req.session.ano = 2023
    req.session.user = {
        username: "Alexandre Cysne Esteves",
        email: "alexandre.cysne@gmail.com",
        id: 1
    }
    res.send("Sessão gerada!");
});

//rota teste para ler as informações da sessão
app.get("/read", (req, res) => {
    res.json({
        treinamento: req.session.treinamento,
        ano: req.session.ano,
        user: req.session.user
    })
});

//rota principal
app.get("/", (req, res) => {

    Article.findAll({
        order:[['id','DESC']],limit: 4
    }).then(articles => {
        Category.findAll().then(categories => {
            res.render("index",{articles: articles, categories: categories});
        });
    });
})

app.get("/:slug",(req, res) => {
    var slug = req.params.slug;
    Article.findOne({
        where: {
            slug: slug
        }
    }).then(article => {
        if(article != undefined){
            Category.findAll().then(categories => {
                res.render("article",{article: article, categories: categories});
            });
        }else{
            res.redirect("/");
        }
    }).catch(err => {
        res.redirect("/");
    })
})

app.get("/category/:slug",(req,res) => {
    var slug = req.params.slug;
    Category.findOne({
        where: {
            slug: slug
        },
        include: [{model: Article}]
    }).then( category => {
        if(category != undefined){
            Category.findAll().then(categories => {
                res.render("index",{articles: category.articles, categories: categories});
            })
        }else{
            res.redirect("/");
        }
    }).catch( err => {
        res.redirect("/");
    })
})


app.listen(8080, () => {
    console.log("O servidor está rodando!")
})