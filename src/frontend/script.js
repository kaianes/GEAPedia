

$(document).ready(function () {
  $("#openModalBtn").click(function () {
    $("#myModal").css("display", "block");
  });

  $(".close").click(function () {
    $("#myModal").css("display", "none");
  });

  $("#filter_button").click(function () {
    $("#myModal").css("display", "none");
  });

  $(window).click(function (event) {
    if (event.target.id === "myModal") {
      $("#myModal").css("display", "none");
    }
  });
});



function filtrar() {
  
  $("#loading").text('Carregando...');


  var idsCheckboxes = [
    "verra",
    "gold",
    "acr",
    "car",
    "art",
    "pv",
    "bcr",
    "redd",
    "afolu",
    "energy",
    "waste",
    "industry",
    "brazil",
    "china",
    "colombia",
    "india",
    "indonesia",
    "kenya",
    "malaysia",
    "mexico",
    "peru",
    "philippines",
    "south_africa",
    "thailand",
    "turkey",
    "vietnam",
    "africa",
    "asia",
    "europe",
    "latin_america",
    "middle_east",
    "north_america",
    "oceania",
  ];

  var valoresSelecionados = "";

  for (let i = 0; i < idsCheckboxes.length; i++) {
    var checkbox = document.getElementById(idsCheckboxes[i]);
    if (checkbox.checked) {
      if (valoresSelecionados.length > 0) {
        valoresSelecionados += ", ";
      }
      valoresSelecionados += checkbox.value;
    }
  }

  var input_pesquisa = document.getElementById('input-pesquisa').value;

  var data = {
    input: input_pesquisa,
    checkbox: valoresSelecionados
  };

  data = JSON.stringify(data)
  console.log(data)

  $("#loading").css("display", "block");

  axios
    .get("http://localhost:1234/pesquisar_projetos", {
      params: {
        input: [input_pesquisa, valoresSelecionados]
      }
    })


    .then((response) => {

      $("#loading").css("display", "none");


      var projetos = response.data;
      var projetosFiltrados = projetos.filter(projeto => {
        for (let coluna in projeto) {
          if (projeto[coluna] === valoresSelecionados) {
            return true;
          }
        }
        return false;
      });
    
      let array_html = [];


      var cards = document.getElementsByClassName('card');
      while (cards.length > 0) {
        cards[0].remove();
      }

      projetos.forEach((projeto) => {
        const { nome, ID, desenvolvedor, tema, AFOLU, metodologia, status, pais, estimacao, regiao, inicio, fim, tema_GEAP, local, estado, standard, issued, retired, available } = projeto;

        let html = "";
        html += `

        <div class="projects">
              <h2> Projeto:</h2>
              <div class="infos">
                  <div id="nome" class="div1"><strong>Nome: </strong>${nome}</div>
                  <div id="standard" class="div2"><strong>Standard: </strong>${standard}</div>
                  <div id="tema-geap" class="div1"><strong>Tema GEAP: </strong>${tema_GEAP}</div>
                  <div id="desenvolvedor"  class="div2"><strong>Desenvolvedor: </strong> ${desenvolvedor}</div>
                  <div id="metodologia" class="div1"><strong>Metodologia: </strong>${metodologia}</div>
                  <div id="ID" class="div2"><strong>ID: </strong>${ID}</div>
                  <div id="tema" class="div1" ><strong>Tema Standard: </strong>${tema}</div>
                  <div id="afolu" class="div2"><strong>AFOLU: </strong>${AFOLU}</div>
                  <div id="status" class="div1"><strong>Status: </strong>${status}</div>
                  <div id="pais" class="div2"><strong>País: </strong>${pais}</div>
                  <div id="estimacao-anual" class="div1"><strong>Estimação Anual: </strong>${estimacao}</div>
                  <div id="regiao" class="div2"><strong>Região: </strong>${regiao}</div>
                  <div id="inicio" class="div1"><strong>Início: </strong>${inicio}</div>
                  <div id="fim" class="div2"><strong>Fim: </strong>${fim}</div>
                  <div id="local" class="div1"><strong>Local: </strong>${local}</div>
                  <div id="estado" class="div2"><strong>Estado: </strong>${estado}</div>
              </div>
          
              <h2> Créditos: </h2>
              <div class="infos">
                  <div id="issued" class="h5"><strong>Issued: </strong>${issued}</div>
                  <div id="retired" class="h5"><strong>Retired: </strong>${retired}</div>
                  <div id="available" class="h5"><strong>Available: </strong>${available}</div>
              </div>
        </div>`;


        array_html.push(html);

      });

      const results = document.getElementById("results");
      results.innerHTML = "";

      array_html.forEach((trecho_html) => {
        const cardDiv = document.createElement("div");
        cardDiv.className = "card";
        cardDiv.innerHTML = trecho_html;
        results.appendChild(cardDiv);
      });
      
      const projectCount = document.getElementById("projectCount");
      projectCount.innerHTML = "Número de Projetos: " + array_html.length;
    })
    
    .catch((error) => {
      $("#loading").css("display", "none");
      console.log(error);
    });

}

window.filtrar = filtrar;


