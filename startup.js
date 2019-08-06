


let button = document.getElementById('formbtn');
button.onclick = function submit() {
    event.preventDefault();        
    let fieldvalue = document.getElementById('zipfield').value;
    var isnum = /^\d+$/.test(fieldvalue);    
    if (fieldvalue.length < 5 && !isnum) {
        document.getElementById('invalid').style.display = "block";
    } else {
        localStorage.setItem('zip', fieldvalue);    
    //window.location = "https://willwashington.github.io/Wallee/index.html"
    window.location.pathname = "C:/Users/NEO/OneDrive/repos/C%23%20-%20Web%20-%20Core%20-%20ASP.NET%20-%20etc/web/wallee/current.html";
    }
}