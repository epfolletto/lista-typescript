function retornaFatorial(palavra) {
    const arrayPalavra = palavra.split('');
    let fatorial = 1;
    if (arrayPalavra.length === 0 || arrayPalavra.length === 1)
        fatorial = 1;
    for (let i = 1 + 1; i <= arrayPalavra.length; i++) {
        fatorial = fatorial * i;
    }
    return fatorial;
}
console.log(retornaFatorial('mesarf'));
//# sourceMappingURL=Exercicio-9.js.map