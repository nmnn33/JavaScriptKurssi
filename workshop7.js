window.onload = function () {
    document.getElementById("Fetch").addEventListener('click', parseData);
    document.getElementById("Fetch2").addEventListener('click', loadXMLDoc);
    document.getElementById("Fetch3").addEventListener('click', tabletis);
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
            var quote = xmlDoc.getElementsByTagName("quote");
            var author = xmlDoc.getElementsByTagName("author");
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
    var i;
    // Specify the data / url to be fetched
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var xmlDoc = xmlhttp.responseXML;
            //testiä varten
            console.log(xmlDoc);
            console.log(url);
            var item, feedlink, name, description, content = '';
            var items = xmlDoc.getElementsByTagName("item");

            for (i = 0; i < items.length; i++) {

                feedlink = items[i].getElementsByTagName('link').item(0).firstChild.nodeValue;
                name = items[i].getElementsByTagName('title').item(0).firstChild.nodeValue;
                item = '<li><a href="' + feedlink + '">' + name + '</a></li>';
                content += item;

            }

            // Finally we place the contents in a div
            document.getElementById("newsfeed").innerHTML = "<ul>" + content + "</ul>";
        }

    }
}