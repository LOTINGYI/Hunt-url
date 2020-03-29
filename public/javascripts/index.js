import "@babel/polyfill";
import { login, logout } from "./login";
import { signup } from "./signup";
import { updateSettings } from "./updateSettings";
import { recommend } from "./recommend";
import { deletePost, createPost } from "./editpost";
import { showAlert } from "./alert";

const signupForm = document.querySelector('.form--signup')
const loginForm = document.querySelector('.form--login')
const userDataForm = document.querySelector('.form-user-data')
const editPostForm = document.querySelector('.form-edit-post')
const userPasswordForm = document.querySelector('.form-user-password')
const searchButton = document.querySelector('.btn-search')
const logoutButton = document.querySelector('.nav__el--logout')
const deletePostButton = document.querySelectorAll('.btn-delete-post')

if (signupForm) {
    signupForm.addEventListener('submit', e => {
        e.preventDefault()

        const username = document.getElementById('username').value
        const email = document.getElementById('email').value
        const password = document.getElementById('password').value
        const passwordconfirm = document.getElementById('passwordconfirm').value

        signup(username, email, password, passwordconfirm)
    })
}


if (loginForm) {
    loginForm.addEventListener('submit', e => {
        e.preventDefault()

        const email = document.getElementById('email').value
        const password = document.getElementById('password').value

        login(email, password)
    })
}

if (logoutButton) {
    logoutButton.addEventListener('click', logout)
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

if (editPostForm) {


    editPostForm.addEventListener('submit', e => {
        e.preventDefault()
        const themes = document.getElementById('theme')
        const levels = document.getElementById('level')
        // const form = new FormData()
        // form.append('postname',document.getElementById('postname').value)
        // form.append('theme',theme.options[theme.selectedIndex].text)
        // form.append('level',level.options[level.selectedIndex].text)
        // form.append('summary',document.getElementById('summary').value)
        // form.append('description',document.getElementById('description').value)
        // form.append('mediaResource','data-science-3.jpg') // document.getElementById('photo').files[0]
        // form.append('poster',document.getElementById('user-id'))

        const name = document.getElementById('postname').value
        const theme = themes.options[themes.selectedIndex].text
        const difficulty = levels.options[levels.selectedIndex].text
        const summary = document.getElementById('summary').value
        const description = document.getElementById('description').value
        const mediaResource = 'data-science-3.jpg'
        const poster = document.getElementById('user-id').textContent
       
        let post = {
            name,
            theme,
            difficulty,
            summary,
            description,
            mediaResource,
            poster
        }

        createPost(name,theme,difficulty,summary,description,mediaResource,poster)
        // console.log(theme.options[theme.selectedIndex].text)
        // console.log(level.options[level.selectedIndex].text)
        // console.log(postname)
        // console.log(summary)
        // console.log(description)
        // console.log(photo)
    })
}


if (deletePostButton) {
    // console.log(deletePostButton)

    for (let i = 0; i < deletePostButton.length; i++) {
        //    console.log(deletePostButton[i])
        deletePostButton[i].addEventListener('click', () => {
            const postId = document.getElementById(`post-id-${i}`).textContent
            deletePost(postId)
        })
    }
}


if (searchButton) {

    searchButton.addEventListener('click', e => {
        e.preventDefault()
        const currentUrl = window.location.href
        const username = document.getElementById('username')
        const title = document.getElementById('title').textContent
        const description = document.getElementById('description').textContent
        const postId = document.getElementById('post-id').textContent

        if (username) {
            console.log('Username: ', username.textContent)
            console.log('Description:', description)
            console.log('Current Url:', currentUrl)
            console.log('Title: ', title);


            recommend(username, currentUrl, title, description, postId)
        } else {
            showAlert('error', 'Please log in')
            window.setTimeout(() => {
                location.assign('/login')
            }, 1000)
        }
    })
}