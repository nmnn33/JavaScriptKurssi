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
function valinta() {
    var tyyppi = document.getElementById("type");
    var hinta = document.getElementById("cost");
    var vuodet = document.getElementById("years").value;
    let p = document.getElementById("alennus");
    if (tyyppi.value == "basic" && vuodet <=2) {
        hinta.value = 10 * vuodet;
    }
    if (tyyppi.value == "basic" && vuodet >2) {
        hinta.value = 10 * vuodet * 0.8;
        p.innerHTML = "Saat 20 % alennuksen yli 2 vuoden sitoutumisesta!";
    }
    if (tyyppi.value == "basic" && vuodet >=5) {
        hinta.value = 10 * vuodet * 0.8 - 5;
        p.style.color = "blue";
        p.innerHTML = "Saat 20 % halvemmalla jäsenyyden yli 5 vuoden sitoutumisesta! Tästä vieläpä 5€ pois! Huikeata!";
    }
    if (tyyppi.value == "premium") {
        hinta.value = 15 * vuodet;
    }
    if (tyyppi.value == "premium" && vuodet >2) {
        hinta.value = 15 * vuodet * 0.8;
        p.innerHTML = "Saat 20 % alennuksen yli 2 vuoden sitoutumisesta!";
    }
    if (tyyppi.value == "premium" && vuodet >=5) {
        hinta.value = 10 * vuodet * 0.8 - 5;
        p.style.color = "blue";
        p.innerHTML = "Saat 20 % halvemmalla jäsenyyden yli 5 vuoden sitoutumisesta! Tästä vieläpä 5€ pois! Huikeata!";
    }
    if (tyyppi.value == "gold") {
        hinta.value = 20 * vuodet;
    }
    if (tyyppi.value == "gold" && vuodet >2) {
        hinta.value = 20 * vuodet * 0.8;
        p.innerHTML = "Saat 20 % alennuksen yli 2 vuoden sitoutumisesta!";
    }
    if (tyyppi.value == "gold" && vuodet >=5) {
        hinta.value = 10 * vuodet * 0.8 - 5;
        p.style.color = "blue";
        p.innerHTML = "Saat 20 % halvemmalla jäsenyyden yli 5 vuoden sitoutumisesta! Tästä vieläpä 5€ pois! Huikeata!";
    }
    if (tyyppi.value == "platinum") {
        hinta.value = 25 * vuodet;
    }
    if (tyyppi.value == "platinum" && vuodet >2) {
        hinta.value = 25 * vuodet * 0.8;
        p.innerHTML = "Saat 20 % alennuksen yli 2 vuoden sitoutumisesta!";
    }
    if (tyyppi.value == "platinum" && vuodet >=5) {
        hinta.value = 10 * vuodet * 0.8 - 5;
        p.style.color = "blue";
        p.innerHTML = "Saat 20 % halvemmalla jäsenyyden yli 5 vuoden sitoutumisesta! Tästä vieläpä 5€ pois! Huikeata!";
    }
    return false;
}

//exercise 4
function exec4() {
    var contact = document.getElementById("contact");
    if (contact.value == "email") {
        document.getElementById("eposti").style.display = "block";
        document.getElementById("puhenum").style.display = "none";
        document.getElementById("esemes").style.display = "none";
    }
    if (contact.value == "phone") {
        document.getElementById("puhenum").style.display = "block";
        document.getElementById("eposti").style.display = "none";
        document.getElementById("esemes").style.display = "none";
    }
    if (contact.value == "sms") {
        document.getElementById("esemes").style.display = "block";
        document.getElementById("eposti").style.display = "none";
        document.getElementById("puhenum").style.display = "none";
    }
}