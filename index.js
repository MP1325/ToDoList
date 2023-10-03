console.log('Hello');

let button = document.querySelector('#submit');
let input = document.querySelector('#input');
let list = document.getElementById('list');


function addItem(){
    let input2 = input.value;

    if(input2 !== null && input2 !== ''){
        let newItem = document.createElement('li');
        newItem.textContent = input2;
        console.log("newItem", newItem);
        console.log('list', list);
        list.appendChild(newItem);
        input.value = "";
        
    }
}

button.addEventListener('click', addItem)

