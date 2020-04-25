
function onSubmitClick()
{
    let emailFieldValue = document.getElementById("exampleInputEmail1").value;
    let passwordValue = document.getElementById("exampleInputPassword1").value;
    let URLValue = document.getElementById("exampleInputURL").value;
    console.log(
        "emailField :" + emailFieldValue +"\n"+
        "passwordvalue :" + passwordValue +"\n"+
        "URLValue :" + URLValue
    )
    alert(
        "emailField :" + emailFieldValue +"\n"+
        "passwordvalue :" + passwordValue +"\n"+
        "URLValue :" + URLValue
    )
}