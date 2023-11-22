<?php
  //faz a conexão com o banco de dados que criamos no MySQL usando o phpMyAdmin
  //                    endereço    usuario  senha   nome do banco
  $db = mysqli_connect("localhost", "root", "", "login");
  $db->set_charset("utf8");

  // verifica se a conexão funcionou...
  if (!$db) {
    // encerra a execução do script php, mostrando um erro
    $descricaoErro = "Erro: não foi possível conectar ao banco de dados. ";
    $descricaoErro = $descricaoErro . "Detalhes: " . mysqli_connect_error();
    die($descricaoErro);
  }

  $nome = $_POST['nome'];
  $user = $_POST['user'];
  $senha = $_POST['senha'];

  $sql = "SELECT `email` FROM `cadastro` WHERE `email` = '".$user."'";
  $sqlquery = mysqli_query($db, $sql);
  $statusEmail = false; // Já existe email cadastrado]

  // retorna a quantidade de linhas que foi pesquisada pelo email
  if(mysqli_num_rows($sqlquery) == 0){
    $sql = "INSERT INTO `cadastro` (`nome`, `email`, `senha`) VALUES ('".$nome."','".$user."','".$senha."')";
    $sqlquery = mysqli_query($db, $sql);
    $statusEmail = true; // cadastrou e-mail
  }

  if($statusEmail)
    echo true; // e-mail inexistente e foi cadastrado
  else
    echo false; // e-amil existente e nada foi feito
?>
