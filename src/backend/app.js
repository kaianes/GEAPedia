var express = require("express");
var app = express();
const hostname = "localhost";
const port = process.env.PORT || 1234;
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: true });
const path = require("path");

const sqlite3 = require("sqlite3").verbose();
const PATH = "../data/banco.db";
var id;

app.use(express.static("../frontend/"));
app.use(express.json());

app.get("/pesquisar_projetos", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*");

  var db = new sqlite3.Database(PATH);

  let input_array = decodeURIComponent(req.query.input).split(",");
  let input_param1 = input_array[0];
  let input_param2 = input_array[1] || ''; 


  
  let sql = `
  SELECT *
  FROM Projeto
  INNER JOIN Credito ON Projeto.id_projeto = Credito.id_projeto
  WHERE (nome LIKE ? OR ID LIKE ? OR tema LIKE ? OR desenvolvedor LIKE ? OR AFOLU LIKE ? OR metodologia LIKE ? OR status LIKE ? OR pais LIKE ? OR estimacao LIKE ? OR regiao LIKE ? OR inicio LIKE ? OR fim LIKE ? OR tema_GEAP LIKE ? OR local LIKE ? OR estado LIKE ? OR standard LIKE ?)
  AND (nome LIKE ? OR ID LIKE ? OR tema LIKE ? OR desenvolvedor LIKE ? OR AFOLU LIKE ? OR metodologia LIKE ? OR status LIKE ? OR pais LIKE ? OR estimacao LIKE ? OR regiao LIKE ? OR inicio LIKE ? OR fim LIKE ? OR tema_GEAP LIKE ? OR local LIKE ? OR estado LIKE ? OR standard LIKE ?)
  `;




  let params = Array(16).fill("%" + input_param1 + "%").concat(Array(16).fill("%" + input_param2 + "%"));


  console.log('Executando consulta SQL:', sql);
  console.log('Com parâmetros:', params);

  db.all(sql, params, function (err, rows) {
    if (err) {
      console.error(err.message);
      res.status(500).send(err.message);
    } else {
      console.log('Resultados da consulta:', rows);
      res.status(200).json(rows);
    }
  });''

  db.close();
});



app.listen(port, () => {
  console.log(`Servidor rodando em http://${hostname}:${port}`);
});


