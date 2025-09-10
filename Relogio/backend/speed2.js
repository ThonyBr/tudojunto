var idade = 67  // Declara a variável 'idade' e atribui o valor 67.

console.log(`Você tem ${idade} anos.`)  // Exibe no console a idade do usuário.

if (idade < 16) {  // Verifica se a idade é menor que 16 anos.
    console.log("Não vota.")  // Se for menor que 16, exibe "Não vota." no console.
} else if (idade < 18 || idade > 65) {  // Caso contrário, verifica se a idade está entre 16-17 ou acima de 65 anos.
    console.log("Voto opcional.")  // Se for menor que 18 ou maior que 65, exibe "Voto opcional." no console.
} else {  // Se nenhuma das condições anteriores for verdadeira, significa que a idade está entre 18 e 65 anos.
    console.log("Voto obrigatório.")  // Exibe "Voto obrigatório." no console.
}
