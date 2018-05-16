/* global localStorage */

import * as types from '../constants'

const initialState = {
  user: null,
  loading: false,
  accessToken: null,
  error: null,
  registerErrors: [],
  registered: false,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case types.REHYDRATE_TOKEN:
      return {
        ...state,
        user: action.payload.email ? { ...state.user, email: action.payload.email } : null,
        accessToken: action.payload.accessToken,
      }

    case types.CLEAR_ERROR:
      return {
        ...state,
        error: null,
      }

    case types.CLEAR_MESSAGE:
      return {
        ...state,
        message: null,
      }

    case types.REGISTER_USER:
      return {
        ...state,
        registered: false,
        loading: true,
      }

    case types.REGISTER_USER_SUCCESS:
      return {
        ...state,
        error: null,
        registered: true,
        registerErrors: [],
        loading: false,
      }

    case types.REGISTER_USER_FAIL:
      return {
        ...state,
        registered: false,
        error: action.payload.message,
        registerErrors: action.payload.error,
        loading: false,
      }

    case types.LOGOUT:
      // Reducers shouldn't have side effects... migrate to redux-persist later
      localStorage.removeItem('email')
      localStorage.removeItem('accessToken')
      return {
        ...state,
        accessToken: null,
        user: null,
      }

    case types.LOGIN:
      return {
        ...state,
        loading: true,
      }

    case types.LOGIN_SUCCESS: {
      // Reducers shouldn't have side effects... migrate to redux-persist later
      localStorage.setItem('accessToken', action.payload.accessToken)
      localStorage.setItem('email', action.payload.user.email)
      return {
        ...state,
        loading: false,
        // temp workaround for not receiving a user at login and having
        // to specify the user email when retrieving the logged in user (/api/user/{email})
        user: action.payload.user,
        accessToken: action.payload.accessToken,
      }
    }

    case types.LOGIN_FAIL: {
      return {
        ...state,
        loading: false,
        accessToken: null,
        error: action.payload.message,
      }
    }

    case types.GET_USER: {
      return {
        ...state,
        loading: true,
      }
    }

    case types.GET_USER_SUCCESS: {
      return {
        ...state,
        loading: false,
        user: action.payload,
      }
    }

    case types.GET_USER_FAIL: {
      return {
        ...state,
        loading: false,
        user: null,
        error: 'Failed to retrieve user',
      }
    }

    case types.SET_USER: {
      return {
        ...state,
        loading: true,
      }
    }

    case types.SET_USER_SUCCESS: {
      const userData = { ...action.payload.userData }
      const newUser = { ...state.user }

      Object.keys(userData).forEach(key => (newUser[key] = userData[key])) //eslint-disable-line

      return {
        ...state,
        loading: false,
        user: newUser,
        message: action.payload.message,
        success: action.payload.success,
      }
    }

    case types.SET_USER_FAIL: {
      return {
        ...state,
        loading: false,
        message: action.payload.message,
        success: action.payload.success,
      }
    }

    default:
      return state
  }
}
