// Botão voltar ao topo

const topo = document.getElementById("topo");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        topo.style.display = "block";

    }

    else{

        topo.style.display = "none";

    }

});

topo.onclick = () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}

// Pesquisa

const pesquisa = document.getElementById("pesquisa");

pesquisa.addEventListener("keyup", ()=>{

    const texto = pesquisa.value.toLowerCase();

    const cards = document.querySelectorAll(".card");

    cards.forEach(card=>{

        const nome = card.innerText.toLowerCase();

        if(nome.includes(texto)){

            card.style.display="block";

        }

        else{

            card.style.display="none";

        }

    });

});