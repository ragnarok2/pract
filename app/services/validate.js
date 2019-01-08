export const email = /\S+@\S+\.\S+/
export const login = /^[a-zA-Z0-9]+$/
export const password = /^([a-zA-Z0-9])+$/
export const numberPhone =  /^\+?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})[-. ]?([0-9]{2})[-. ]?([0-9]{2})[-. ]?$/
export const reglogin = /^([a-zA-Z0-9]{5-10})+$/
export const regpassword = /^([a-zA-Z0-9]{6-10})+$/

export const validate = (text, type) =>
    {
        login
        password

        if (type == 'login')
        {
            if (login.test(text)){
                alert("login is validated")
                console.log("login is validated")
                this.setState({ login : text })
            } else {
                console.log("login isn`t validated")
                alert("login isn`t validated")
            }
        }

        if (type == 'password')
        {
            if (password.test(text)){
                alert("password is validated")
                console.log("password is validated")
                this.setState({ password : text })
            } else {
                console.log("password isn`t validated")
                alert("password isn`t validated")
            }
        }
    }
