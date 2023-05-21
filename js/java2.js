if 

document.addEventListener("DOMContentLoaded", function() {
    var navElement = document.querySelector(".cadastro");
  
    if (navElement) {
      // Remover o elemento <nav> completamente
      navElement.remove();
  
      // Obter o nome armazenado no localStorage
      var name = localStorage.getItem('name');
  
      // Criar um elemento de texto com a saudação
      var textElement = document.createElement("span");
      textElement.textContent = "Olá, " + name;
  
      // Adicionar o elemento de texto ao corpo do documento
      
    }
  });
  