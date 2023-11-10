function openModal() {
    document.getElementById('jlmodal').style.display = 'block';
}

function closeModal() {
    document.getElementById('jlmodal').style.display = 'none';
} 

// adiciona um ouvinte de evento para o botão de redirecionamento
document.getElementById('proximo').addEventListener('click', function() {
    

    var isValid = true;
    var formFields = document.querySelectorAll('input');
    // verifica se todos os campos do formulário estão preenchidos
    
    formFields.forEach(function(field) {
        if (field.value.trim() === '') {
            isValid = false;
        }
    });


    if (!isValid) {
        openModal();
    } else {
        window.location.href = 'index.html';
    }
});
// se todos os campos estiverem preenchidos, redireciona para a página principal (index).
