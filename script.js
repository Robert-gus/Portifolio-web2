
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

    // Injeta a mensagem no HTML
    document.getElementById("saudacao").innerText = mensagem;
}

const meusProjetos = [
    {
        nome: "Sistema de Informações do IBGE",
        descricao: "Sistema web para consulta de dados demográficos, econômicos e sociais de diferentes regiões de São José dos Campos.",
        tecnologias: "Python, Flask, HTML, CSS",
        link: "https://github.com/Robert-gus?tab=repositories"
    },
    {
        nome: "Simulador Super Trunfo Marvel",
        descricao: "Lógica em código que simula o clássico jogo de cartas Super Trunfo utilizando os personagens do universo Marvel.",
        tecnologias: "Lógica de Programação, Estruturas de Dados",
        link: "https://github.com/Robert-gus?tab=repositories"
    },
    {
        nome: "TCC - Carneiro Hidráulico",
        descricao: "Projeto prático de conclusão do curso técnico no IFSP focado na criação de um carneiro hidráulico para fins educacionais.",
        tecnologias: "Mecânica, Física Aplicada, Desenho Técnico",
        link: "#"
    }
];


function carregarProjetos() {
    const divLista = document.getElementById("lista-projetos");
    
    divLista.innerHTML = ""; 

    for (let i = 0; i < meusProjetos.length; i++) {
        let projeto = meusProjetos[i];

        divLista.innerHTML += `
            <div class="projeto-card">
                <h3>${projeto.nome}</h3>
                <p>${projeto.descricao}</p>
                <p><strong>Tecnologias:</strong> ${projeto.tecnologias}</p>
                <a href="${projeto.link}" target="_blank">Ver Projeto</a>
            </div>
        `;
    }
}
exibirSaudacao();
carregarProjetos();