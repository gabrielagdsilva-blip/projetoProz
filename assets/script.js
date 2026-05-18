const acoes = [
    {icone: '🚰', texto: 'Feche bem a toneira quando não estiver usando'},
    {icone: '🔔', texto: 'Avise logo se perceber um vazamento'},
    {icone: '♻️', texto: 'Reutilieze água de limpeza quadno possível'},
    {icone: '🥤', texto: 'Use copo ou garrafa reutilizável'},
    {icone: '💬', texto: 'Conte para seus colegas sobre essas dicas'},
    {icone: '🌍', texto: 'Multiplique - cada pessoa influencia outras 5'}
]

const container = document.getElementById('container-acoes');
if(container) {
    for(let i = 0; i< acoes.length; i++) {
        const item = acoes[i]
        const div = document.createElement('div');
        div.className ='acao-item';
        div.innerHTML = `
            <div class ="acao-icone"> ${item.icone}</div>
            <p class = "acao-texto"> ${item.texto} </p>
            `;
            container.appendChild(div)
    }
}

