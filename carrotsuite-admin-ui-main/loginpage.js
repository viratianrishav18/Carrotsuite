
function validateForm() {
    let x = document.forms["loginForm"]["email"].value;
    let y = document.forms["loginForm"]["password"].value;
    if (x == "" || y == "") {
        alert("Both fields must be filled out");
        return false;
    }
}