let button = document.getElementById('formbtn');
button.onclick = function submit() {
    event.preventDefault();
    let fieldvalue = document.getElementById('zipfield').value;    
    if(isNaN(fieldvalue)){
        document.getElementById('invalid').style.display = "block";
    } else {
        localStorage.setItem('zip', fieldvalue);    
        window.location = "https://willwashington.github.io/Wallee/current.html"    
    }
}