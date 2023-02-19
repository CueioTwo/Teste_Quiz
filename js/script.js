function verif(){
    var tn1 = window.document.querySelector('input#valor1')
    var n1 = Number(tn1.value)
    var res = window.document.getElementById('res')
    if(n1 == 21){
        res.innerHTML = "Resposta correta";
        res.style.color = 'green';
    } else {
        res.innerHTML = "Resposta errada";
        res.style.color = 'red';
    }
    }