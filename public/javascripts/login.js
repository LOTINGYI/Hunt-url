import axios from 'axios'
import { showAlert } from './alert'


export const login = async (email, password) => {
    try {
        const res = await axios({
            method: 'POST',
            url: 'http://localhost:3001/api/v1/users/login',
            data: {
                email,
                password
            }
        })
        console.log(res)

        if (res.data.status === 'success') {
            showAlert('success', 'Logged in successfully')
            window.setTimeout(() => {
                location.assign('/')
            }, 5)
        }
    } catch (err) {
        showAlert('error', err.response.data.message)
    }
}


export const logout = async() =>{
    try {
        const res = await axios({
            method:'GET',
            url: 'http://localhost:3001/api/v1/users/logout'
        })
        console.log(res.data.status)
        if(res.data.status === 'success') location.reload(true)
    } catch (err) {
        showAlert('error','Err Logging out! Trying again')
    }
}