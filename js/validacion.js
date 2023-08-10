function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

document.getElementById("regBtn").addEventListener("click",validarfor)

function validarfor(){

    var data = document.getElementsByClassName("form-control");
    

    for (var i=0; i< data.length; i++){
        if (data [i].value === " "){showAlertError() 
            return false}
    }

    var contraseña = document.getElementById("password1")
    var contraseña2 = document.getElementById("password2")

 if(contraseña.value.length < 6){
   showAlertError();
   return false
 }

 if(contraseña2.value.length < 6){
    showAlertError()
    return false
 }


 if(contraseña.value !== contraseña2.value){
    showAlertError()
    return false
 }

 var checkbox = document.getElementById("terminos").checked

 if(!checkbox){
    showAlertError()
    return false
 }

 showAlertSuccess()
 return true
}

