function comprar() {
    // escolhendo o ingresso
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidadeDoIngresso = document.getElementById('qtd').value;

    // verificando se há quantidade disponivel
    let listaIngresso = document.getElementById(`qtd-${tipoIngresso}`);
    let estoqueIngresso = parseInt(listaIngresso.textContent);
    if (estoqueIngresso > 0) {
        // decrementando
        let totalDosIngressos = estoqueIngresso - quantidadeDoIngresso;
        listaIngresso.innerHTML = `<span id="qtd-pista">${totalDosIngressos}</span>`;
    } else {
        alert('Quantidade indisponível de ingressos');
        return;
    };
};