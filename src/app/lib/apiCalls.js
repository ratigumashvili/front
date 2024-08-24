const { default: axios } = require("axios")

const apiUrl = 'http://localhost:1337/api'

export const getSinglePage = (path, locale, params) => axios.get(`${apiUrl}/${path}?locale=${locale}&${params}`).then((resp) => resp.data).catch((error) => error.message)

export const getCollection = (path, locale, params, queryParams) => axios.get(`${apiUrl}/${path}?locale=${locale}&${params}&${queryParams}`).then((resp) => resp.data).catch((error) => error.message)