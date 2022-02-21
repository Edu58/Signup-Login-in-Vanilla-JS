const form = document.getElementById("forms")

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const username = document.getElementById("user_name").value;
    const userpass = document.getElementById("user_password").value;

    if(localStorage){
        const user = sessionStorage.getItem("login")
        const parsed = JSON.parse(user)

        if(username === parsed.name && userpass === parsed.password) {
            alert("Logged in successfully")
        } else {
            alert("Your details do not match any user in our system")
        }
    }
})