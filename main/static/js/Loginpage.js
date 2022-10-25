function validate()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
if(username == "Nelsonraj" && password == "Jesus.christ.0")
{
    window.location.href = "/predict"
    alert("Loggedin Successfully")
    return true;

}
else if(username == "Thendral Magudapathi" && password == "Hi")
{
    window.location ="http://127.0.0.1:5000/predict" 
    alert("Loggedin Successfully")
    return true;

}
else if(username == "Alen Elsa" && password == "George")
{
    window.location ="http://127.0.0.1:5000/predict" 
    alert("Loggedin Successfully")
    return true;

}
else if(username == "admin" && password == "0000")
    
{
    window.location ="http://127.0.0.1:5000/predict" 
    alert("Loggedin Successfully")
    return true;

}
else
{
    window.location ="http://127.0.0.1:5000/"
    alert("LOGIN FAILED")
}



}