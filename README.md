# Vision Brazil Investments & GEAP
<p align="center">
<a href= "https://visionbrazil.com/"><img src="/frontend/imagens/GEAP_logo_grad.svg" alt="GEAP" border="0"></a>
</p>

# GEAPédia

##  Integrantes: 
- Desenvolvido por: Matheus Odaguil, Marcelo Schmidt, Guilherme Lopes e <a href="https://www.linkedin.com/in/kaiane-souza-cordeiro-696076268/">Kaiane Souza</a>.
- Agradecimentos: <a href="https://www.linkedin.com/in/renan-feitosa-44328524a/">Renan Feitosa</a> e <a href="https://www.linkedin.com/in/antoniobfm/">Antônio Moraes</a>.

## 📝 Descrição

Esse projeto, desenvolvido para a equipe interna de business da GEAP, tem  como objetivo desenvolver uma plataforma para ajudar a empresa  no processo de análise de dados sobre o mercado de crédito de carbono. Para tal, as informações que eram despadronizadas foram transformadas e inceridas nessa plataforma digital, simples e acessível.

## 📝 LINK

Esta versão de entrega não incluirá link para o deploy em um servidor.


## 📁 Estrutura de pastas

<pre>

  &emsp;|--> Backend
        &emsp;| app.js
  &emsp;|--> Data
        &emsp;| banco.db
  &emsp;|--> Frontend
        &emsp;| imagens
        &emsp;| index.html
        &emsp;| scipt.js
        &emsp;| style.css
  &emsp;|--> standards
  &emsp;|--> banco

  &emsp;|--> README.md
</pre>


## 💻 Configuração para desenvolvimento

Aqui encontram-se todas as instruções necessárias para a instalação de todos os programas, bibliotecas e ferramentas imprescindíveis para a configuração do ambiente de desenvolvimento.

1.  Baixar e instalar o node.js:  [https://nodejs.org/pt-br/](https://nodejs.org/pt-br/) (versão 16.15.1 LTS)
2.  No modo administrador, abra o "prompt de comando" ou o "terminal" e, após,  abra a pasta "src/backend" no diretório raiz.
    - isso pode ser feito da seguinte maneira: 
        a. Veja se a ultima pasta aberta é a "GEAP"
            EX: PS C:\Users\kaiane.cordeiro\Documents\geapedia\GEAP> 
    b. Entre na pasta "backend" digitando "cd" e aperte em seguida o tab no teclado ou digite ".\backend\" e de "enter". 
            EX: PS C:\Users\kaiane.cordeiro\Documents\geapedia\GEAP> cd .\backend\
        c. Digite os comandos:

```sh
npm install sqlite3
```


Isso instalará todas as dependências definidas no arquivo <b>package.json</b> que são necessárias para rodar o projeto. Agora o projeto já está pronto para ser modificado. Caso ainda deseje iniciar a aplicação, digite o comando abaixo no terminal:


```sh
npm install express
```

        d. Digite "node app.js" ainda no terminal ou prompt e de "enter". .
            EX: PS C:\Users\kaiane.cordeiro\Documents\geapedia\GEAP\backend> node .\app.js


5. Agora você pode acessar a aplicação através do link http://localhost:1234
6. O servidor está online.

(Parabéns!! São praticamente desenvolvedores já!!)

<b> - para cada consulta nesta versão, a página deve ser reiniciada.</b>

## 🗃 Outras maneiras de acessar as informações:

- Acessem o banco físico:

1. Baixar o <a href="https://sqlitebrowser.org/dl/">DB Browser</a>.

seguir os passos:
    Open Database - selecionar o arquivo "banco.db" dentro da pasta "data" - clicar em Browse Data - Escolher a tabela que quiser (provavelmente a "projetos" seja a mais procurada)

Se for pedido: selecionar a opçao sqlite.


## 🗃 Histórico de lançamentos

* 1.0.0 - SEMANA 1
    * NEW: Conhecimentos sobre o mercado de credito de carbono.
    * NEW: Começo da modelagem do banco.
* 2.0.0 - SEMANA 2
    * NEW: Criação do banco de dados.
    * NEW: Padronização e limpeza dos dados dos standards.
* 3.0 - SEMANA 3
    * NEW: Criação do frontend.
    * UPDATE: Finalização da implementação do banco.
* 4.0 - SEMANA 4
    * NEW: Implementação de funções axios que conectam o front com o backend.
    * UPDATE: Backend com rotas melhor definidas.
* 5.0 - SEMANA 5
    * UPDATE: versão final do frontend.
    * UPDATE: versão final do backend.
    * UPDATE: versão final com as integrações.
