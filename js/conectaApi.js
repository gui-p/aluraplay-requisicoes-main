async function listaVideos(){
    const resposta = await fetch('http://localhost:3000/videos');
    let respostaTratada = await resposta.json();
    return respostaTratada;
}

async function buscaVideo(termoDeBusca){
    const resposta = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`)
    let respostaTratada = await resposta.json();
    return respostaTratada;
}

async function criaVideo(titulo, descricao, url, imagem){
    const resposta = await fetch('http://localhost:3000/videos', {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    });
    if (!resposta.ok){
        throw new Error("Conexão defeituosa, não foi possível enviar o vídeo, tente mais tarde");
    }

    const respostaTratada = await resposta.json();
    return respostaTratada;
}

export const conectaApi = {
    listaVideos,
    criaVideo,
    buscaVideo,
}