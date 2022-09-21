const arrayPessoas2 = [
    { nome: "Rogério", email: "roger@email.com", role: "user" },
    { nome: "Ademir", email: "ademir@email.com", role: "admin" },
    { nome: "Aline", email: "aline@email.com", role: "user" },
    { nome: "Jéssica", email: "jessica@email.com", role: "user" },
    { nome: "Adilson", email: "adilson@email.com", role: "user" },
    { nome: "Carina", email: "carina@email.com", role: "admin" }
];
function retornaSelecao2(pessoas) {
    const listEmails = [];
    pessoas.forEach(pessoa => {
        if (pessoa.role === 'admin') {
            listEmails.push(pessoa.email);
        }
    });
    return listEmails;
}
console.log(retornaSelecao2(arrayPessoas2));
//# sourceMappingURL=Exercicio-5.js.map