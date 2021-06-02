function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg != 'string') reject (new Error('ERRO'));
        
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}
esperaAi('Load', rand(1, 3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Load', rand(1, 3));
    }).then(resposta => {
        return resposta + 'ing';
    }).then(resposta => {
        console.log(resposta);
        return esperaAi('Loading..', rand(1, 3));
    }).then(resposta => {
        console.log(resposta);
    })
    .catch(e => console.log('erro', e));

console.log('Start:')
