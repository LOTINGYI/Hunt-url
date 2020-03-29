import axios from 'axios'
import { showAlert } from "./alert";


export const recommend = async (user, url, title, descr, postId) => {
    try {
        const res = await axios({
            method: 'POST',
            url: 'https://flaskrecommend.azurewebsites.net/recommend',
            data: {
                user,
                url,
                title,
                descr
            }
        })

        var bodyFormData = new FormData()
        bodyFormData.set('result', res.data.answer)

        const res2 = await axios({
            method: 'PATCH',
            url: `http://localhost:3001/api/v1/posts/${postId}`,
            headers: {
                'Authorization': `Hello ${document.cookie.split('=')[1]}`
            },
            data: bodyFormData
        })

        if (res2) {
            showAlert('success', 'Recommend url')
            window.setTimeout(() => {
                location.reload()
            }, 1000)
        }

    } catch (err) {
        showAlert('error', err)
    }
}