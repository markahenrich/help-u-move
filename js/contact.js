let name = document.getElementById("name");
let phone = document.getElementById("phone");
let email = document.getElementById("email");
let date = document.getElementById("date");
let fromAddress = document.getElementById("from_address");
let toAddress = document.getElementById("to_address");
let comments = document.getElementById("comments");

function isNotEmpty(value) {
    if (value == null || typeof value == "undefined") return false;

    return (value.length > 0);
}

function hasNumbers(num) {
    return (num.length > 0) && !isNaN(num);
}

function checkAllForms() {
    let count = 0;

    if (isNotEmpty(name.value)) {
        count++;
    }

    if (hasNumbers(phone.value)) {
        count++;
    }

    if (isNotEmpty(email.value)) {
        count++;
    }

    if(isNotEmpty(date.value)) {
        count++;
    }

    if(isNotEmpty(fromAddress.value)) {
        count++;
    }

    if (isNotEmpty(toAddress.value)) {
        count++;
    }

    if (count === 6) {
        return true;
    }

}

function enableBtn() {
    if (checkAllForms()) {
        btn.classList.remove("disabled");
    } else {
        btn.classList.add("disabled");
    }
}

function sendForm() {

}

// Start by disabling button
let btn = document.getElementById("submit_btn");
btn.classList.add("disabled");

// Add event listener to main content area so that validation check is run
// anytime user clicks anywhere in the main content area.
document.getElementById("content").addEventListener("click", enableBtn);
