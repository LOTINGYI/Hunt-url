import "@babel/polyfill";
import { login,logout } from "./login";
import { updateSettings } from "./updateSettings";
import { recommend } from "./recommend";

const loginForm = document.querySelector('.form--login')
const userDataForm = document.querySelector('.form-user-data')
const userPasswordForm = document.querySelector('.form-user-password')
const searchButton = document.querySelector('.btn-search')
const logoutButton = document.querySelector('.nav__el--logout')

if (loginForm) {
    loginForm.addEventListener('submit', e => {
        e.preventDefault()

        const email = document.getElementById('email').value
        const password = document.getElementById('password').value

        login(email, password)
    })
}
if (logoutButton) {
    logoutButton.addEventListener('click',logout)
}

if (userDataForm) {
    userDataForm.addEventListener('submit', e => {
        e.preventDefault()

        const name = document.getElementById('name').value
        const email = document.getElementById('email').value


        updateSettings({ name, email }, 'data')
    })
}

if (userPasswordForm) {
    userPasswordForm.addEventListener('submit', e => {
        e.preventDefault()

        const passwordCurrent = document.getElementById('password-current').value
        const password = document.getElementById('password').value
        const passwordConfirm = document.getElementById('password-confirm').value

        updateSettings({ passwordCurrent, password, passwordConfirm }, 'password')
    })
}

if (searchButton) {

    searchButton.addEventListener('click', e => {
        e.preventDefault()
        const currentUrl = window.location.href
        const username = document.getElementById('username')
        const title = document.getElementById('title').textContent
        const description = document.getElementById('description').textContent

        if (username) {
            console.log('Username: ', username.textContent)
        }

        console.log('Description:', description)
        console.log('Current Url:', currentUrl)
        console.log('Title: ', title);

        recommend(username,currentUrl,title,description)
        // document.getElementById('result').innerHTML = `<a>${username.textContent}</a>`
    })
}