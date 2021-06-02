// Promisse.all Promisse.race Promisse.resolve Promisse.reject

function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if (typeof msg !== 'string') {
                reject('deu erro fdp');
                return;
            }

            resolve(msg.toUpperCase() + ' - Passei na promise');
        }, tempo);

    });
}

// const promises = [
//     'Primeiro Valor',
//     esperaAi('Promise 1', 3000),
//     esperaAi('Promise 2', 500),
//     esperaAi('Promise 3', 1000),
//     // esperaAi(1000, 1000),
//     'Outro Valor'
// ];

// Promise.all(promises)
//     .then(function (valor) {
//         console.log(valor);

//     }).catch(function (erro) {
//         console.log(erro);
//     });

// const promises = [
//     esperaAi(1000, rand(1, 5)),
//     esperaAi('Promise 1', rand(1, 5)),
//     esperaAi('Promise 2', rand(1, 5)),
//     esperaAi('Promise 3', rand(1, 5)),
// ];

// Promise.race(promises)
//     .then(function (valor) {
//         console.log(valor);

//     }).catch(function (erro) {
//         console.log(erro);
//     });

function baixarPagina() {
    const emCache = true;

    if (emCache) {
        return Promise.resolve('Página em cache');
    } else {
        esperaAi('Baixei a página', 3000);
    }

}
baixarPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(e => console.log('erro', e));