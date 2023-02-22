const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const clickLuck = document.querySelector('#clickLuck')
const clickAgain = document.querySelector('#clickAgain')




function clickForLuck (){

    screen1.classList.add("hide")
    screen2.classList.remove("hide")
   
    

   

}



clickLuck.addEventListener('click', clickForLuck)
clickAgain.addEventListener('click', function (){
    screen1.classList.remove("hide")
    screen2.classList.add("hide")
   

   

})


function changeColor(color) {
    document.body.style.background = "red";
}

function clickLuckd() {
    changeColor('yellow');
    clickLuck.innerHTML = "Background Color changed";
}





// UMA BRINCADA

(function() {
    "user strict";

    var i, j, textos, teste, target;

    textos = [
        "O importante não é saber, mas ter o telefone de quem sabe. ",
        "Antes uma andorinha só do que mal acompanhada.",
        "Não bebo, não fumo e também não falo besteira... Mas às vezes minto! ",
        "As últimas palavras de um peixe: estou frito! ",
        "Eu não daria nada para a pá, mas a padaria. ",
        "Eu tenho olho, já o utensílio.",
        "Se não estiver muito bem, faça um download e continue. "
    ];

    i = 0;
    j = textos.length;

    teste = function () {
        if (target) {
            target.innerHTML = textos[i];
            i++;
            if (i === j){
                i = 0;
            }

           
            window.setTimeout(teste, 2000);
        } else {
    
            target = document.getElementById("texto");

            window.setTimeout(teste, 100);
        }
    };

    teste();//Inicia o processo
})()

