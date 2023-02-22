const Qly = [...document.querySelectorAll(".Qly")];
const btnSubmit = document.querySelector("#SubmitButton")
const caixa2 = document.querySelectorAll(".caixa2")
const caixa1 = document.querySelectorAll(".caixa1")

const tirarSelecao=()=>{
    const NumSelecionados=[...document.querySelectorAll(".selecionado")]
    NumSelecionados.map((el)=>{
        el.classList.remove("selecionado")
    })
}

Qly.map((el) => {
    el.addEventListener("click", (evt)=>{
        tirarSelecao()
        const el=evt.target
        el.classList.toggle("selecionado")    
    })
})


const selecionado=()=>{
    const Selecionado=[...document.querySelectorAll(".selecionado")]
    return Selecionado[0].textContent
}

btnSubmit.addEventListener("click",(evt)=>{
    const slc=selecionado() 
    if(slc!=undefined){
        
        if(slc==1){
            document.getElementById("rating").innerHTML = "You selected 1 out of 5";
        }else if(slc==2){
            document.getElementById("rating").innerHTML = "You selected 2 out of 5";
        }else if(slc==3){
            document.getElementById("rating").innerHTML = "You selected 3 out of 5";
        }else if(slc==4){
            document.getElementById("rating").innerHTML = "You selected 4 out of 5";
        }else if(slc==5){
            document.getElementById("rating").innerHTML = "You selected 5 out of 5";
        }

        document.getElementById('One').style.display = "none"
        document.getElementById('Two').style.display = "block"
    }
})

