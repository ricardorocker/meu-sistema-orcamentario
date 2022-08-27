let despesasSet = document.getElementById("despesasSet");
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
let mes1 = [];

contasDespesas.push({
    "mes1": mes1 = {
        "despesas": despesas = {
            "descricao": `despesasSet${quantidadeDespesas()}`,
            "valor": valorInput = 0
        },
        "salario": salario = {
            "descricao": `salarioSet${quantidadeDespesas()}`,
            "valor": valorInput = 0
        },
        "outrasReceitas": outrasReceitas = {
            "descricao": `outrasReceitasSet${quantidadeDespesas()}`,
            "valor": valorInput = 0
        },
        "sobra": sobra = {
            "descricao": `sobraSet${quantidadeDespesas()}`,
            "valor": valorInput = 0
        },
    },

    "mes2": mes2 = {
        "despesas": despesas = {
            "descricao": `despesasOut${quantidadeDespesas()}`,
            "valor": valorInput = 0
        },
        "salario": salario = {
            "descricao": `salarioOut${quantidadeDespesas()}`,
            "valor": valorInput = 0
        },
        "outrasReceitas": outrasReceitas = {
            "descricao": `outrasReceitasOut${quantidadeDespesas()}`,
            "valor": valorInput = 0
        },
        "sobra": sobra = {
            "descricao": `sobraOut${quantidadeDespesas()}`,
            "valor": valorInput = 0
        },
    },

    "mes3": mes3 = {
        "despesas": despesas = {
            "descricao": `despesasNov${quantidadeDespesas()}`,
            "valor": valorInput = 0
        },
        "salario": salario = {
            "descricao": `salarioNov${quantidadeDespesas()}`,
            "valor": valorInput = 0
        },
        "outrasReceitas": outrasReceitas = {
            "descricao": `outrasReceitasNov${quantidadeDespesas()}`,
            "valor": valorInput = 0
        },
        "sobra": sobra = {
            "descricao": `sobraNov${quantidadeDespesas()}`,
            "valor": valorInput = 0
        },
    },

    "mes4": mes4 = {
        "despesas": despesas = {
            "descricao": `despesasDez${quantidadeDespesas()}`,
            "valor": valorInput = 0
        },
        "salario": salario = {
            "descricao": `salarioDez${quantidadeDespesas()}`,
            "valor": valorInput = 0
        },
        "outrasReceitas": outrasReceitas = {
            "descricao": `outrasReceitasDez${quantidadeDespesas()}`,
            "valor": valorInput = 0
        },
        "sobra": sobra = {
            "descricao": `sobraDez${quantidadeDespesas()}`,
            "valor": valorInput = 0
        },
    },
});

function quantidadeDespesas() {
    return contasDespesas.length + 1;
}

function onRemove(elemento) {
    ((elemento.parentElement).parentElement).remove();
}

function adicionarDespesa() {
    let descricaoDespesaAdicionar = document.getElementById("descricaoDespesaAdicionar");

    let tabelaFinancas = document.getElementById("tabelaFinancas");

    console.log("Contas Despesas", quantidadeDespesas());

    let row = document.createElement("tr");
    let nomeNovaDespesa = document.createElement("th");
    nomeNovaDespesa.innerHTML = `${descricaoDespesaAdicionar.value} <button scr="../meu-sistema-orcamentario/bin.png" class="border-0 bg-transparent ml-5" onclick="onRemove(this)"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>`;

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
    inputOut.setAttribute("class", "outubro");

    let tdNov = document.createElement("td");
    let inputNov = document.createElement("input");
    inputNov.setAttribute("type", "number");
    inputNov.setAttribute("id", `novRow${quantidadeDespesas()}`);
    inputNov.setAttribute("oninput", "updateValue(this)");
    inputNov.setAttribute("class", "novembro");

    let tdDez = document.createElement("td");
    let inputDez = document.createElement("input");
    inputDez.setAttribute("type", "number");
    inputDez.setAttribute("id", `dezRow${quantidadeDespesas()}`);
    inputDez.setAttribute("oninput", "updateValue(this)");
    inputDez.setAttribute("class", "dezembro");

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

    contasDespesas.push(
        {
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
    let monthClass = elemento.className;

    console.log("", elemento.className)

    somaDespesas = 0;

    for (i = 0; i < contasDespesas.length; i++) {

        if (contasDespesas[i] == contasDespesas[0] && elemento.className !== "footerTable") {
            // ERRO AQUI ENTROU QUANDO NAO ERA PRA TER ENTRADO
        } else {
            console.log("ELEMENT", contasDespesas);

            if (contasDespesas[i].linha[monthClass].descricao == elemento.id) {
                contasDespesas[i].linha[monthClass].valor = parseInt(elemento.value);
            }

            somaDespesas += contasDespesas[i].linha[monthClass].valor;
        }

        switch (monthClass) {
            case "setembro":
                despesasSet.innerHTML = somaDespesas;
                contasDespesas[0].mes1.despesas.valor = somaDespesas;
                break;
            case "outubro":
                despesasOut.innerHTML = somaDespesas;
                contasDespesas[0].mes2.despesas.valor = somaDespesas;
                break;
            case "novembro":
                despesasNov.innerHTML = somaDespesas;
                contasDespesas[0].mes3.despesas.valor = somaDespesas;
                break;
            case "dezembro":
                despesasDez.innerHTML = somaDespesas;
                contasDespesas[0].mes4.despesas.valor = somaDespesas;
                break;
            case "footerTable":
                if (elemento.id == "salarioSet") {
                    contasDespesas[0].mes1.salario.valor = parseInt(elemento.value);
                } else if (elemento.id == "outrasReceitasSet") {
                    contasDespesas[0].mes1.outrasReceitas.valor = parseInt(elemento.value);
                }
                break;
        }

        let sobra = (contasDespesas[0].mes1.salario.valor + contasDespesas[0].mes1.outrasReceitas.valor) - somaDespesas;
        sobraSet.innerHTML = sobra;

        contasDespesas[0].mes1.sobra.valor = sobra;
    }

    console.log("contasDespesas", contasDespesas);

    // localStorage.setItem("somaDespesas", somaDespesas);
    // localStorage.setItem("contasDespesasJSON", JSON.stringify(contasDespesas));

    // sobraSet.innerHTML = (parseInt(salario.value) + parseInt(outrasReceitas.value)) - somaDespesas;
    // localStorage.setItem("salario", salario.value);
    // localStorage.setItem("outrasReceitas", outrasReceitas.value);
}