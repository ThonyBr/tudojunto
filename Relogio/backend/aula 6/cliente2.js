const cliente1 = {
    nome: "Robson",
    idade: 29,
    cpf: "05086678086",
    email: "robinho@polo.com.br",
};

const cliente2 = {
    nome: "Nãosei",
    idade: 50,
    cpf: "12345678998",
    email: "vaisaber@polo.com.br"
};

const cliente3 = {
    nome: "Amanda",
    idade: 35,
    cpf: "98765432100",
    email: "amanda@email.com"
};

const cliente4 = {
    nome: "Carlos",
    idade: 42,
    cpf: "65432198700",
    email: "carlos@email.com"
};

const chaves = ["nome", "idade", "cpf", "email"];

[chaves, cliente1, cliente2, cliente3, cliente4].forEach((cliente) => {
    chaves.forEach((chave) => {
        console.log(`O campo ${chave} tem valor ${cliente[chave]}`);
    });
});
