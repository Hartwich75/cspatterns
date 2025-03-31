document.addEventListener("DOMContentLoaded", function(){
    fetch('/Views/pageHeader')
    .then(response => response.text())
    .then(data => {
        document.getElementById('pageHeader').innerHTML = data;
    });
    
    fetch('/Views/footer')
    .then(response => response.text())
    .then(data => {
        document.getElementById('pageFooter').innerHTML = data;
    });
});