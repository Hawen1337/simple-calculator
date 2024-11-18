let silentLine = "";

function addNumber(number) {
    switch (number) {
        case number = "0":
            document.getElementById("line-inner").textContent += "0";
            silentLine += "0";
            break;
        
        case number = "00":
            document.getElementById("line-inner").textContent += "00";
            silentLine += "00";
            break;
        
        case number = "1":
            document.getElementById("line-inner").textContent += "1";
            silentLine += "1";
            break;
        
        case number = "2":
            document.getElementById("line-inner").textContent += "2";
            silentLine += "2";
            break;
        
        case number = "3":
            document.getElementById("line-inner").textContent += "3";
            silentLine += "3";
            break;
        
        case number = "4":
            document.getElementById("line-inner").textContent += "4";
            silentLine += "4";
            break;
        
        case number = "5":
            document.getElementById("line-inner").textContent += "5";
            silentLine += "5";
            break;
        
        case number = "6":
            document.getElementById("line-inner").textContent += "6";
            silentLine += "6";
            break;

        case number = "7":
            document.getElementById("line-inner").textContent += "7";
            silentLine += "7";
            break;
        
        case number = "8":
            document.getElementById("line-inner").textContent += "8";
            silentLine += "8";
            break;
        
        case number = "9":
            document.getElementById("line-inner").textContent += "9";
            silentLine += "9";
            break;

        case number = "clear":
            document.getElementById("line-inner").textContent = "";
            silentLine = "";
            break;

        case number = "delete":
            document.getElementById("line-inner").textContent = document.getElementById("line-inner").textContent.slice(0, -1);
            silentLine = silentLine.slice(0, -1);
            break;

        default:
            break;
    }
    
    adjustFontSize()
}

function addFunc(func) {
    if (silentLine !== "" &&
        silentLine[silentLine.length - 1] !== "." &&
        silentLine[silentLine.length - 1] !== "+" &&
        silentLine[silentLine.length - 1] !== "-" &&
        silentLine[silentLine.length - 1] !== "*" &&
        silentLine[silentLine.length - 1] !== "/"
        )   {
            switch (func) {
            case func = "point":
                document.getElementById("line-inner").textContent += ".";
                silentLine += ".";
                break;

            case func = "plus":
                document.getElementById("line-inner").textContent += "+";
                silentLine += "+";
                break;

            case func = "minus":
                document.getElementById("line-inner").textContent += "-";
                silentLine += "-";
                break;

            case func = "times":
                document.getElementById("line-inner").textContent += "×";
                silentLine += "*";
                break;

            case func = "divide":
                document.getElementById("line-inner").textContent += "÷";
                silentLine += "/";
                break;

            case func = "equals":
                document.getElementById("line-inner").textContent = eval(silentLine)
                silentLine = eval(silentLine)
                
            default:
                break;
        }
    }
    adjustFontSize()
}

function adjustFontSize() {
    const textBlock = document.getElementById('line-inner');
    const maxWidth = textBlock.clientWidth; 
    let fontSize = 96;

    textBlock.style.fontSize = fontSize + 'px';

    while (textBlock.scrollWidth > maxWidth && fontSize > 37) {
        fontSize--;
        textBlock.style.fontSize = fontSize + 'px';
    }
}