import merge from 'lodash/merge'
import { configureRefreshFetch, fetchJSON } from 'refresh-fetch'

const retrieveToken = () => localStorage.getItem('accessToken')
const saveToken = token => localStorage.setItem('accessToken', token)
const clearToken = () => localStorage.removeItem('accessToken')
const serverUrl = 'http://localhost:8080';

const fetchJSONWithToken = (path, options = {}) => {
  const token = retrieveToken()

  let optionsWithToken = options
  if (token != null) {
    optionsWithToken = merge({}, options, {
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
  return fetchJSONWithToken(serverUrl + '/auth/logout', {
    method: 'POST'
  })
    .then(() => {
      clearToken()
    })
}

const shouldRefreshToken = error => error.response.status === 401

const refreshToken = () => {
  return fetchJSONWithToken(serverUrl + '/auth/refresh', {
    method: 'POST'
  })
    .then(response => {
      clearToken()
      saveToken(response.body.tokenBearer)
    })
    .catch(error => {
      // redirect to login page
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