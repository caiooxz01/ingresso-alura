function comprar() {
    // escolhendo o ingresso
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidadeDeCompra = document.getElementById('qtd').value;

    if (quantidadeDeCompra <= 0) {
        alert('Digite um número de ingressos válido');
        return;
    };
    
    if (tipoIngresso =='pista') {
        comprarPista(quantidadeDeCompra);
    } else if (tipoIngresso == 'inferior') {
        comprarInferior(quantidadeDeCompra);
    } else if (tipoIngresso == 'superior') {
        comprarSuperior(quantidadeDeCompra);
    };
};

function comprarPista(qtd) {
    let pista = document.getElementById('qtd-pista');
    let quantidadePista = parseInt(pista.textContent);

    if (qtd > quantidadePista) {
        alert('Quantidade indisponível de ingressos do setor Pista');
    } else {
        alert('Compra realizada com sucesso!');
        quantidadePista -= qtd;
        pista.innerHTML = `<span id="qtd-pista">${quantidadePista}</span>`
    };
};

function comprarInferior (qtd) {
    let inferior = document.getElementById('qtd-inferior');
    let quantidadeInferior = parseInt(inferior.textContent);

    if (qtd > quantidadeInferior) {
        alert('Quantidade indisponível de ingressos do setor Cadeira Inferior');
    } else {
        alert('Compra realizada com sucesso!');
        quantidadeInferior -= qtd;
        inferior.innerHTML = `<span id="qtd-inferior">${quantidadeInferior}</span>`
    };
};

function comprarSuperior (qtd) {
    let superior = document.getElementById('qtd-superior');
    let quantidadeSuperior = parseInt(superior.textContent);

    if (qtd > quantidadeSuperior) {
        alert('Quantidade indisponível de ingressos do setor Cadeira Superior');
    } else {
        alert('Compra realizada com sucesso!');
        quantidadeSuperior -= qtd;
        superior.innerHTML = `<span id="qtd-superior">${quantidadeSuperior}</span>`
    };
}