import axios from 'axios'
import { showAlert } from "./alert";



export const signup = async(name,email,password,passwordConfirm)=>{
    try {
        const res = await axios({
            method:'POST',
            url: 'http://localhost:3001/api/v1/users/signup',
            data:{
                name,
                email,
                password,
                passwordConfirm
            }
        })

        if (res.data.status === 'success') {
            showAlert('success','Sign up successfully')
            window.setTimeout(()=>{
                location.assign('/')
            },5)
        }

    } catch (err) {
        showAlert('error', err.response.data.message)
    }
}