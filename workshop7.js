window.onload = function () {
    document.getElementById("Fetch").addEventListener('click', parseData);
    document.getElementById("Fetch2").addEventListener('click', loadXMLDoc);
    document.getElementById("Fetch3").addEventListener('click', tabletis);
    document.getElementById("Fetch4").addEventListener('click', rss('https://pastebin.com/raw/tPmhjEPM'));
    document.getElementById("Fetch5").addEventListener('click', rss('http://www.iltalehti.fi/rss/uutiset.xml'));
}
function parseData() {
    var quote = document.getElementsByTagName("quote");
    var author = document.getElementsByTagName("author");
    console.log(quote[0].innerHTML + ", " + author[0].childNodes[0].nodeValue);
}
function loadXMLDoc() {
    // Create AJAX object
    var xmlhttp = new XMLHttpRequest();
    // Specify the data / url to be fetched
    xmlhttp.open("GET", "http://quotes.rest/qod.xml", true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            // find myDiv and insert results there
            document.getElementById("quotes").innerHTML = xmlhttp.responseText;
        }
    }
}
function tabletis() {
    // Create AJAX object and other variables
    var xmlhttp = new XMLHttpRequest();
    var table = document.getElementById("tabledata");
    var data = table.rows[1].cells;
    var i;
    var quote = document.getElementsByTagName("quote");
    var author = document.getElementsByTagName("author");
    // Specify the data / url to be fetched
    xmlhttp.open("GET", "http://quotes.rest/qod.xml", true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var xmlDoc = xmlhttp.responseXML;
            //testiä varten
            console.log(xmlDoc);
            for (i = 0; i < quote.length; i++) {
                data[0].innerHTML = quote[i].childNodes[0].nodeValue;
                data[1].innerHTML = author[i].childNodes[0].nodeValue;
            }
        }
    }
}
function rss(url) {
    // Create AJAX object and other variables
    var xmlhttp = new XMLHttpRequest();
    var item, link, txt, i;
    txt = '<ul>';
    // Specify the data / url to be fetched
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var xmlDoc = xmlhttp.responseXML;
            //testiä varten
            console.log(xmlDoc);
            item = document.getElementsByTagName("item").childNodes[0].nodeValue;
            link = document.getElementsByTagName("link").childNodes[0].nodeValue;
            for (i=0; i < item.length; i++) {
                txt += '<li>' + item[i] + "  " + '<a href="' + link[i] + '"></a>' + '</li>'
            } txt += '</ul>'
            document.getElementsById("newsfeed").innerHTML = txt;
        }
    }
}