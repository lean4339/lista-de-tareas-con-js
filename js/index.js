let id = 0;
function addItem(){
    const textValue = document.getElementById("texto").value;
    addElement(textValue);
    document.getElementById("texto").value = " ";

}

function addElement(value){
    
    const list = document.getElementById("list");
    const oldHTML = list.innerHTML;
    list.innerHTML = `${oldHTML} <li class="li" id="${id}"><p>${value} </p> <button class="botonRojo" onclick="remover(${id})">eliminar</button> </li> `
    id++
}
function remover(id){
    const elemento = document.getElementById(id);
    elemento.remove();
}