function log(){
    var getname = document.getElementById("username").value;
    var passcode = document.getElementById("password").value;
    if((getname==localStorage.getItem("Name")) && (passcode==localStorage.getItem("Password"))){
        alert("Done");
    }
}

