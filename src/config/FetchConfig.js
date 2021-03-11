import merge from 'lodash/merge'
import Cookies from 'js-cookie'
import { configureRefreshFetch, fetchJSON } from 'refresh-fetch'

const retrieveToken = () => localStorage.getItem('accessToken')
const saveToken = token => localStorage.setItem('accessToken', token)
const clearToken = () => localStorage.removeItem('accessToken')
const clearLogoutRefreshToken = () => Cookies.remove("logoutRefreshToken")
const serverUrl = 'http://localhost:8080';

const fetchJSONWithToken = (path, options = {}) => {
  const token = retrieveToken()

  let optionsWithToken = options
  if (token != null) {
    optionsWithToken = merge({}, options, {
      credentials: 'include',
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  }

  return fetchJSON(serverUrl + path, optionsWithToken)
}

const login = (login, password) => {
  return fetchJSON(serverUrl + '/auth/login', {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify({
      login,
      password
    })
  })
    .then(response => {
      saveToken(response.body.tokenBearer)
    })
}

const logout = () => {
  return fetchJSONWithToken('/auth/logout', {
    method: 'POST'
  })
    .then(() => {
      clearToken()
      clearLogoutRefreshToken()
    })
}

const shouldRefreshToken = error => error.status === 401

const refreshToken = () => {
  return fetchJSONWithToken('/auth/refresh', {
    method: 'POST'
  })
    .then(response => {
      clearToken()
      saveToken(response.body.tokenBearer)
    })
    .catch(error => {
      // redirect to login page
      throw error
    })
}

const fetch = configureRefreshFetch({
  fetch: fetchJSONWithToken,
  shouldRefreshToken,
  refreshToken
})

export {
  fetch,
  login,
  logout
}