let inputs = document.getElementsByClassName("input-form");
for (let input of inputs) {
    input.addEventListener("blur", function () {
        if (input.value.trim() != "") {
            input.classList.add("has-val");
        } else {
            input.classList.remove("has-val");
        }
    });
}

let form = document.getElementById("login-form");
form.addEventListener("submit", function (event) {
    let inputs = document.getElementsByClassName("input-form");
    for (let input of inputs) {
        if (input.value.trim() == "") {
            input.parentElement.classList.add("wrap-input-invalid");
        }
    }
    event.preventDefault();
});

//conferindo se o campo login e senha estão vazios

//código antigo feito por polyana

function redirecionarParaIndex() {
    var email = document.querySelector('input[name="email"]').value;
    var senha = document.querySelector('input[name="password"]').value;

    let cadastradoObj = JSON.parse(localStorage.getItem("cadastro"));

    if (!localStorage.length) {
        return null;
    }
    if (email === cadastradoObj.email && senha === cadastradoObj.password) {
        window.location.href = "../index.html";
    } else {
        // Crie um elemento de balão de aviso
        erro();
    }
}

function erro(params) {
    var warningBalloon = document.createElement("div");
    warningBalloon.textContent =
        "Por favor, preencha o campo de email e senha antes de fazer login.";
    warningBalloon.style.backgroundColor = "#f44336"; // Cor de fundo vermelha
    warningBalloon.style.color = "#fff"; // Cor do texto branca
    warningBalloon.style.padding = "10px";
    warningBalloon.style.borderRadius = "5px";
    warningBalloon.style.position = "fixed"; // Posição fixa na tela
    warningBalloon.style.top = "20px"; // Afaste 20 pixels do topo
    warningBalloon.style.left = "0";
    warningBalloon.style.width = "100%";
    warningBalloon.style.textAlign = "center";
    warningBalloon.style.zIndex = "1";

    // Adicione o balão ao formulário
    var loginForm = document.getElementById("login-form");
    loginForm.appendChild(warningBalloon);

    // Defina um temporizador para remover o balão após alguns segundos (opcional)
    setTimeout(function () {
        loginForm.removeChild(warningBalloon);
    }, 5000); // Oculta após 5 segundos (5000 milissegundos)
}

/*

//função de verificar "nova"

function verificarLogin() {
      var emailDigitado = document.querySelector('input[name="email"]').value;
      var senhaDigitada = document.querySelector('input[name="password"]').value;

      // Recupera os dados do localStorage
      var usuariosCadastrados = JSON.parse(localStorage.getItem("usuarios")) || [];

      // Verifica se as credenciais correspondem a algum usuário
      var usuarioEncontrado = usuariosCadastrados.find(function(usuario) {
        return usuario.email === emailDigitado && usuario.password === senhaDigitada;
      });

      if (usuarioEncontrado) {
        // Se as credenciais são corretas, redireciona para o index.html
        alert('certoo');
        window.location.href = 'pagina-inicial-main/index.html';
      } else {
        // Se não correspondem, exibe balão de aviso
        exibirBalaoAviso('Email ou senha incorretos.');
      }
    }

 */

/* função para abrir a modal */

function openModal() {
    document.getElementById("janelamodal").style.display = "block";
}

/* função para fechar a modal */

function closeModal() {
    document.getElementById("janelamodal").style.display = "none";
}

document.getElementById("autores").addEventListener("click", function () {
    openModal();
});
