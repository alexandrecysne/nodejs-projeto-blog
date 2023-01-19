# nodejs-projeto-blog
Siga os passos abaixo para instalar e configurar um projeto blog, com bootstrap, nodejs, framework back-end express js, EJS Embedded JavaScript Templating, bibliotecas: body-parser, sequelize, slugify, tinyMCE, bcryptjs, express-session e mysql. componente: jumbotron. Sessões, Cookies e Autorização com Middleware.
***

## Projeto Blog
> http://localhost:8080
* Projeto simples que vai permitir ao usuário criar categorias e artigos, criar usuários e senhas com hash, criando sessões, cookies e autorização com middleware.

## Softwares instalados
1. Nodejs - https://nodejs.org
1. VS Code - https://code.visualstudio.com
1. Sublime Text - https://www.sublimetext.com
1. Docker - https://www.docker.com/
1. MySQL Banco de Dados - https://dev.mysql.com/downloads/mysql/
1. MySQL Workbench - https://dev.mysql.com/downloads/workbench/

## Bootstrap 4.5

## Bibliotecas instaladas
1. nodemon
1. EJS Embedded JavaScript Templating
1. body-parser
1. sequelize
1. slugify
1. tinyMCE
1. bcryptjs
1. express-session
1. mysql

## Instalação do nodejs

* https://nodejs.org
* Site para download do nodejs

> Comando para verificar a versão do nodejs:
```
> node -v
```

## Instalação do editor de código VS Code

* https://code.visualstudio.com
* Site para download do Visual Studio Code

## Instalação do editor de código Sublime Text

* https://www.sublimetext.com
* Site para download do Sublime Text

## Instalação do Docker

* https://www.docker.com/

## Instalação do banco de dados MySQL

* https://dev.mysql.com/downloads/mysql/
* Site para download do Banco de Dados MySQL
* Você pode instalar o MySQL em um contêinere do Docker
* Configuração do Mysql no arquivo database.js
```
schema: blog
usuário: root
senha: 123456
host: localhost
```

## Instalação do MySQL Workbench

* https://dev.mysql.com/downloads/workbench/

## Iniciando um projeto node

* Crie uma pasta no seu local de preferência
* Acesse essa pasta no seu editor de código de sua preferência
* Digite no terminal, ou Command Prompt
```
npm init
```
* Siga os passos solicitados, informe uma descrição, um author
* Ao concluir será criado o arquivo de configuração **package.json** na pasta do projeto
* Nesse mesmo arquivo de configuração, é configurado o arquivo index.js como main do projeto.
* Nesse arquivo index.js contém as configurações, connection, listen e rotas.
* Caso seja necessário criar um projeto do zero, esse arquivo index.js precisa ser criado manualmente.

## Instalando framework Back-end Express js
* https://expressjs.com/
```
npm install express --save
```
* Após a instalação a mesma poderá ser visualizada no arquivo package.json (dependencies)

## Instalando a biblioteca nodemon globalmente (carregamento automático)

```
npm install nodemon -g
```
* Após a instalação da biblioteca, não será mais necessário parar e iniciar o projeto todas as vezes que os código for alterados ou criados.

* Comando para iniciar o projeto normalmente.
```
node index.js
```

* Comando para iniciar o projeto com nodemon.
```
nodemon index.js
```

## Instalando a biblioteca EJS Embedded JavaScript Templating

```
npm install ejs --save
```
* https://ejs.co/
* Essa biblioteca vai permitir trabalhar com arquivos .ejs / html no node.

## Instalando o Bootstrap 4.5 no projeto

* https://getbootstrap.com/docs/4.5/getting-started/download/
* Site para download do bootstrap
* Após o download do bootstrap-4.5.3-dist.zip, precisa descompactar o arquivo e copiar as pastas css e js para dentro no seu projeto pasta (public).
* Exemplos de container, card, card-body e card-footer
* Exemplos reutilizando .ejs / HTML com partials

## Instalando a biblioteca body-parser

```
npm install body-parser --save
```
* Essa biblioteca vai permitir capturar os dados enviados pelo formulário.

## Instalando a biblioteca sequelize

```
npm install --save sequelize
```
* Essa biblioteca vai permitir trabalhar com banco de dados no node.

## Instalando a biblioteca mysql

```
npm install --save mysql2
```

## Instalando a biblioteca slugify

```
npm install --save slugify
```

## Instalando a biblioteca TinyMCE

* https://www.tiny.cloud/get-tiny/self-hosted/
* Site para download do TinyMCE

* https://www.tiny.cloud/get-tiny/language-packages/
* Site para download da language
* Após o download do zip, precisa descompactar o arquivo e copiar a pasta tinymce para dentro no seu projeto pasta (public).

## Componente bootstrap Jumbotron

* https://getbootstrap.com.br/docs/4.1/components/jumbotron/

## Instalando a biblioteca bcryptjs

```
npm install --save bcryptjs
```

## Instalando a biblioteca express sessions

```
npm install express-session --save
```