let buttonGenerate = document.getElementById("btn-serie");
let numeroSerie = document.getElementById("number-serie");
let resultFibonacci = document.querySelector(".list-serie");

function generateSerieFibonacci(limit){

    let listSerie = (limit==0)? [0] : [0,1];

    for (let i = 2; i <= limit; i++) {

        listSerie[i] = listSerie[i-2] + listSerie[i-1];
    }

    return listSerie;
}

function startApp(){

    let limit = 0;

    if(numeroSerie.value==""){
        alert("Debe ingresar un numero valido")
    }else{
        limit = parseInt(numeroSerie.value);
    }

    renderList(generateSerieFibonacci(limit));

}

function renderList(list){
    let resultSerie ="";
    list.forEach((number) => {
        resultSerie += number + " "
    });

    resultFibonacci.innerHTML = resultSerie;
}


buttonGenerate.addEventListener('click', startApp)