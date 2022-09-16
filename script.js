var username = document.forms['form']['name'];
var password = document.forms['form']['password'];

var error = document.getElementById('alert');

function validated(){
    if(username.value == "Roman" & password.value == "1245"){
        error.style.display = "none";
        return true;
    }
    else{
        error.style.display = "block";
        return false;
    }
}
