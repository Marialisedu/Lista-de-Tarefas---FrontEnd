let myNodelist = document.getElementsByTagName("li");
for (let i = 0; i < myNodelist.length; i++) {
    let span = document.createElement("span");
    let txt = document.createTextNode("\u00D7"); //caracter x
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}
let close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        let div = this.parentElement;
        div.style.display = "none";
    }
}
let list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

function addElemento() {

    const dataAtual = new Date();
    const dia = dataAtual.getDate(); 
    const mes = dataAtual.getMonth(); 
    const ano = dataAtual.getFullYear();
    const hora = dataAtual.getHours(); 
    const minutos = dataAtual.getMinutes(); 


    let li = document.createElement("li");
    let inputValue = document.getElementById("tarefa").value.toUpperCase();
    let t = document.createTextNode(inputValue);
   
    li.appendChild(t);
    if (inputValue === '') {
        alert("Você precisa descrever a tarefa");
    } else {
        document.getElementById("itemLista").append(dia + "/", mes + "/", ano + "  ", hora + ":", minutos);
        document.getElementById("itemLista").appendChild(li);
        document.getElementById("tarefa").value = "";
    }
    
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
    let editBtn = document.createElement("button");
    editBtn.textContent = "Editar";
    editBtn.onclick = editElemento;
    li.appendChild(editBtn);
}

function editElemento() {
    let li = this.parentElement;
    let inputValue = prompt("Editar a tarefa:", li.textContent);
    if (inputValue) {
        li.textContent = inputValue;
        li.appendChild(this);
    }
  }

document.getElementById('limparLista').addEventListener('click', function() {
    let lista = document.getElementById('itemLista');
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
});


