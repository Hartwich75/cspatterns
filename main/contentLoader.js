document.addEventListener("DOMContentLoaded", function(){
    fetch('/main/pageHeader.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('pageHeader').innerHTML = data;
    });
});