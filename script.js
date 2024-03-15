function calc(op) {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var output = 0;

   switch(op) {
        case '+' : output = num1 + num2; break;
        case '-' : output = num1 - num2; break;
        case 'x' : output = num1 * num2; break;
        case '/' : output = num1 / num2; break;
   }
    
    document.getElementById("output").value = output;

    var history = document.getElementById("history");
    var newHispory = "<p>" + num1 + " " + op + " " + num2 + " = " + output + "</p>";

    history.innerHTML = newHispory + history.innerHTML;

    if(history.childNodes.length > 10) {
        history.removeChild(history.childNodes[10]);
    }

}