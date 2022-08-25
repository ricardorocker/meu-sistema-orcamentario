let totalDespesasSet = document.getElementById("totalDespesasSet");
let sobraSet = document.getElementById("sobraSet");
let salario = document.getElementById("salario");
let outrasReceitas = document.getElementById("outrasReceitas");

let somaDespesas = 0;
// let despesas = 15;

let contasDespesas = [];
let linha = [];
let setembro = [];
let outubro = [];
let novembro = [];
let dezembro = [];
let total = [];

// for (i = 0; i < despesas; i++) {
//     let valorInput = document.getElementById(`setRow${i}`)
//     contasDespesas[i] = {
//         "id": i,
//         "linha": linha[i] = {
//             "nomeDespesa": "Aluguel",
//             "setembro": setembro[i] = {
//                 "descricao": `setRow${i}`,
//                 "valor": valorInput = 0
//             },
//             "outubro": outubro[i] = {
//                 "descricao": `outRow${i}`,
//                 "valor": valorInput = 0
//             },
//             "novembro": novembro[i] = {
//                 "descricao": `novRow${i}`,
//                 "valor": valorInput = 0
//             },
//             "dezembro": dezembro[i] = {
//                 "descricao": `dezRow${i}`,
//                 "valor": valorInput = 0
//             },
//             "total": total[i] = {
//                 "descricao": `totalRow${i}`,
//                 "valor": valorInput = 0
//             },
//         },
//     }
// }

function quantidadeDespesas() {
    return contasDespesas.length + 1;
}

function adicionarDespesa() {
    let descricaoDespesaAdicionar = document.getElementById("descricaoDespesaAdicionar");

    let tabelaFinancas = document.getElementById("tabelaFinancas");

    console.log("Contas Despesas", quantidadeDespesas());

    let row = document.createElement("tr");
    let nomeNovaDespesa = document.createElement("th");
    nomeNovaDespesa.innerHTML = descricaoDespesaAdicionar.value;

    let tdSet = document.createElement("td");
    let inputSet = document.createElement("input");
    inputSet.setAttribute("type", "number");
    inputSet.setAttribute("id", `setRow${quantidadeDespesas()}`);
    inputSet.setAttribute("oninput", "updateValue(this)");
    inputSet.setAttribute("class", "setembro");

    let tdOut = document.createElement("td");
    let inputOut = document.createElement("input");
    inputOut.setAttribute("type", "number");
    inputOut.setAttribute("id", `outRow${quantidadeDespesas()}`);
    inputOut.setAttribute("oninput", "updateValue(this)");
    inputSet.setAttribute("class", "outubro");

    let tdNov = document.createElement("td");
    let inputNov = document.createElement("input");
    inputNov.setAttribute("type", "number");
    inputNov.setAttribute("id", `novRow${quantidadeDespesas()}`);
    inputNov.setAttribute("oninput", "updateValue(this)");
    inputSet.setAttribute("class", "novembro");

    let tdDez = document.createElement("td");
    let inputDez = document.createElement("input");
    inputDez.setAttribute("type", "number");
    inputDez.setAttribute("id", `dezRow${quantidadeDespesas()}`);
    inputDez.setAttribute("oninput", "updateValue(this)");
    inputSet.setAttribute("class", "dezembro");

    let totalRow = document.createElement("td");

    row.appendChild(nomeNovaDespesa);
    row.appendChild(tdSet);
    tdSet.appendChild(inputSet);
    row.appendChild(tdOut);
    tdOut.appendChild(inputOut);
    row.appendChild(tdNov);
    tdNov.appendChild(inputNov);
    row.appendChild(tdDez);
    tdDez.appendChild(inputDez);
    row.appendChild(totalRow);
    tabelaFinancas.appendChild(row);

    contasDespesas.push({
        "id": quantidadeDespesas(),
        "linha": linha[quantidadeDespesas()] = {
            "nomeDespesa": descricaoDespesaAdicionar.value,
            "setembro": setembro[quantidadeDespesas()] = {
                "descricao": `setRow${quantidadeDespesas()}`,
                "valor": valorInput = 0
            },
            "outubro": outubro[quantidadeDespesas()] = {
                "descricao": `outRow${quantidadeDespesas()}`,
                "valor": valorInput = 0
            },
            "novembro": novembro[quantidadeDespesas()] = {
                "descricao": `novRow${quantidadeDespesas()}`,
                "valor": valorInput = 0
            },
            "dezembro": dezembro[quantidadeDespesas()] = {
                "descricao": `dezRow${quantidadeDespesas()}`,
                "valor": valorInput = 0
            },
            "total": total[quantidadeDespesas()] = {
                "descricao": `totalRow${quantidadeDespesas()}`,
                "valor": valorInput = 0
            },
        }
    });
    console.log("contasDespesas", contasDespesas);
}

onload = function () {
    // contasDespesas = [];

    // console.log("contasDespesas", contasDespesas);

    // let contasDespesasJSON = JSON.parse(localStorage.getItem("contasDespesasJSON"))

    // for (i = 1; i < despesas; i++) {
    //     contasDespesas[i].linha.setembro.valor = contasDespesasJSON[i].linha.setembro.valor;

    //     let elemento = document.getElementById(`setRow${i}`);
    //     if (contasDespesasJSON[i].linha.setembro.valor == 0) {
    //     } else {
    //         elemento.value = contasDespesasJSON[i].linha.setembro.valor;
    //     }
    // }

    // let totalDespesasSetPego = localStorage.getItem('somaDespesas');
    // totalDespesasSet.innerHTML = totalDespesasSetPego;

    // let salarioPego = localStorage.getItem('salario');
    // salario.value = salarioPego;

    // let outrasReceitasPego = localStorage.getItem('outrasReceitas');
    // outrasReceitas.value = outrasReceitasPego;
    // sobraSet.innerHTML = (parseInt(salarioPego) + parseInt(outrasReceitasPego)) - totalDespesasSetPego;

}

function updateValue(elemento) {
    console.log("elemento ID", elemento)

    
    
    contasDespesas.forEach(element => {        
        
        let monthClass = elemento.className;
        
        if (element.linha[monthClass].descricao == elemento.id) {
            element.linha[monthClass].valor.push(elemento.value);
        }
        
        console.log("forEach de element", element);
        console.log("forEach de element.valor", elemento.value);

    });

    
    console.log("contasDespesas", contasDespesas)


    // somaDespesas = 0;

    // for (i = 0; i < contasDespesas.length; i++) {
    //     let monthClass = elemento.className;

    //     if (contasDespesas[i].linha[monthClass].descricao == elemento.id) {
    //         contasDespesas[i].linha[monthClass].valor = parseInt(elemento.value);
    //     }

    //     somaDespesas += contasDespesas[i].linha[monthClass].valor;
    // }

    // totalDespesasSet.innerHTML = somaDespesas;
    // localStorage.setItem("somaDespesas", somaDespesas);
    // localStorage.setItem("contasDespesasJSON", JSON.stringify(contasDespesas));

    // sobraSet.innerHTML = (parseInt(salario.value) + parseInt(outrasReceitas.value)) - somaDespesas;
    // localStorage.setItem("salario", salario.value);
    // localStorage.setItem("outrasReceitas", outrasReceitas.value);
}