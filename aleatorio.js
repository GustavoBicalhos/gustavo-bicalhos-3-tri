// aleatorio.js

// Lista de nomes
const nomes = ["Ana", "Fernanda", "Maria Eduarda", "Marcelo", "Amanda", "Gustavo", "Gabriel"];

// Função que retorna um nome aleatório
export function aleatorio(lista) {
    const posicao = Math.floor(Math.random() * lista.length);
    return lista[posicao];
}

// Constante que armazena um nome aleatório gerado
export const nome = aleatorio(nomes);
