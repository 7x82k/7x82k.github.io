window.onload = function() {
    var dateSpan = document.getElementById("date");
    var newDate = new Date();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    dateSpan.innerHTML = months[newDate.getMonth()] + " ";
}