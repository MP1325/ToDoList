console.log('Hello');

let button = document.querySelector('#submit');
let input = document.querySelector('#input');
let list = document.getElementById('list');
localStorage.clear();
let storedValues = localStorage.getItem('items') ?
JSON.parse(localStorage.getItem('items')) : [];

console.log(storedValues);
storedValues.forEach(addItem);
console.log(storedValues.forEach(addItem));

function addItem(){
    storedValues.push(input.value);
    console.log('input.value:', input.value)
    let input2 = input.value;

    if(input2 !== "" && input2 !== null){
        let newItem = document.createElement('li');
        let newCheckbox = document.createElement('input');
            newCheckbox.type = 'checkbox';
       
            let label = document.createElement('label');
            label.textContent = input2;


        // console.log("newItem", newItem);
        // console.log('list', list);
        
        newItem.appendChild(newCheckbox);
        newItem.appendChild(label);
        

        list.appendChild(newItem);
        input.value = "";

        newCheckbox.addEventListener('change', function(){
            label.style.textDecoration = newCheckbox.checked
            completed.appendChild(newItem)
        });
       
    }
    
    localStorage.setItem('items', JSON.stringify(storedValues));
}

button.addEventListener('click', addItem)

input.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        addItem();
    }
})

