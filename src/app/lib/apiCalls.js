const { default: axios } = require("axios")

const apiUrl = 'https://lecami-back.iliauni.edu.ge/api'

// https://lecami.iliauni.edu.ge/api

export const getSinglePage = (path, locale, params) => axios.get(`${apiUrl}/${path}?locale=${locale}&${params}`).then((resp) => resp.data).catch((error) => error.message)

export const getCollection = (path, locale, params, queryParams) => axios.get(`${apiUrl}/${path}?locale=${locale}&${params}&${queryParams}`).then((resp) => resp.data).catch((error) => error.message)