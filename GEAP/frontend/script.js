$(document).ready(function() {
  // Abrir o modal quando o botão for clicado
  $("#openModalBtn").click(function() {
    $("#myModal").css("display", "block");
  });

  // Fechar o modal quando o botão de fechar (X) for clicado
  $(".close").click(function() {
    $("#myModal").css("display", "none");
  });

  // Fechar o modal quando o usuário clicar fora da área do modal
  $(window).click(function(event) {
    if (event.target.id === "myModal") {
      $("#myModal").css("display", "none");
    }
  });
});
