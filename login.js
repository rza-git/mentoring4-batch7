const login = (email, password) => {

    if(email === "admin@mail.com" && password === "admin") {
        console.log("Login Successfull")
    } else {
        console.log("Wrong email or password")
    }
}

login("admin@mail.com", "admin")
