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

const everything = {
  Verra: 'standard',
  Gold: 'standard',
  American: 'standard',
  Climate: 'standard',
  ART: 'standard',
  Plan: 'standard',
  BioCarbon: 'standard',
  Redd: "AFOLU",
  AFOLU: "tema_GEAP",
  Energy: "tema_GEAP",
  Waste: "tema_GEAP",
  Industry: "tema_GEAP",
  Brazil: "pais",
  China: "pais",
  Colombia: "pais",
  India: "pais",
  Indonesia: "pais",
  Kenya: "pais",
  Malaysia: "pais",
  Mexico: "pais",
  Peru: "pais",
  Philippines: "pais",
  South: "pais",
  Thailand: "pais",
  Turkey: "pais",
  Vietnam: "pais",
  Africa: "regiao",
  Asia: "regiao",
  Europe: "regiao",
  Latin: "regiao",
  Middle: "regiao",
  North: "regiao",
  Oceania: "regiao",
}

function buildCheckFilterSQL(array) {

  let sql = ''

  array.forEach(item => {
    console.log(item)
    if (!!everything[item]) {
      if (sql.length >= 1) {
        sql += " AND " + everything[item] + " = ?"
      } else {
        sql += "WHERE " + everything[item] + " = ?"
      }
    }
  })

  return "SELECT * FROM Projeto INNER JOIN Credito ON Projeto.id_projeto = Credito.id_projeto " + sql;
}

app.get("/pesquisar_projetos/check", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*");

  var db = new sqlite3.Database(PATH);

  let input_array = decodeURIComponent(req.query.input).split(",");
  let input_text_search = input_array[0];
  let input_param2 = input_array[1] || '';
  
  let params = input_array.map(item => item)
  
  let sql = buildCheckFilterSQL(input_array)

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


app.get("/pesquisar_projetos", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*");

  var db = new sqlite3.Database(PATH);

  let input_array = decodeURIComponent(req.query.input).split(",");
  let input_text_search = input_array[0];


  console.log('input_text_search')
  console.log(input_text_search)
  
  let sql = `
  SELECT *
  FROM Projeto
  INNER JOIN Credito ON Projeto.id_projeto = Credito.id_projeto
  WHERE nome LIKE ? OR ID LIKE ? OR tema LIKE ? OR desenvolvedor LIKE ? OR AFOLU LIKE ? OR metodologia LIKE ? OR status LIKE ? OR pais LIKE ? OR estimacao LIKE ? OR regiao LIKE ? OR inicio LIKE ? OR fim LIKE ? OR tema_GEAP LIKE ? OR local LIKE ? OR estado LIKE ? OR standard LIKE ?
  `;


  let params = Array(16).fill("%" + input_text_search + "%")


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


