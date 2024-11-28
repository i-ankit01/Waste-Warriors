let username = "ankit@1234"
let password = "impact"

let inputUsername = document.querySelector("#username")
let inputPassword = document.querySelector("#password")
let loginButton = document.querySelector("#login")
let h1 = document.querySelector("h1")

loginButton.addEventListener("click", function (ev) {
    ev.preventDefault()
    if (username == inputUsername.value && password == inputPassword.value) {
        window.location.href = "../index.html"
    }
    else {
        h1.innerHTML = "Invalid Username, Please enter again"
    }

})
