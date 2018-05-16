import * as types from '../constants'

const initialState = {
  users: [],
  loading: false,
  searching: false,
  foundUser: null,
  count: 0,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case types.GET_USERLIST:
      return {
        ...state,
        loading: true,
      }

    case types.GET_USERLIST_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload.users,
        count: action.payload.count,
      }

    case types.CHECK_IN_USER_SUCCESS: {
      const users = [...state.users]
      users.forEach((user) => {
        if (user.email === action.payload) {
          user.checkedIn = true // eslint-disable-line
        }
      })

      const foundUser = { ...state.foundUser }

      // Update found user, if any
      if (foundUser && foundUser.email === action.payload) {
        foundUser.checkedIn = true
      }

      return {
        ...state,
        users,
        foundUser,
      }
    }

    case types.CHECK_IN_USER_FAIL:
      return {
        ...state,
        error: action.payload.error,
      }

    case types.USER_SEARCH:
      return {
        ...state,
        searching: true,
      }

    case types.USER_SEARCH_SUCCESS:
      return {
        ...state,
        searching: false,
        foundUser: action.payload,
      }

    case types.USER_SEARCH_FAIL:
      return {
        ...state,
        searching: false,
        error: action.payload.error,
      }

    case types.CLEAR_FOUND_USER:
      return {
        ...state,
        foundUser: null,
      }

    case types.CLEAR_ERROR:
      return {
        ...state,
        error: null,
      }

    default:
      return state
  }
}
