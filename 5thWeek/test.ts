class Greeter {
    greeting: string;
    constructor(message: string, public hitpoints?: number) {
        this.greeting = message;
    }
    greet() {
    }
}

var greeter = new Greeter("Hello World");
var arabicGreeter = new Greeter("Marhaban")

var button = document.createElement('button');
button.textContent = "Say Hello";
button.onclick = function() {
    alert(greeter.greet());
}

document.body.appendChild(button);
