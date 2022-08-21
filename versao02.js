let totalDespesasSet = document.getElementById("totalDespesasSet");
let sobraSet = document.getElementById("sobraSet");
let salario = document.getElementById("salario");
let outrasReceitas = document.getElementById("outrasReceitas");

let somaDespesas = 0;
const despesas = 15;

const contasDespesas = [];
const linha = [];
const setembro = [];
const outubro = [];
const novembro = [];
const dezembro = [];
const total = [];


for (i = 0; i < despesas; i++) {
    let valorInput = document.getElementById(`setRow${i}`)
    contasDespesas[i] = {
        "id": i,
        "linha": linha[i] = {
            "nomeDespesa": "Aluguel",
            "setembro": setembro[i] = {
                "descricao": `setRow${i}`,
                "valor": valorInput = 0
            },
            "outubro": outubro[i] = {
                "descricao": `outRow${i}`,
                "valor": valorInput = 0
            },
            "novembro": novembro[i] = {
                "descricao": `novRow${i}`,
                "valor": valorInput = 0
            },
            "dezembro": dezembro[i] = {
                "descricao": `dezRow${i}`,
                "valor": valorInput = 0
            },            
            "total": total[i] = {
                "descricao": `totalRow${i}`,
                "valor": valorInput = 0
            },
        },
    }
}

onload = function () {
    // localStorage.clear();

    console.log(contasDespesas)

    let contasDespesasJSON = JSON.parse(localStorage.getItem("contasDespesasJSON"))

    for (i = 1; i < despesas; i++) {
        contasDespesas[i].linha.setembro.valor = contasDespesasJSON[i].linha.setembro.valor;

        let elemento = document.getElementById(`setRow${i}`);
        if (contasDespesasJSON[i].linha.setembro.valor == 0) {
        } else {
            elemento.value = contasDespesasJSON[i].linha.setembro.valor;
        }
    }

    let totalDespesasSetPego = localStorage.getItem('somaDespesas');
    totalDespesasSet.innerHTML = totalDespesasSetPego;

    let salarioPego = localStorage.getItem('salario');
    salario.value = salarioPego;

    let outrasReceitasPego = localStorage.getItem('outrasReceitas');
    outrasReceitas.value = outrasReceitasPego;
    sobraSet.innerHTML = (parseInt(salarioPego) + parseInt(outrasReceitasPego)) - totalDespesasSetPego;

}

function updateValue(elemento) {
    somaDespesas = 0;

    for (i = 0; i < contasDespesas.length; i++) {
        let monthClass = elemento.className;

        if (contasDespesas[i].linha[monthClass].descricao == elemento.id) {
            contasDespesas[i].linha[monthClass].valor = parseInt(elemento.value);
        }

        somaDespesas += contasDespesas[i].linha[monthClass].valor;
    }

    totalDespesasSet.innerHTML = somaDespesas;
    localStorage.setItem("somaDespesas", somaDespesas);
    localStorage.setItem("contasDespesasJSON", JSON.stringify(contasDespesas));

    sobraSet.innerHTML = (parseInt(salario.value) + parseInt(outrasReceitas.value)) - somaDespesas;
    localStorage.setItem("salario", salario.value);
    localStorage.setItem("outrasReceitas", outrasReceitas.value);
}