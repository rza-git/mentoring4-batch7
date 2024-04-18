const login = (email, password) => {

    if(email === "admin" && password === "admin") {
        console.log("Login Successfull")
    } else {
        console.log("Wrong email or password")
    }
}

login("admin", "admin")
