require("colors")
var mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;


const uri = 'mongodb+srv://bcitec1:<M@0zinha>@myclusterf.vcakwqd.mongodb.net/?retryWrites=true&w=majority&appName=MyClusterF';

const client = new MongoClient(uri, { useNewUrlParser: true });

var dbo = client.db("exemplo_bd");
var usuarios = dbo.collection("usuarios");

console.log("hola".rainbow)

// inclui o modulo http
var http = require('http');
// inclui o módulo express
var express = require('express');
// cria a variável app, pela qual acessaremos // os métodos / funções existentes no framework
// express
var app = express();
// método use() utilizado para definir em qual // pasta estará o conteúdo estático
app.use(express.static('./public'));
// cria o servidor
var server = http.createServer(app);
// define o número da porta que o servidor ouvirá
server.listen(3000);
// mensagem exibida no console para debug
console.log("servido rodando mapa...");

app.post("/cadastrar_usuario", function(req, resp) {
    var data = { db_nome: req.body.nome, db_login: req.body.login, db_senha: req.body.senha };

    usuarios.insertOne(data, function (err) {
      if (err) {
        resp.render('resposta_usuario', {resposta: "Erro ao cadastrar usuário!"})
      }else {
        resp.render('resposta_usuario', {resposta: "Usuário cadastrado com sucesso!"})        
      };
    });
   
});
app.post("/logar_usuario", function(req, resp) {
    var data = {db_login: req.body.login, db_senha: req.body.senha };

    usuarios.find(data).toArray(function(err, items) {
      console.log(items);
      if (items.length == 0) {
        resp.render('resposta_usuario', {resposta: "Usuário/senha não encontrado!"})
      }else if (err) {
        resp.render('resposta_usuario', {resposta: "Erro ao logar usuário!"})
      }else {
        resp.render('resposta_usuario', {resposta: "Usuário logado com sucesso!"})        
      };

    });

});