let leitor = require('readline-sync')

let enquanto = true

while(enquanto){
    let opt = leitor.questionInt(`
        Digite o numero da opcao desejada:
        1 - Positivo ou Negativo
        2 - Senha Correta
        3 - Calculadora Básica
        4 - Maior dos Tres
        0 - Sair
        Digite: `)

    switch(opt){
        case 1:
            let valorPositivoOuNegativo = leitor.questionInt("Insira um valor numérico: ")
            positivoOuNegativo(number)
            break
        case 2:
            let senha = leitor.question("Insira a senha correta: ")
            senhaCorreta(senha)
            break
        case 3:
            let valorUm = leitor.questionInt('Insira o primeiro valor: ')
            let valorDois = leitor.questionInt('Insira o segundo valor: ')
            calculadora(valorUm, valorDois)
            break
        case 4:
            let v1 = leitor.questionFloat("Insira o primeiro valor: ")
            let v2 = leitor.questionFloat("Insira o segundo valor: ")
            let v3 = leitor.questionFloat("Insira o terceiro valor: ")
            maiorDosTres(v1, v2, v3)
            break
        case 0:
            console.log("Saindo...")
            process.exit(0)
    }

}

//função da atividade 1
function positivoOuNegativo(number){
    if(number > 0){
        console.log(`O valor ${number} é positivo`)
    } else if (number < 0) {
        console.log(`O valor ${number} é negativo`)
    } else if (number == 0) {
        console.log(`O valor ${number} é zero`)
    } else {
        console.log("Valor inexistente")
    }

    return number
}

//função da atividade 2
function senhaCorreta(senha){
    let senhaCorreta = "1234"

    if (senha == senhaCorreta){
        console.log("Login bem-sucedido")
    } else {
        console.log("Senha incorreta")
    }
}

//função da atividade 3
function calculadora(valorUm, valorDois){
    let operacao = leitor.question("Digite o simbolo da operação desejada: +, -, *, /: ")

    if(operacao == "+"){
        console.log(`A soma é ${valorUm + valorDois}`);
    } else if(operacao == "-"){
        console.log(`A subtração é ${valorUm - valorDois}`)
    } else if(operacao == "*"){
        console.log(`A multiplicação é ${valorUm * valorDois}`)
    } else if(operacao == "/"){
        console.log(`A divisão é ${valorUm / valorDois}`)
    } else {
        console.log(`Operação inexistente, tente novamente`)
    }
}

//função da atividade 4
function maiorDosTres(v1, v2, v3){
    if(v1 > v2 && v1 > v3){
        console.log(`O ${v1} é o maior número`)
    } else if(v2 > v1 && v2 > v3){
        console.log(`O ${v2} é o maior número`)
    } else if(v3 > v1 && v3 > v2){
        console.log(`O ${v3} é o maior número`)
    } else {
        console.log(`Os valores são iguais ou incorretos`)
    }
}