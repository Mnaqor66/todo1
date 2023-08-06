var myNodeList = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodeList.length; i++) {
    var span = document.createElement ("span");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodeList[i].appendChild(span);
}

var close = document.getElementsByClassName ("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

var list = document.querySelector('ul');
list.addEventListener ('click', function(ev) {
    if (ev.target.tagName === 'li') {
        ev.target.classList.toggle('checked');
    }
}, true);

function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("inputList").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("Tuliskan Sesuatu !!!");
    } else {
        document.getElementById("jobList").appendChild(li);
    }
    document.getElementById("inputList").value = "";

    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7")
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i  < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}