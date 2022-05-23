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