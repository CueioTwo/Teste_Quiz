function verif(){
    var tn1 = window.document.querySelector('input#valor1')
    var n1 = Number(tn1.value)
    var res = window.document.getElementById('res')
    if(n1 == 21){
        res.innerHTML = "Resposta correta";
    } else {
        res.innerHTML = "Resposta errada";
    }
    }