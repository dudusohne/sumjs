
    nome = "duduzera";
    apelido = "joel";
    idade = 29;
    javascriptdev = true;

    let guy = {
        nome,
        apelido,
        idade,
        javascriptdev
    };

    if (guy.nome == "dudu") {
        console.log("ok, dudu");
    } else if (guy.apelido == "joel") {
        console.log("não é dudu, mas sim joel");
        console.log("idade:", guy.idade);
        console.log("é programador?", guy.javascriptdev);
    } else if (guy.javascriptdev == true) {

        console.log("javascriptdev");
    }

    //funções

    function parimpar(n) {
        if (n % 2 == 0) {
            return 'par';
        } else {
            return 'ímpar';
        }

    }
    let result = parimpar(3);
    console.log(result);

    function subtrai10(a) {
        return a - 10;
    }
    let resultSubtrai = subtrai10(8);
    console.log(resultSubtrai);

    