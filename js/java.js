document.getElementById("registrationForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Impede o envio do formulário padrão

  let isValid = false; // Variável para controlar a validação dos campos

  while (!isValid) {
    // Lógica de validação dos campos do formulário
    let name = document.getElementById("name").value;
    let lastName = document.getElementById("lastName").value;
    let cpf = document.getElementById("cpf").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let cep = document.getElementById("cep").value;

    var errorMessages = [];

    if (name.length < 5) {
      errorMessages.push("O nome deve ter pelo menos 5 letras.");
    }

    if (lastName.length < 5) {
      errorMessages.push("O sobrenome deve ter pelo menos 5 letras.");
    }

    if (!/^\d{11}$/.test(cpf)) {
      errorMessages.push("O CPF deve conter 11 números.");
    }

    if (email.length < 5 || !email.includes("@")) {
      errorMessages.push("O email deve conter pelo menos 5 letras e um '@'.");
    }

    if (!/^\d{8}$/.test(cep)) {
      errorMessages.push("O CEP deve conter 8 números.");
    }

    if (password !== confirmPassword) {
      errorMessages.push("As senhas não correspondem.");
    }

    if (errorMessages.length > 0) {
      document.getElementById("msgError").innerHTML = errorMessages.join("<br>");
      isValid = false; // Ainda existem erros, o loop continua
    } else {
      document.getElementById("msgError").innerHTML = ""; // Limpa a mensagem de erro
      document.getElementById("msgSuccess").innerHTML = "Cadastro realizado com sucesso!"; // Exibe mensagem de sucesso
      document.getElementById("registrationForm").reset(); // Reseta o formulário
      console.log("Cadastro concluído");

      // Armazena os dados no localStorage
      localStorage.setItem('name', name);
      localStorage.setItem('lastName', lastName);
      localStorage.setItem('cpf', cpf);
      localStorage.setItem('email', email);
      localStorage.setItem('cep', cep);

      isValid = true; // Todos os campos foram validados, o loop é interrompido
      break; // Sai do loop
    }
  }

      window.location.replace("../index.html")
 

   
      
      
   
    
      
 
});