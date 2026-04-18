function declarationFunc() {
        alert("This is Function Declaration");
    }

    const expressionFunc = function() {
        alert("This is Function Expression");
    };

    const arrowFunc = () => {
        alert("This is Arrow Function");
    };

    function greet(callback) {
        callback();
    }

    function showAlert() {
        alert("This is Callback Function");
    }

    function handleSubmit(event) {
        event.preventDefault();
        greet(showAlert);
    }