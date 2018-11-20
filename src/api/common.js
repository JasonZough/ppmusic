import axios from 'axios'

export default {
    getCases (params) {
        return axios.get('/api/v1/cases', { params })
    },
}