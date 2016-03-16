var Greeter = (function () {
    function Greeter(message, hitpoints) {
        this.hitpoints = hitpoints;
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
    };
    return Greeter;
}());
var greeter = new Greeter("Hello World");
var arabicGreeter = new Greeter("Marhaban");
var button = document.createElement('button');
button.textContent = "Say Hello";
button.onclick = function () {
    alert(greeter.greet());
};
document.body.appendChild(button);
