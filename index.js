function imcSimples() {
    var nome = prompt("Informe seu nome:");
    var peso = prompt("Informe seu peso:");
    var altura = prompt("Informe sua altura:");

    var imc = peso / (altura * altura);

    alert(`Nome : ${nome} , IMC : ${imc} `);
}

function imc() {
    var nome = prompt("Informe seu nome:");
    var peso = prompt("Informe seu peso:");
    var altura = prompt("Informe sua altura:");

    var imc = peso / (altura * altura);

    if (imc < 17) {
        alert(`${nome}, vc está muito abaixo do peso ${imc}`);
    } else if (imc > 17 && imc < 18.49) {
        alert(`${nome}, vc está abaixo do peso ${imc}`);
    } else if (imc > 18.5 && imc < 24.99) {
        alert(`${nome}, vc está com o peso normal ${imc}`);
    } else if (imc > 25 && imc < 29.99) {
        alert(`${nome}, vc está acima do peso ${imc}`);
    } else if (imc > 30 && imc < 34.99) {
        alert(`${nome}, vc está com obesidade I ${imc}`);
    } else if (imc > 35 && imc < 39.99) {
        alert(`${nome}, vc está com obesidade II (severa) ${imc}`);
    } else if (imc < 40) {
        alert(`${nome}, vc está com obesidade III (mórbida) ${imc}`);
    }
}

function login() {
    var login = prompt("Login:");
    var senha = prompt("Senha:");

    if (
        (login == "aluno" && senha == 123) ||
        (login == "professor" && senha == 456)
    ) {
        alert(`${login} logado com sucesso!`);
    } else if (
        (login != "aluno" && senha == 123) ||
        (login != "professor" && senha == 456)
    ) {
        alert(`login invalido!`);
    } else if (
        (login == "aluno" && senha != 123) ||
        (login == "professor" && senha != 456)
    ) {
        alert(`senha invalido!`);
    } else if (
        (login != "aluno" && senha != 123) ||
        (login != "professor" && senha != 456)
    ) {
        alert(`login e senha invalido!`);
    }
}

function arrayy() {
    var n = prompt("Digite um numero:");
    var palavra = new Array(parseInt(n - 1));
    for (let i = 0; i <= parseInt(n - 1); i++) {
        palavra[i] = prompt(`Digite ${i + 1}° Palavra:`);
    }

    for (let j = parseInt(n - 1); j >= 0; j--) {
        alert(`${palavra[j]}`);
        console.log(`${palavra[j]}`);
    }
}

function idade(nome, idade) {
    if (idade >= 65) {
        alert(`${nome}, vc ja pode se aposentadar`);
    } else {
        var idadeFaltante = 65 - idade;
        alert(`${nome} faltam ${idadeFaltante} para você se aposentar!`);
    }
}

function aposentadoria() {
    var nome = prompt("Digite seu nome: ");
    var idade = prompt("Digite sua idade: ");
    idade(nome, idade);
}

function gorjeta(valor) {
    let gorjeta = new Array();

    for (let i = 0; i <= valor.length; i++) {
        if (valor[i] < 50) {
            gorjeta[i] = (20 / 100) * parseInt(valor[i]);
        } else if (valor[i] > 50 && valor[i] < 200) {
            gorjeta[i] = (15 / 100) * parseInt(valor[i]);
        } else if (valor[i] > 200) {
            gorjeta[i] = (10 / 100) * parseInt(valor[i]);
        }
    }

    return gorjeta;
}
function total(restaurante, valor, gorjeta) {
    for (let i = 0; i <= 2; i++) {
        console.log(
            `Restaurante ${restaurante[i]} [Valor:R$${valor[i]} | Gorjeta:R$${gorjeta[i]
            } | Total: R$${parseInt(gorjeta[i]) + parseInt(valor[i])}]`
        );
    }
}

function calculadoraGorjeta() {
    let restaurante = new Array();
    let valor = new Array();

    for (let i = 0; i <= 2; i++) {
        restaurante[i] = prompt("Digite o nome do restaurante:");
        valor[i] = prompt("Digite o valor da conta:");
    }
    valorGorjeta = gorjeta(valor);
    total(restaurante, valor, valorGorjeta);
}
