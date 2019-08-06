


let button = document.getElementById('formbtn');
button.onclick = function submit() {
    event.preventDefault();        
    let fieldvalue = document.getElementById('zipfield').value;
    var isnum = /^\d+$/.test(fieldvalue);    
    if (fieldvalue.length < 5 && !isnum) {
        document.getElementById('invalid').style.display = "block";
    } else {
        localStorage.setItem('zip', fieldvalue);    
    window.location = "https://willwashington.github.io/Wallee/current.html"    
    }
}