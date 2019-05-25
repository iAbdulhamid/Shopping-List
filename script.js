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

    var btnDone = document.createElement("button");
        btnDone.appendChild(document.createTextNode("Done"));
 		li.appendChild(btnDone);
 		btnDone.onclick = doneParent;
    var btnRemove = document.createElement("button");
        btnRemove.appendChild(document.createTextNode("Remove"));
 		li.appendChild(btnRemove);
 		btnRemove.onclick = removeParent;
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

function doneParent(event) {
    event.target.parentNode.classList.toggle('done');
    event.value = "Undone";
}

function removeParent(event){
	event.target.parentNode.remove();
} 


