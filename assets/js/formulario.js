const elementoBotaoFormulario = document.querySelector("#contato .container .container-lados .lado-direito form button");
const elementoInputNome = document.querySelector("#contato .container .container-lados .lado-direito form #inputNome");
const elementoInputEmpresa = document.querySelector("#contato .container .container-lados .lado-direito form #inputEmpresa");
const elementoInputServico = document.querySelector("#contato .container .container-lados .lado-direito form #inputServico");
const elementoInputAssunto = document.querySelector("#contato .container .container-lados .lado-direito form #inputAssunto");
const elementoTextareaMensagem = document.querySelector("#contato .container .container-lados .lado-direito form #textareaMensagem");

elementoBotaoFormulario.addEventListener("click", function() {
    if (elementoInputNome.checkValidity() && elementoInputEmpresa.checkValidity()) {
        event.preventDefault();

        // Início do link WhatsApp
        let comecoLinkConversa = "https://wa.me/5513997978218?text=";
        // Adicionando valores dos campos no link
        let textoLinkConversa = "*Nome:* " + elementoInputNome.value.trim() + "\n"
            + "*Empresa:* " + elementoInputEmpresa.value.trim() + "\n"
            + "*Serviço:* " + elementoInputServico.value.trim() + "\n"
            + "*Assunto:* " + elementoInputAssunto.value.trim() + "\n"
            + "*Mensagem:* " + elementoTextareaMensagem.value.trim();

        // Link completo
        let linkConversa = comecoLinkConversa + encodeURIComponent(textoLinkConversa);
        // Abrindo o link em outra aba
        window.open(linkConversa, "_blank");
    }
});