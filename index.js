let totalDespesasSet = document.getElementById("totalDespesasSet");
let sobraSet = document.getElementById("sobraSet");
let salario = document.getElementById("salario");
let outrasReceitas = document.getElementById("outrasReceitas");

var despesas = 14;

const contasDespesas = [];

for(i = 1; i < despesas; i++){
    
    let valorInput = document.getElementById(`setRow${i}`)
    
    contasDespesas.push(parseInt(valorInput.value));    
    
    console.log("For", valorInput);

}

console.log("fora do For, contasDespesas: ", contasDespesas);



let setRow1 = document.getElementById("setRow1");
let setRow2 = document.getElementById("setRow2");
let setRow3 = document.getElementById("setRow3");
let setRow4 = document.getElementById("setRow4");
let setRow5 = document.getElementById("setRow5");
let setRow6 = document.getElementById("setRow6");
let setRow7 = document.getElementById("setRow7");
let setRow8 = document.getElementById("setRow8");
let setRow9 = document.getElementById("setRow9");
let setRow10 = document.getElementById("setRow10");
let setRow11 = document.getElementById("setRow11");
let setRow12 = document.getElementById("setRow12");
let setRow13 = document.getElementById("setRow13");
let setRow14 = document.getElementById("setRow14");

onload = function () {
    console.log("Entrou no onLoad");

    for(i = 0; i < 14; i++){
        let valorPego = localStorage.getItem(`setRow${i}`);
    
        let salarioPego = localStorage.getItem('salario');
        let outrasReceitasPego = localStorage.getItem('outrasReceitas');
    
        let totalDespesasSetPego = localStorage.getItem('totalDespesasSet');
    
        totalDespesasSet.innerHTML = totalDespesasSetPego;
    
        salario.value = salarioPego;
        outrasReceitas.value = outrasReceitasPego;
    
        sobraSet.innerHTML = (parseInt(salarioPego) + parseInt(outrasReceitasPego)) - totalDespesasSetPego;
    


        setRow1.value = valorPego;
    }

    // let valorPego1 = localStorage.getItem('setRow1');
    // let valorPego2 = localStorage.getItem('setRow2');
    // let valorPego3 = localStorage.getItem('setRow3');
    // let valorPego4 = localStorage.getItem('setRow4');
    // let valorPego5 = localStorage.getItem('setRow5');
    // let valorPego6 = localStorage.getItem('setRow6');
    // let valorPego7 = localStorage.getItem('setRow7');
    // let valorPego8 = localStorage.getItem('setRow8');
    // let valorPego9 = localStorage.getItem('setRow9');
    // let valorPego10 = localStorage.getItem('setRow10');
    // let valorPego11 = localStorage.getItem('setRow11');
    // let valorPego12 = localStorage.getItem('setRow12');
    // let valorPego13 = localStorage.getItem('setRow13');
    // let valorPego14 = localStorage.getItem('setRow14');

    // let salarioPego = localStorage.getItem('salario');
    // let outrasReceitasPego = localStorage.getItem('outrasReceitas');

    // let totalDespesasSetPego = localStorage.getItem('totalDespesasSet');

    // totalDespesasSet.innerHTML = totalDespesasSetPego;

    // salario.value = salarioPego;
    // outrasReceitas.value = outrasReceitasPego;

    // sobraSet.innerHTML = (parseInt(salarioPego) + parseInt(outrasReceitasPego)) - totalDespesasSetPego;

    // setRow1.value = valorPego1;
    // setRow2.value = valorPego2;
    // setRow3.value = valorPego3;
    // setRow4.value = valorPego4;
    // setRow5.value = valorPego5;
    // setRow6.value = valorPego6;
    // setRow7.value = valorPego7;
    // setRow8.value = valorPego8;
    // setRow9.value = valorPego9;
    // setRow10.value = valorPego10;
    // setRow11.value = valorPego11;
    // setRow12.value = valorPego12;
    // setRow13.value = valorPego13;
    // setRow14.value = valorPego14;
}

function updateValue() {
    totalDespesasSet.innerHTML =
        parseInt(setRow1.value) +
        parseInt(setRow2.value) +
        parseInt(setRow3.value) +
        parseInt(setRow4.value) +
        parseInt(setRow5.value) +
        parseInt(setRow6.value) +
        parseInt(setRow7.value) +
        parseInt(setRow8.value) +
        parseInt(setRow9.value) +
        parseInt(setRow10.value) +
        parseInt(setRow11.value) +
        parseInt(setRow12.value) +
        parseInt(setRow13.value) +
        parseInt(setRow14.value);

    localStorage.setItem("setRow1", setRow1.value);
    localStorage.setItem("setRow2", setRow2.value);
    localStorage.setItem("setRow3", setRow3.value);
    localStorage.setItem("setRow4", setRow4.value);
    localStorage.setItem("setRow5", setRow5.value);
    localStorage.setItem("setRow6", setRow6.value);
    localStorage.setItem("setRow7", setRow7.value);
    localStorage.setItem("setRow8", setRow8.value);
    localStorage.setItem("setRow9", setRow9.value);
    localStorage.setItem("setRow10", setRow10.value);
    localStorage.setItem("setRow11", setRow11.value);
    localStorage.setItem("setRow12", setRow12.value);
    localStorage.setItem("setRow13", setRow13.value);
    localStorage.setItem("setRow14", setRow14.value);

    localStorage.setItem("totalDespesasSet", parseInt(totalDespesasSet.textContent));

    sobraSet.innerHTML = (parseInt(salario.value) + parseInt(outrasReceitas.value)) - parseInt(totalDespesasSet.textContent);

    localStorage.setItem("salario", salario.value);
    localStorage.setItem("outrasReceitas", outrasReceitas.value);
}

