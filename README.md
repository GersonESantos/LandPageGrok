# LandPageGrok
 
Vou criar uma nova versão da **landing page** com o tema de um **psicólogo**, usando **HTML, CSS, JavaScript** e incluindo o **Bootstrap** para facilitar o design responsivo e adicionar componentes prontos. O foco será em um visual profissional e acolhedor, com um formulário de contato e um botão de call-to-action (CTA).

---

### **Estrutura do Projeto**
Crie uma pasta chamada `landing-page-psicologo` com três arquivos:
- `index.html`
- `styles.css` (para estilos personalizados adicionais)
- `script.js`

---

#### **1. index.html**
```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Psicóloga Ana Silva - Atendimento Online</title>
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header class="bg-primary text-white text-center py-5">
        <div class="container">
            <h1 class="display-4">Psicóloga Ana Silva</h1>
            <p class="lead">Cuidando da sua saúde mental com acolhimento e profissionalismo</p>
            <button id="cta-button" class="btn btn-light btn-lg mt-3">Agende uma Consulta</button>
        </div>
    </header>

    <section class="container my-5">
        <div class="row">
            <div class="col-md-6">
                <h2>Sobre Mim</h2>
                <p>Sou psicóloga formada com mais de 10 anos de experiência, especializada em ansiedade, depressão e autoconhecimento. Ofereço atendimento online para sua comodidade.</p>
            </div>
            <div class="col-md-6">
                <h2>Entre em Contato</h2>
                <form id="contact-form">
                    <div class="mb-3">
                        <input type="text" class="form-control" id="name" placeholder="Seu Nome" required>
                    </div>
                    <div class="mb-3">
                        <input type="email" class="form-control" id="email" placeholder="Seu E-mail" required>
                    </div>
                    <button type="submit" class="btn btn-primary w-100">Enviar</button>
                </form>
                <p id="form-message" class="mt-3 text-success d-none">Mensagem enviada com sucesso!</p>
            </div>
        </div>
    </section>

    <footer class="bg-light text-center py-3">
        <p>&copy; 2025 Psicóloga Ana Silva. Todos os direitos reservados.</p>
    </footer>

    <!-- Bootstrap JS (necessário para alguns componentes) -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="script.js"></script>
</body>
</html>
```

---

#### **2. styles.css**
```css
/* Estilos personalizados adicionais */
body {
    font-family: 'Arial', sans-serif;
    color: #333;
}

header {
    background: linear-gradient(to right, #007bff, #00c4cc); /* Gradiente azul */
}

header h1 {
    font-weight: bold;
}

.form-control:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

.btn-primary {
    background-color: #007bff;
    border: none;
}

.btn-primary:hover {
    background-color: #0056b3;
}

footer {
    position: fixed;
    bottom: 0;
    width: 100%;
}
```

---

#### **3. script.js**
```javascript
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
```

---

### **Como Funciona**
1. **HTML com Bootstrap:**
   - Usa o CDN do Bootstrap 5.3.3 para CSS e JS, trazendo classes prontas como `container`, `row`, `col-md-6`, `btn`, etc.
   - Estrutura dividida em:
     - **Header:** Título, descrição e botão CTA.
     - **Section:** Sobre a psicóloga e formulário de contato lado a lado (responsivo).
     - **Footer:** Rodapé fixo.
2. **CSS Personalizado:**
   - Adiciona um gradiente ao header, ajusta cores e melhora o foco nos inputs.
3. **JavaScript:**
   - O botão CTA exibe um alerta (poderia redirecionar para um link real).
   - O formulário mostra uma mensagem de sucesso ao ser enviado.

---

### **Como Testar**
1. Crie uma pasta chamada `landing-page-psicologo`.
2. Copie e cole os códigos acima nos arquivos correspondentes (`index.html`, `styles.css`, `script.js`).
3. Abra o `index.html` no navegador (necessita de internet por causa do CDN do Bootstrap).
   - Ou use "Live Server" no VS Code para uma experiência mais fluida.

---

### **Resultado**
- Uma landing page profissional para uma psicóloga com:
  - Design responsivo (Bootstrap cuida disso automaticamente).
  - Header com gradiente azul e botão chamativo.
  - Seção "Sobre Mim" e formulário lado a lado em telas grandes, empilhados em telas pequenas.
  - Mensagem de sucesso ao enviar o formulário.

---

### **Por que Bootstrap?**
- **Rapidez:** Estiliza componentes rapidamente com classes prontas.
- **Responsividade:** Grid system (`row`, `col-md-6`) adapta o layout a diferentes tamanhos de tela.
- **Consistência:** Dá um visual polido e profissional sem muito esforço.

---

### **Personalização**
- **Texto:** Altere o nome "Ana Silva" ou a descrição para algo real.
- **Cores:** Modifique o gradiente no CSS (ex.: troque `#007bff` por outra cor).
- **Backend:** Substitua o alerta e a lógica do formulário por uma integração com API (ex.: usando Fetch para enviar dados).

Se precisar de ajustes, como adicionar mais seções ou conectar a um backend, é só me avisar!