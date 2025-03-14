// Interatividade do botão CTA
document.getElementById('cta-button').addEventListener('click', function() {
    alert('Você será redirecionado para agendar sua consulta!');
    // Aqui poderia ser: window.location.href = 'https://link-de-agendamento';
});

// Lógica do formulário
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio real do formulário

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name && email) {
        const message = document.getElementById('form-message');
        message.classList.remove('d-none'); // Remove a classe Bootstrap 'd-none' para exibir
        this.reset(); // Limpa o formulário
    }
});