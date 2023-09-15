import { conectaApi } from "./conectaApi.js"

const elementoListaVideos = document.querySelector("[data-lista]");

export default function constroiCard(video){
    const elementoVideo = document.createElement('li');
    elementoVideo.className = 'videos__item'

    elementoVideo.innerHTML = `
        <iframe width="100%" height="72%" src="${video.url}"
        title="${video.titulo}" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
        <div class="descricao-video">
            <img src="${video.imagem}" alt="logo canal alura">
            <h3>${video.titulo}</h3>
            <p>${video.descricao}</p>
        </div>
        `   
    
    return elementoVideo;
}

async function listaVideo(){
    try{
        const listaVideosAPI = await conectaApi.listaVideos();
        console.table(listaVideosAPI);
        listaVideosAPI.forEach(video => {
            elementoListaVideos.appendChild(constroiCard(video));       
        });
    } catch {
        elementoListaVideos.innerHTML = `<h2 class="mensagem__titulo">Não foi possível carregar a lista de vídeos</h2>`
    }
}

listaVideo()

