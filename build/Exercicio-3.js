var GENERO;
(function (GENERO) {
    GENERO["ACAO"] = "a\u00E7\u00E3o";
    GENERO["DRAMA"] = "drama";
    GENERO["COMEDIA"] = "com\u00E9dia";
    GENERO["ROMANCE"] = "romance";
    GENERO["TERROR"] = "terror";
})(GENERO || (GENERO = {}));
function organizaFilmes(nome, ano, genero, pontuacao) {
    if (pontuacao !== undefined) {
        return {
            nome: nome,
            anoLancamento: ano,
            genero: genero,
            pontuacao: pontuacao
        };
    }
    else {
        return {
            nome: nome,
            anoLancamento: ano,
            genero: genero,
        };
    }
}
console.log(organizaFilmes('Duna', 2021, GENERO.ACAO, 74));
console.log(organizaFilmes('Duna', 2021, GENERO.ACAO));
//# sourceMappingURL=Exercicio-3.js.map