const express = require("express");
const router = express.Router();
const User = require("./User");
const bcrypt = require("bcryptjs");
const { EmptyResultError } = require("sequelize");

//rota listagem dos usuários
router.get("/admin/users", (req, res) => {
    User.findAll().then(users => {
        res.render("admin/users/index",{users: users});
    })
});

//rota
router.get("/admin/users/create", (req, res) => {
    res.render("admin/users/create");
});

//rota criar usuário
router.post("/users/create", (req, res) => {
    var email = req.body.email;
    var password = req.body.password;

    //verificando se email informado já existe no banco de dados
    User.findOne({where: {email: email}}).then( user => {
        if(user == undefined){
            var salt = bcrypt.genSaltSync(10);
            var hash = bcrypt.hashSync(password, salt);
        
            //testando informações
            //res.json({email,password,hash});
        
            User.create({
                email: email,
                password: hash
            }).then(() => {
                res.redirect("/");
            }).catch((err) => {
                res.redirect("/");
            });

        }else{
            res.redirect("/admin/users/create");
        }
    })
});

router.get("/login", (req, res) => {
    res.render("admin/users/login");
})

//rota de autenticação
router.post("/authenticate", (req, res) => {
    var email = req.body.email;
    var password = req.body.password;

    User.findOne({where: {email: email}}).then(user => {
        if(user != undefined){
            //validar senha
            var correct = bcrypt.compareSync(password,user.password);

            if(correct){
                //criar 
                req.session.user = {
                    id: user.id,
                    email: user.email
                }
                //res.json(req.session.user);
                res.redirect("/admin/articles");
            }else{
                res.redirect("/login");
            }

        }else{
            res.redirect("/login");
        }
    })
})

//rota logout
router.get("/logout", (req, res) => {
    req.session.user = undefined;
    res.redirect("/login");
})

module.exports = router;