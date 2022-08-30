let despesasSet = document.getElementById("despesasSet");
let despesasOut = document.getElementById("despesasOut");
let despesasNov = document.getElementById("despesasNov");
let despesasDez = document.getElementById("despesasDez");
let sobraMes1 = document.getElementById("sobraMes1");
let sobraMes2 = document.getElementById("sobraMes2");
let sobraMes3 = document.getElementById("sobraMes3");
let sobraMes4 = document.getElementById("sobraMes4");
let salario = document.getElementById("salario");
let salarioMes1 = document.querySelector(".setembro#salario");
let salarioMes2 = document.querySelector(".outubro#salario");
let salarioMes3 = document.querySelector(".novembro#salario");
let salarioMes4 = document.querySelector(".dezembro#salario");
let outrasReceitas = document.getElementById("outrasReceitas");
let outrasReceitasMes1 = document.querySelector(".setembro#outrasReceitas");
let outrasReceitasMes2 = document.querySelector(".outubro#outrasReceitas");
let outrasReceitasMes3 = document.querySelector(".novembro#outrasReceitas");
let outrasReceitasMes4 = document.querySelector(".dezembro#outrasReceitas");

let somaDespesas = 0;
let sobra = 0;

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

console.log("contasDespesas fora de escopo: ", contasDespesas);

function quantidadeDespesas() {
    if (contasDespesas) {
        return contasDespesas.length;
    }
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
    nomeNovaDespesa.innerHTML = `${descricaoDespesaAdicionar.value.toUpperCase()}`;

    // nomeNovaDespesa.innerHTML = `${descricaoDespesaAdicionar.value.toUpperCase()} 
    // <button scr="../meu-sistema-orcamentario/bin.png" class="border-0 bg-transparent ml-5" onclick="onRemove(this)"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
    // <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
    // <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
    // `;

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

    row.appendChild(nomeNovaDespesa);
    row.appendChild(tdSet);
    tdSet.appendChild(inputSet);
    row.appendChild(tdOut);
    tdOut.appendChild(inputOut);
    row.appendChild(tdNov);
    tdNov.appendChild(inputNov);
    row.appendChild(tdDez);
    tdDez.appendChild(inputDez);
    tabelaFinancas.appendChild(row);

    console.log("contasDespesas dentro de adicionarDespesas: ", contasDespesas);

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


    localStorage.setItem("contasDespesasJSON", JSON.stringify(contasDespesas));
    descricaoDespesaAdicionar.value = "";
    console.log("contasDespesas", contasDespesas);
}

onload = function () {
    // for (var member in contasDespesas) delete contasDespesas[member];    
    // for (var member in contasDespesasJSON) delete contasDespesasJSON[member];

    let contasDespesasJSON = JSON.parse(localStorage.getItem("contasDespesasJSON"));

    if (contasDespesasJSON) {
        contasDespesas = contasDespesasJSON;
    }

    console.log("salarioMes1", salarioMes1);
    console.log("contasDespesas DEPOIS", contasDespesas);


    if (contasDespesas.length > 1) {
        contasDespesas.forEach((element, i) => {
            console.log(`PASSOU ${i + 1}ª vez`, element);

            if (i == 0) {
                console.log("despesas", element.mes1.despesas.valor)
                despesasSet.innerHTML = element.mes1.despesas.valor;
                despesasOut.innerHTML = element.mes2.despesas.valor;
                despesasNov.innerHTML = element.mes3.despesas.valor;
                despesasDez.innerHTML = element.mes4.despesas.valor;

                sobraMes1.innerHTML = element.mes1.sobra.valor;
                sobraMes2.innerHTML = element.mes2.sobra.valor;
                sobraMes3.innerHTML = element.mes3.sobra.valor;
                sobraMes4.innerHTML = element.mes4.sobra.valor;

                salarioMes1.value = element.mes1.salario.valor;
                salarioMes2.value = element.mes2.salario.valor;
                salarioMes3.value = element.mes3.salario.valor;
                salarioMes4.value = element.mes4.salario.valor;

                outrasReceitasMes1.value = element.mes1.outrasReceitas.valor;
                outrasReceitasMes2.value = element.mes2.outrasReceitas.valor;
                outrasReceitasMes3.value = element.mes3.outrasReceitas.valor;
                outrasReceitasMes4.value = element.mes4.outrasReceitas.valor;
            } else {

                let tabelaFinancas = document.getElementById("tabelaFinancas");

                console.log("Contas Despesas", quantidadeDespesas());

                let row = document.createElement("tr");
                let nomeNovaDespesa = document.createElement("th");
                nomeNovaDespesa.innerHTML = `${element.linha.nomeDespesa.toUpperCase()}`;

                // nomeNovaDespesa.innerHTML = `${element.linha.nomeDespesa.toUpperCase()} 
                // <button scr="../meu-sistema-orcamentario/bin.png" class="border-0 bg-transparent ml-5" onclick="onRemove(this)"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                // <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                // <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                // `;

                let tdSet = document.createElement("td");
                let inputSet = document.createElement("input");
                inputSet.setAttribute("type", "number");
                inputSet.setAttribute("id", `setRow${i}`);
                inputSet.setAttribute("oninput", "updateValue(this)");
                inputSet.setAttribute("class", "setembro");

                let tdOut = document.createElement("td");
                let inputOut = document.createElement("input");
                inputOut.setAttribute("type", "number");
                inputOut.setAttribute("id", `outRow${i}`);
                inputOut.setAttribute("oninput", "updateValue(this)");
                inputOut.setAttribute("class", "outubro");

                let tdNov = document.createElement("td");
                let inputNov = document.createElement("input");
                inputNov.setAttribute("type", "number");
                inputNov.setAttribute("id", `novRow${i}`);
                inputNov.setAttribute("oninput", "updateValue(this)");
                inputNov.setAttribute("class", "novembro");

                let tdDez = document.createElement("td");
                let inputDez = document.createElement("input");
                inputDez.setAttribute("type", "number");
                inputDez.setAttribute("id", `dezRow${i}`);
                inputDez.setAttribute("oninput", "updateValue(this)");
                inputDez.setAttribute("class", "dezembro");

                row.appendChild(nomeNovaDespesa);
                row.appendChild(tdSet);
                tdSet.appendChild(inputSet);
                row.appendChild(tdOut);
                tdOut.appendChild(inputOut);
                row.appendChild(tdNov);
                tdNov.appendChild(inputNov);
                row.appendChild(tdDez);
                tdDez.appendChild(inputDez);
                tabelaFinancas.appendChild(row);

                let inputMes1 = document.querySelector(`.setembro#setRow${i}`);
                let inputMes2 = document.querySelector(`.outubro#outRow${i}`);
                let inputMes3 = document.querySelector(`.novembro#novRow${i}`);
                let inputMes4 = document.querySelector(`.dezembro#dezRow${i}`);

                inputMes1.value = element.linha.setembro.valor;
                inputMes2.value = element.linha.outubro.valor;
                inputMes3.value = element.linha.novembro.valor;
                inputMes4.value = element.linha.dezembro.valor;

            }
        });
    }

}

function updateValue(elemento) {
    let monthClass = elemento.className;

    somaDespesas = 0;

    for (i = 0; i < contasDespesas.length; i++) {
        console.log("ELEMENT", contasDespesas);

        if (contasDespesas[i] !== contasDespesas[0] && ((elemento.parentElement).parentElement).parentElement.id !== "tabelaFooter") {
            if (contasDespesas[i].linha[monthClass].descricao == elemento.id) {
                contasDespesas[i].linha[monthClass].valor = parseInt(elemento.value);
            }

            somaDespesas += contasDespesas[i].linha[monthClass].valor;
        }

        switch (monthClass) {
            case "setembro":
                if (elemento.id == "salario") {
                    contasDespesas[0].mes1.salario.valor = parseInt(elemento.value);
                } else if (elemento.id == "outrasReceitas") {
                    contasDespesas[0].mes1.outrasReceitas.valor = parseInt(elemento.value);
                }
                else {
                    despesasSet.innerHTML = somaDespesas;
                    contasDespesas[0].mes1.despesas.valor = somaDespesas;
                }
                sobra = (contasDespesas[0].mes1.salario.valor + contasDespesas[0].mes1.outrasReceitas.valor) - somaDespesas;
                sobraMes1.innerHTML = sobra;
                contasDespesas[0].mes1.sobra.valor = sobra;
                break;
            case "outubro":
                if (elemento.id == "salario") {
                    contasDespesas[0].mes2.salario.valor = parseInt(elemento.value);
                } else if (elemento.id == "outrasReceitas") {
                    contasDespesas[0].mes2.outrasReceitas.valor = parseInt(elemento.value);
                }
                else {
                    despesasOut.innerHTML = somaDespesas;
                    contasDespesas[0].mes2.despesas.valor = somaDespesas;
                }
                sobra = (contasDespesas[0].mes2.salario.valor + contasDespesas[0].mes2.outrasReceitas.valor) - somaDespesas;
                sobraMes2.innerHTML = sobra;
                contasDespesas[0].mes2.sobra.valor = sobra;
                break;
            case "novembro":
                if (elemento.id == "salario") {
                    contasDespesas[0].mes3.salario.valor = parseInt(elemento.value);
                } else if (elemento.id == "outrasReceitas") {
                    contasDespesas[0].mes3.outrasReceitas.valor = parseInt(elemento.value);
                }
                else {
                    despesasNov.innerHTML = somaDespesas;
                    contasDespesas[0].mes3.despesas.valor = somaDespesas;
                }
                sobra = (contasDespesas[0].mes3.salario.valor + contasDespesas[0].mes3.outrasReceitas.valor) - somaDespesas;
                sobraMes3.innerHTML = sobra;
                contasDespesas[0].mes3.sobra.valor = sobra;
                break;
            case "dezembro":
                if (elemento.id == "salario") {
                    contasDespesas[0].mes4.salario.valor = parseInt(elemento.value);
                } else if (elemento.id == "outrasReceitas") {
                    contasDespesas[0].mes4.outrasReceitas.valor = parseInt(elemento.value);
                }
                else {
                    despesasDez.innerHTML = somaDespesas;
                    contasDespesas[0].mes4.despesas.valor = somaDespesas;
                }
                sobra = (contasDespesas[0].mes4.salario.valor + contasDespesas[0].mes4.outrasReceitas.valor) - somaDespesas;
                sobraMes4.innerHTML = sobra;
                contasDespesas[0].mes4.sobra.valor = sobra;
                break;
        }

    }

    localStorage.setItem("contasDespesasJSON", JSON.stringify(contasDespesas));
}

function ExportToExcel(type, fn, dl) {
    var elt = document.getElementById('finacasPessoais');
    var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
    return dl ?
      XLSX.write(wb, { bookType: type, bookSST: true, type: 'base64' }):
      XLSX.writeFile(wb, fn || ('Finanças Pessoais by Ricardo Rocker.' + (type || 'xlsx')));
 }