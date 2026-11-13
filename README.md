# e-Ticket

Projeto que fiz durante o curso da Alura pra praticar JavaScript mexendo no DOM. O HTML e o CSS já vieram prontos do curso, e o JavaScript (`js/app.js`) foi a parte que eu desenvolvi.

É um site de compra de ingressos: o usuário escolhe o setor, digita a quantidade e clica em Comprar. A quantidade disponível de cada setor aparece na tela e diminui a cada compra.

## O que ele faz

- Três setores de ingressos, cada um com um estoque inicial: Pista (100), Cadeira superior (200) e Cadeira inferior (400)
- Lista de opções pra escolher o setor e campo pra digitar a quantidade
- Botão Comprar: confere se a quantidade é válida e se ainda tem ingressos suficientes naquele setor
- Se a quantidade for zero, negativa ou o campo estiver vazio, aparece um alerta pedindo um número válido
- Se o usuário pedir mais ingressos do que o setor tem, aparece um alerta de quantidade indisponível e o estoque não muda
- Se estiver tudo certo, aparece um alerta de compra realizada e o número de ingressos disponíveis daquele setor é atualizado na tela

## O que eu pratiquei

- Pegar elementos da página com `getElementById`
- Ler o `value` de uma lista de opções (`select`) e de um campo de número (`input`)
- Ler o texto de um elemento com `textContent` e transformar em número com `parseInt`
- Usar `isNaN` junto com `||` pra barrar quando o campo está vazio
- Usar `if`, `else if` e `else` pra decidir o que fazer em cada situação
- Criar funções que recebem parâmetros (`comprarPista`, `comprarInferior` e `comprarSuperior`)
- Atualizar o texto da página com `textContent`, depois de calcular o novo valor com `-=`
- Usar `alert` pra dar retorno pro usuário
- Ligar a função `comprar()` ao botão pelo `onclick`

## Como rodar

Não precisa instalar nada. É só baixar o projeto e abrir o arquivo HTML no navegador.

## Estrutura

- arquivo HTML da página
- `styles/`: `_reset.css` e `style.css`
- `js/app.js`: lógica da compra
- `assets/`: imagens e ícones (PNG e SVG)

## Observação

Se o usuário digitar um número decimal na quantidade (por exemplo 2.9), o `parseInt` considera só a parte inteira, então a compra é feita com 2 ingressos.
