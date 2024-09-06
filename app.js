function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    let resultados = "";
    let titulo = "";
    let sinopse = "";
    let tags = "";
    
    if (campoPesquisa == ""){
        section.innerHTML = "<p>Pesquise um filme.</p>"
        return
    };

    campoPesquisa = campoPesquisa.toLowerCase();

    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        sinopse = dado.sinopse.toLowerCase();
        tags = dado.tags.toLowerCase();
        if (titulo.includes(campoPesquisa) || sinopse.includes(campoPesquisa) || tags.includes(campoPesquisa)){
        resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.sinopse}</p>
                <a href="${dado.link}" target="_blank">Trailer do Filme</a>
                <p class="descricao-meta">${dado.diretor}</p>
            </div>
`
}
    };
    if (!resultados) {
        resultados = "<p>Não encontrado</p>"
    }

    section.innerHTML = resultados;

};


