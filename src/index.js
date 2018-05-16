/* global document */

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import App from './containers/App'
import './styles/index.css'
import store from './store'
// import registerServiceWorker from './registerServiceWorker'

const muiTheme = getMuiTheme({
  fontFamily: 'Lato, sans-serif',
  palette: {
    textColor: '#333',
    primary1Color: '#e67e22',
    primary2Color: '#FFBBCC',
  },
  appBar: {
    height: 100,
  },
})

const Wrapper = () => (
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <App />
    </MuiThemeProvider>
  </Provider>
)

ReactDOM.render(<Wrapper />, document.getElementById('root'))
// registerServiceWorker()
