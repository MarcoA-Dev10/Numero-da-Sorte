const buttonClick = document.querySelector(".button-click")

function generateNumber(){
    const inputMin = Math.ceil(document.getElementById("input-min").value)
    const inputMax = Math.floor(document.getElementById("input-max").value)

    const result = Math.floor(Math.random() * (inputMax - inputMin) + inputMin);

    alert(result)
}


buttonClick.addEventListener("click", generateNumber)





 