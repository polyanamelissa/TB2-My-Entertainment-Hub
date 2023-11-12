
function exibirBalaoMensagem(mensagem, tipo) {
      var balaoMensagem = document.getElementById('balaoMensagem');
      balaoMensagem.innerHTML = mensagem;

      if (tipo === 'sucesso') {
        balaoMensagem.style.backgroundColor = 'rgb(43, 92, 53)';
        
      } else if (tipo === 'erro') {
        balaoMensagem.style.backgroundColor = '#f44336'; 
        
      }

      // exibe o balão de mensagem
      balaoMensagem.style.display = 'block';

      // oculta o balão após alguns segundos
      setTimeout(function() {
        balaoMensagem.style.display = 'none';
      }, 7000); 
    }

    function salvarCadastro() {
      var nome = document.getElementById("username").value;
      var email = document.getElementById("email").value;
      var senha = document.getElementById("password").value;

      // verifique se os campos não estão vazios
      if (nome && email && senha) {
        var cadastro = {
          username: nome,
          email: email,
          password: senha,
        };

        
        var cadastroString = JSON.stringify(cadastro);

        localStorage.setItem("cadastro", cadastroString);

        exibirBalaoMensagem('Cadastro salvo com sucesso!', 'sucesso');
      } else {
        exibirBalaoMensagem('Por favor, preencha todos os campos.', 'erro');
      }
    }

