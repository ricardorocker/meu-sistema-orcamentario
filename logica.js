let totalSet = document.getElementById("totalSet");

onload = function(){
    let valorPego1 = localStorage.getItem('setRow1');
    let input1 = document.getElementById('setRow1');
    let valorPego2 = localStorage.getItem('setRow2');
    let input2 = document.getElementById('setRow2');
    let valorPego3 = localStorage.getItem('setRow3');
    let input3 = document.getElementById('setRow3');
    let valorPego4 = localStorage.getItem('setRow4');
    let input4 = document.getElementById('setRow4');
    let valorPego5 = localStorage.getItem('setRow5');
    let input5 = document.getElementById('setRow5');
    let valorPego6 = localStorage.getItem('setRow6');
    let input6 = document.getElementById('setRow6');
    let valorPego7 = localStorage.getItem('setRow7');
    let input7 = document.getElementById('setRow7');
    let valorPego8 = localStorage.getItem('setRow8');
    let input8 = document.getElementById('setRow8');
    let valorPego9 = localStorage.getItem('setRow9');
    let input9 = document.getElementById('setRow9');
    let valorPego10 = localStorage.getItem('setRow10');
    let input10 = document.getElementById('setRow10');
    let valorPego11 = localStorage.getItem('setRow11');
    let input11 = document.getElementById('setRow11');
    let valorPego12 = localStorage.getItem('setRow12');
    let input12 = document.getElementById('setRow12');
    let valorPego13 = localStorage.getItem('setRow13');
    let input13 = document.getElementById('setRow13');
    let valorPego14 = localStorage.getItem('setRow14');
    let input14 = document.getElementById('setRow14');
    

    totalSet.innerHTML = 
    parseInt(valorPego1) +
    parseInt(valorPego2) +
    parseInt(valorPego3) +
    parseInt(valorPego4) +
    parseInt(valorPego5) +
    parseInt(valorPego6) +
    parseInt(valorPego7) +
    parseInt(valorPego8) +
    parseInt(valorPego9) +
    parseInt(valorPego10) +
    parseInt(valorPego11) +
    parseInt(valorPego12) +
    parseInt(valorPego13) +
    parseInt(valorPego14)
    ;

    parseInt(input1.value) = valorPego;
    parseInt(input2.value) = valorPego;
    parseInt(input3.value) = valorPego;
    parseInt(input4.value) = valorPego;
    parseInt(input5.value) = valorPego;
    parseInt(input6.value) = valorPego;
    parseInt(input7.value) = valorPego;
    parseInt(input8.value) = valorPego;
    parseInt(input9.value) = valorPego;
    parseInt(input10.value) = valorPego;
    parseInt(input11.value) = valorPego;
    parseInt(input12.value) = valorPego;
    parseInt(input13.value) = valorPego;
    parseInt(input14.value) = valorPego;

}

function updateValue() {

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

    totalSet.innerHTML = 
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
    parseInt(setRow14.value) ;

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
}

