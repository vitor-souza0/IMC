var btncal = document.querySelector("#cal")

var peso = document.querySelector("#peso")
var cm = document.querySelector("#cm")
var res = document.querySelector(".res")

function calcular(event) {
    event.preventDefault()
    var pesovalue = peso.value
    var cmvalue = cm.value

    var imc = pesovalue / cmvalue ** 2
    

    if (imc < 17) {
        res.innerHTML = `<div class="status">
                <p>peso</p>
                <p>Altura</p>
                <p>imc</p>
                <p>resultado</p>
            </div>
            <hr>
            <div class="parametro">
                <p>${pesovalue}</p>
                <p>${cmvalue}</p>
                <p>${imc.toFixed(2)}</p>
                <p>muito abaixo do peso</p>`


    } else if (imc <= 17 && imc <= 18.49) {
        res.innerHTML = `<div class="status">
    <p>peso</p>
    <p>Altura</p>
    <p>imc</p>
    <p>resultado</p>
</div>
<hr>
<div class="parametro">
    <p>${pesovalue}</p>
    <p>${cmvalue}</p>
    <p>${imc.toFixed(2)}</p>
    <p>abaixo do peso</p>`

    } else if (imc >= 18.5 && imc <= 24.99) {
        res.innerHTML = `<div class="status">
    <p>peso</p>
    <p>Altura</p>
    <p>imc</p>
    <p>resultado</p>
</div>
<hr>
<div class="parametro">
    <p>${pesovalue}</p>
    <p>${cmvalue}</p>
    <p>${imc.toFixed(2)}</p>
    <p> peso normal</p>`

    } else if (imc >= 25 && imc <= 29.99) {
        res.innerHTML = `<div class="status">
    <p>peso</p>
    <p>Altura</p>
    <p>imc</p>
    <p>resultado</p>
</div>
<hr>
<div class="parametro">
    <p>${pesovalue}</p>
    <p>${cmvalue}</p>
    <p>${imc.toFixed(2)}</p>
    <p> acima do peso</p>`

    } else if (imc >= 30 && imc <= 34.99) {
        res.innerHTML = `<div class="status">
    <p>peso</p>
    <p>Altura</p>
    <p>imc</p>
    <p>resultado</p>
</div>
<hr>
<div class="parametro">
    <p>${pesovalue}</p>
    <p>${cmvalue}</p>
    <p>${imc.toFixed(2)}</p>
    <p> obesidade l</p>`

    } else if (imc >= 35 && imc <= 39.99) {
        res.innerHTML = `<div class="status">
    <p>peso</p>
    <p>Altura</p>
    <p>imc</p>
    <p>resultado</p>
</div>
<hr>
<div class="parametro">
    <p>${pesovalue}</p>
    <p>${cmvalue}</p>
    <p>${imc.toFixed(2)}</p>
    <p>obseidade ll</p>`

    } else {
        res.innerHTML = `<div class="status">
        <p>peso</p>
        <p>Altura</p>
        <p>imc</p>
        <p>resultado</p>
    </div>
    <hr>
    <div class="parametro">
        <p>${pesovalue}</p>
        <p>${cmvalue}</p>
        <p>${imc.toFixed(2)}</p>
        <p>obesidade lll</p>`

    }
    btncal.value = "Refazer"
}

btncal.addEventListener("click", calcular)