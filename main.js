const submissionForm = document.getElementById("forms")

submissionForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const fullName = document.getElementById("full_name").value;
    const ispassword = document.getElementById("first_password").value;
    const confirm_password = document.getElementById("confirm_password").value;

    if (ispassword === confirm_password) {
        let userInfo = {
            name: fullName,
            password: ispassword,
            password2: confirm_password
        }
    
        if(localStorage) {
            window.sessionStorage.setItem("login", JSON.stringify(userInfo))
            submissionForm.reset()
            alert("Sign up successfull, now you can log in")
        }else {
            alert("Your browser doesn't support localstorage")
        }
    
        console.log(window.sessionStorage.getItem("login"))
    } else {
        alert("Passwords do not match")
    }

})