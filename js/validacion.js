function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

document.getElementById("regBtn").addEventListener("click",validarfor)

function validarfor(){

    var data = document.getElementsByClassName("form-control");
    

    for (var i=0; i< data.lenght; i++){
        if (data [i].value === " "){showAlertError() 
            return false}
    }

    var contraseña = document.getElementById("password1")
    var contraseña2 = document.getElementById("password2")

 if(contraseña.value.lenght < 6){
   showAlertError();
   return false
 }

 if(contraseña2.value.lenght < 6){
    showAlertError()
    return false
 }

 showAlertSuccess()
 return true
}

