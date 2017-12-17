function mathInfo() {
    var randomNumber = Math.floor(Math.random() * 100);
    console.log(randomNumber);

    var textInSpan = document.querySelector("span");

    var isnot = " ";
    if (randomNumber % 2 != 0) {
        isnot = " nie "
    }
    textInSpan.innerText = randomNumber.toString() + isnot + "jest parzystą liczbą";

    var dividers = document.getElementById("dividers");
    var dividersList = [];
    for (var i = 1; i <= Math.floor(randomNumber / 2); i++) {
        if (randomNumber % i == 0) {
            dividersList.push(i);
        }
    }
    dividersList.push(randomNumber);

    dividers.innerText = "Lista dzielników:" + dividersList.join(", ");

    var num1 = randomNumber ** (randomNumber % 5);
    console.log(num1);
    var num2 = Math.pow(randomNumber, (randomNumber % 5));
    console.log(num2);
    document.getElementById("pow1").innerText = "Wynik działania (**): " + num1.toString();
    document.getElementById("pow2").innerText = "Wynik działania (Math.pow): " + num2.toString();

}
