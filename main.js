const botoes = document.querySelectorAll(".botao");

for(let i=1;i <botoes.length;i++){
    botoes[i].onclick = function(){

        for(let j=1;j<botoes.length;j++){
            botoes[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
    }
}