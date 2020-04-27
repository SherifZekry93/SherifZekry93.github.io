
window.onload = function () {
    "use strict"
    let checkBox = document.getElementById("bling");
    checkBox.onchange = changeFontSize
    let textArea = document.getElementById("txtAreaLines");
    textArea.style.fontSize = "12pt";

    let biggerDecorationButton = document.getElementById("biggerDecorationButton");

    biggerDecorationButton.onclick = biggerDecorations;

    let malkovishButton = document.getElementById("malkovishButton");

    malkovishButton.onclick = replaceText;

    let pigLatinButton = document.getElementById("pigLatinButton");
    pigLatinButton.onclick = toPigLatin;
    function biggerDecorations() 
    {
        let fontSize = parseInt(textArea.style.fontSize);
        fontSize = fontSize + 2;
        textArea.style.fontSize = fontSize + "pt";
        setTimeout(biggerDecorations, 500);
    }


    function changeFontSize() {
        textArea.classList.toggle("checked-bling-text");
        if (checkBox.checked) {
            document.body.style.backgroundImage =
                "url('http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg')";
        }
        else {
            document.body.style.backgroundImage = "";
        }
    }
    
    function replaceText() {
        replaceWithMinLength(textArea.value);
    }

    function replaceWithMinLength(str) {
        let words = str.toString().split(" ");
        for (let i = 0; i < words.length; i++) {
            if (words[i].length >= 5) {
                words[i] = "Malkovich";
            }
        }
        let text = words.toString().split(",").join(" ");
        textArea.value = text
    }
    function toPigLatin()
    {
        let str = textArea.value;
        let words = str.toString().split(" ");
        for(let i =0;i<words.length;i++)
        {
            let firstChar = words[i].charAt(0)
            let lowerCaseFirstChar = firstChar.toString().toLowerCase();
            if(lowerCaseFirstChar == 'a'||lowerCaseFirstChar == 'i' ||lowerCaseFirstChar == 'o'||lowerCaseFirstChar == 'e' || lowerCaseFirstChar =='u')
            {
                words[i] = words[i].substring(1) + lowerCaseFirstChar + "ay";
            }
            else
            {
                words[i] = words[i] + "ay";
            }
        }
        let text = words.toString().split(",").join(" ");
        textArea.value = text
    }
}


