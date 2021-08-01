function buy() {
    console.log("You just put one Beoplay H9 color 'Argilla Bright' in your shopping basket!");

}
function subscribe() {
    let emailAddress = document.getElementById("email1").value;
    console.log("You will receive a regular newsletter to your email address:");
    console.log(emailAddress);
}

function sendMessage() {
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let emailAddress = document.getElementById("email2").value;
    let message = document.getElementById("msg").value;
    let newsletter = document.getElementById("newsletter").checked;
    console.log("Thx for your message to us, these are the data transmitted to us:");
    console.log(name);
    console.log(phone);
    console.log(emailAddress);
    console.log(message);
    console.log("You " + (newsletter ? "" : "don't ") + "have subscribed for newsletter!");
}
