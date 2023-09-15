import { conectaApi } from "./conectaApi.js";
import constroiCard from "./mostrarVideos.js";

const botaoPesquisa = document.querySelector("[data-botao-pesquisa]");

async function busca(evento){
    evento.preventDefault();
    const termoDeBusca = document.querySelector("[data-pesquisa]").value;    
    const busca = await conectaApi.buscaVideo(termoDeBusca);
    const lista = document.querySelector("[data-lista]")
    
    while (lista.firstChild){
        lista.removeChild(lista.firstChild);
    }

    busca.forEach(element => {
        lista.appendChild(constroiCard(element))
    });

    if (busca.length == 0){
        lista.innerHTML = `<h2 class="mensagem__titulo">Não existem vídeos com esse termo</h2>`
    }

}

botaoPesquisa.addEventListener('click', evento => busca(evento));