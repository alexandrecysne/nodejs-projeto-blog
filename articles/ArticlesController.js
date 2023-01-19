const express = require("express");
const router = express.Router();
const Category = require("../categories/Category");
const Article = require("./Article");
const slugify = require("slugify");
const adminAuth = require("../middlewares/adminAuth");

router.get("/admin/articles", adminAuth, (req, res) => {
    Article.findAll({
        include: [{model: Category}] //join Category
    }).then(articles => {
        res.render("admin/articles/index",{articles: articles})
    });
});

router.get("/admin/articles/new", adminAuth, (req, res) => {
    Category.findAll().then(categories => {
        res.render("admin/articles/new",{categories: categories});
    })
});

//rota para incluir um artigo
router.post("/articles/save", adminAuth, (req, res) => {
    var title = req.body.title;
    var body = req.body.body;
    var category = req.body.category;

    Article.create({
        title: title,
        slug: slugify(title),
        body: body,
        categoryId: category
    }).then(() => {
        res.redirect("/admin/articles");
    })

});

//rota para excluir um artigo
router.post("/articles/delete", adminAuth, (req, res) => {
    var id = req.body.id;
    if(id != undefined){
        if(!isNaN(id)){
            Article.destroy({
                where: {
                    id: id
                }
            }).then(() => {
               res.redirect("/admin/articles"); 
            })  
        }else{
            res.redirect("/admin/articles");
        }
    }else{
        res.redirect("/admin/articles");
    }
})

//rota para editar um artigo
router.get("/admin/articles/edit/:id", adminAuth, (req, res) => {
    var id = req.params.id;
    Article.findByPk(id).then(article => {
        if(article != undefined ){
            Category.findAll().then(categories => {
                res.render("admin/articles/edit", {categories: categories, article: article});
            });
        }else{
            res.redirect("/");
        }
    }).catch(err => {
        res.redirect("/");
    })
})

//rota para atualizar um artigo
router.post("/articles/update", adminAuth, (req, res) => {
    var id = req.body.id;
    var title = req.body.title;
    var body = req.body.body;
    var category = req.body.category;

    Article.update({
        title: title,
        slug: slugify(title),
        body: body,
        categoryId: category
    },{ where: {id: id }
    }).then(() => {
        res.redirect("/admin/articles");
    }).catch(err => {
        res.redirect("/");
    });
});

//rota de paginação 4x4
router.get("/articles/page/:num", (req, res) => {
    var page = req.params.num;
    var offset = 0;
    var qtPage = 4;

    if(isNaN(page) || page == 0){
        offset = 0;
    }else{
        offset = parseInt(page) * qtPage;
    }
    
    Article.findAndCountAll({
        limit: qtPage,
        offset: offset,
        order:[['id','DESC']]        
    }).then(articles => {

        var next;
        console.log("offset: "+parseInt(offset+4));
        console.log("count: "+articles.count);
        if(offset + 4 >= articles.count){
            next = false;
        }else{
            next = true;
        }

        var result = {
            page: parseInt(page),
            next: next,
            articles: articles
        }

        Category.findAll().then(categories => {
            res.render("admin/articles/page",{result: result, categories: categories})
        })

        //res.json(result);
    })
})

module.exports = router;