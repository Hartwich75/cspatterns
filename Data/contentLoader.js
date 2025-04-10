document.addEventListener("DOMContentLoaded", function(){
    fetch('/Views/pageHeader.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('pageHeader').innerHTML = data;
    });
    
    fetch('/Views/footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('pageFooter').innerHTML = data;
    });
});