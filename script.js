var button = document.getElementById ("enter");
var input = document.getElementById ("userinput");
var ul = document.querySelector ("ul");

function inputValueLength () {
    return input.value.length;
}

function createList () {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

function createListonClick () {
    if (inputValueLength () > 0) {
        createList ();
    }
}

function createListonEnter (event) {
    if (inputValueLength () > 0 && event.keyCode === 13) {
        createList ();
    }
}

button.addEventListener ("click", createListonClick);

input.addEventListener ("keypress", createListonEnter);