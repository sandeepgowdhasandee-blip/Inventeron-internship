const outputDiv = document.getElementById("output");

function runForLoop() {
    outputDiv.innerHTML = "<strong>For Loop (1 to 5):</strong><br>";
    for (let i = 1; i <= 5; i++) {
        outputDiv.innerHTML += "Number: " + i + "<br>";
    }
}

function runWhileLoop() {
    outputDiv.innerHTML = "<strong>While Loop (1 to 5):</strong><br>";
    let i = 1;
    while (i <= 5) {
        outputDiv.innerHTML += "Number: " + i + "<br>";
        i++;
    }
}

function runDoWhileLoop() {
    outputDiv.innerHTML = "<strong>Do While Loop (1 to 5):</strong><br>";
    let i = 1;
    do {
        outputDiv.innerHTML += "Number: " + i + "<br>";
        i++;
    } while (i <= 5);
}

function runForEachLoop() {
    outputDiv.innerHTML = "<strong>ForEach Loop (Array Example):</strong><br>";
    const fruits = ["Apple", "Banana", "Mango", "Orange"];
    fruits.forEach(function(fruit, index) {
        outputDiv.innerHTML += index + ": " + fruit + "<br>";
    });
}

function clearOutput() {
    outputDiv.innerHTML = "";
}