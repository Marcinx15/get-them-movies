import axios from 'axios'

export const register = newUser => {
    return axios
        .post('http://localhost:5000/users/register', {
            first_name: newUser.first_name,
            last_name: newUser.last_name,
            email: newUser.email,
            password: newUser.password
        })
        .then(response => {
            console.log('Registered')
        })
}

export const login = user => {
    return axios
        .post('http://localhost:5000/users/login', {
            email: user.email,
            password: user.password
        })
        .then(response => {
            console.log(response.data);
            if (typeof response.data === 'string'){
                localStorage.setItem('usertoken', response.data)
            } else {
                console.log("password incorrect");
            }
            return response.data
        })
        .catch(err => {
            console.log(err)
        })

}

export const getProfile = user => {
    return axios
        .get('users/profile', {
            //headers: { Authorization: ` ${this.getToken()}` }
        })
        .then(response => {
            console.log(response)
            return response.data
        })
        .catch(err => {
            console.log(err)
        })
}