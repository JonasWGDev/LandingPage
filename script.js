

function inputInvalid(){
    let input = document.getElementById("inputEmail");
    let errorMessage = document.getElementById("errorMessage");

    if(input.value.length == 0){
        errorMessage.style.display = "block";
        errorMessage.style.color = "rgb(240, 70, 70)";
    }
    else{
        errorMessage.style.display = "none";
    }
}