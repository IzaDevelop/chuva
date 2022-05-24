// ver mais/ver menos
function verMais(){
    let pontos = document.querySelector('#pontos');
    let maisTexto = document.querySelector('#mais');
    let btnVerMais = document.querySelector('#btnVerMais');
if(pontos.style.display === "none"){
    pontos.style.display = 'inline';
    maisTexto.style.display = 'none';
    btnVerMais.innerHTML = '<i>Ver mais</i>';
} else {
    pontos.style.display = 'none';
    maisTexto.style.display = 'inline';
    btnVerMais.innerHTML = '<i>Ver menos</i>';
}}


// criando comentario dinamico
const formulario = document.querySelector("form");
const campoAssunto = document.querySelector("#assunto");
const campoMensagem = document.querySelector("#mensagem");
const comentario = document.querySelector("#comentado")

formulario.addEventListener("submit", function(event){
    // cancelar redirecionamento do form
    event.preventDefault();
    // capturar o valor digitado nos campos
    let assunto = campoAssunto.value;
    let mensagem = campoMensagem.value;
    // criar dinamicamente via js
    // criar tags
    let titulo = document.createElement("h4");
    let paragrafo = document.createElement("p");
    // montar como deve ser exibido o conteudo
    titulo.innerHTML = `${assunto}`;
    paragrafo.innerHTML = `${mensagem}`;
    // exibindo o conteudo na tag
    comentario.appendChild(titulo).style.width = "100%";
    comentario.appendChild(paragrafo).style.width = "100%";
    // resetar o formulário
    formulario.reset();
});

// italico e negrito no textarea
const negrito = document.querySelector("#negrito");
const italico = document.querySelector('#italico');
const pagina = document.querySelector("textarea");
negrito.addEventListener("click", function(event){
    event.preventDefault();
    pagina.classList.toggle("negrito");
});

italico.addEventListener("click", function(event){
    event.preventDefault();
    pagina.classList.toggle("italico");
});