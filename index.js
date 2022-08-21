let totalDespesasSet = document.getElementById("totalDespesasSet");
let sobraSet = document.getElementById("sobraSet");
let salario = document.getElementById("salario");
let outrasReceitas = document.getElementById("outrasReceitas");

const despesas = 15;

const contasDespesas = [];

const contasDespesasMelhor = [];
const linha = [];
const setembro = [];
const outubro = [];
const novembro = [];
const dezembro = [];
const total = [];

let somaDespesas = 0;

for (i = 0; i < despesas; i++) {
    let valorInput = document.getElementById(`setRow${i}`)
    contasDespesas[i] = {
        "id": i, "descricao": `setRow${i}`, "valor": valorInput = 0
    }
}

for (i = 0; i < despesas; i++) {
    let valorInput = document.getElementById(`setRow${i}`)
    contasDespesasMelhor[i] = {
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
                "descricao": `dezRow${i}`,
                "valor": valorInput = 0
            },
        },

    }
}

onload = function () {
    // localStorage.clear();


    console.log("Entrou no onLoad");

    let contasDespesasJSON = JSON.parse(localStorage.getItem("contasDespesasJSON"))

    console.log("contas Despesas MELHOR", contasDespesasMelhor);
    console.log("contas Despesas", contasDespesas);
    console.log('contasDespesasJSON', contasDespesasJSON);

    for (i = 1; i < despesas; i++) {
        contasDespesas[i].valor = contasDespesasJSON[i].valor;

        let elemento = document.getElementById(`setRow${i}`);
        if (contasDespesasJSON[i].valor == 0) {
        } else {
            elemento.value = contasDespesasJSON[i].valor;
        }
    }

    let totalDespesasSetPego = localStorage.getItem('somaDespesas');
    totalDespesasSet.innerHTML = totalDespesasSetPego;

    // let salarioPego = localStorage.getItem('salario');
    // salario.value = salarioPego;

    // let outrasReceitasPego = localStorage.getItem('outrasReceitas');
    // outrasReceitas.value = outrasReceitasPego;

    // sobraSet.innerHTML = (parseInt(salarioPego) + parseInt(outrasReceitasPego)) - totalDespesasSetPego;
}

function updateValue(elemento) {

    console.log("Soma Despesas", somaDespesas)

    somaDespesas = 0;

    for (i = 0; i < contasDespesasMelhor.length; i++) {

        if (contasDespesasMelhor[i].coluna.descricao == elemento.id) {
            contasDespesasMelhor[i].coluna.valor = parseInt(elemento.value);
        }

        somaDespesas += contasDespesasMelhor[i].valor;
    }

    totalDespesasSet.innerHTML = somaDespesas;
    localStorage.setItem("somaDespesas", somaDespesas);
    localStorage.setItem("contasDespesasJSON", JSON.stringify(contasDespesasMelhor));

    // for (i = 0; i < contasDespesas.length; i++) {

    //     if (contasDespesas[i].descricao == elemento.id) {
    //         contasDespesas[i].valor = parseInt(elemento.value);
    //     }

    //     somaDespesas += contasDespesas[i].valor;
    // }

    // totalDespesasSet.innerHTML = somaDespesas;
    // localStorage.setItem("somaDespesas", somaDespesas);
    // localStorage.setItem("contasDespesasJSON", JSON.stringify(contasDespesas));

    // sobraSet.innerHTML = (parseInt(salario.value) + parseInt(outrasReceitas.value)) - parseInt(totalDespesasSet.textContent);

    // localStorage.setItem("salario", salario.value);
    // localStorage.setItem("outrasReceitas", outrasReceitas.value);
}

