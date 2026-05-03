function exibirSaudacao() {
    const horaAtual = new Date().getHours();
    let mensagem = "";

    if (horaAtual >= 5 && horaAtual < 12) {
        mensagem = "Bom dia! ☀️";
    } else if (horaAtual >= 12 && horaAtual < 18) {
        mensagem = "Boa tarde! ☕";
    } else {
        mensagem = "Boa noite! 🌙";
    }
    document.getElementById("saudacao").innerText = mensagem;
}

const API_URL = "http://localhost:3000/projetos";

async function carregarProjetos() {
    try {
        const resposta = await fetch(API_URL);
        const projetosDaAPI = await resposta.json();
        
        const divLista = document.getElementById("lista-projetos");
        divLista.innerHTML = ""; 

        for (let i = 0; i < projetosDaAPI.length; i++) {
            let projeto = projetosDaAPI[i];

            divLista.innerHTML += `
                <div class="projeto-card">
                    <h3>${projeto.nome}</h3>
                    <p>${projeto.descricao}</p>
                    <p><strong>Tecnologias:</strong> ${projeto.tecnologias}</p>
                    <a href="${projeto.link}" target="_blank">Ver Projeto</a>
                </div>
            `;
        }
    } catch (erro) {
        console.error("Erro ao carregar projetos. O json-server está ligado?", erro);
        document.getElementById("lista-projetos").innerHTML = "<p>Ligue o servidor para ver os projetos.</p>";
    }
}

async function adicionarProjeto(nome, descricao, tecnologias, link) {
    const novoProjeto = { nome, descricao, tecnologias, link };
    await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(novoProjeto)
    });
    carregarProjetos(); 
}

async function editarProjeto(id, nome, descricao, tecnologias, link) {
    const projetoAtualizado = { nome, descricao, tecnologias, link };
    await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(projetoAtualizado)
    });
    carregarProjetos(); 
}

async function deletarProjeto(id) {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    carregarProjetos(); 
}

exibirSaudacao();
carregarProjetos();