//exercise 1
function getData() {
    var kommentti = document.getElementById("kommenttiKenttä").value;
    var kommenttiS = document.getElementById("kommenttiKenttä");
    var emaili = document.getElementById("tekstiAlue").value;
    var emailiS = document.getElementById("tekstiAlue");
    var virhe1 = document.getElementById("error1");
    var virhe2 = document.getElementById("error2");
    if (kommentti != "" && kommentti.length < 50 && (emaili.length >= 6 && emaili.length < 15 && emaili.includes("@"))) {
        alert(emaili + " " + kommentti);
    } else {
        virhe1.innerHTML= "Syötä ainakin 6 kirjainta, mutta alle 15. Muista sisältää @-merkki.";
        emailiS.style.borderColor= "red";
        virhe2.innerHTML="Syötä jotain, mutta alle 50 kirjainta.";
        kommenttiS.style.borderColor = "red";
    }
    return false;
}

//exercise 2
