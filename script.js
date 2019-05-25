var input = document.getElementById('userInput');
var addButton = document.getElementById('addButton');
var ul = document.querySelector('ul');

function inputLenght () {
    return input.value.length;
}

function createListItem (){
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = '';
}

function addListItemAfterKeyPress(event) {
    if (inputLenght () > 0 && event.keyCode === 13)
        createListItem ()
}

function addListItemAfterClick() {
    if (inputLenght () > 0)
        createListItem ()
}

input.addEventListener('keypress', addListItemAfterKeyPress);
addButton.addEventListener('click', addListItemAfterClick);
