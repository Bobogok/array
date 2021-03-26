function ama() {

    var animal = document.getElementById("add_message_animal");
    var animal_ul = document.createElement("ul");
    animal.appendChild(animal_ul);

    for (var i = 1; i <= 5; i++) { 
        var animal_li = document.createElement("li");
        animal.appendChild(animal_li);
        animal_li.innerHTML = 'Вложенный элемент li под номером = ' + i;
    }
}

function array_item() {
    var array_item_new = new Array();
    var random_array = [48, 33.7, true , "lion", -29 , "win", false];
    
    for (a = 0; a <= 15; a++) {
        var item = random_array[Math.floor(Math.random() * random_array.length)];
        array_item_new[a] = item;
    }
    console.log(array_item_new)
}

function onload_doc() {
    ama()
    array_item()
}

window.onload = onload_doc;
