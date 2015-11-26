import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import configureStore from './store/configureStore'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Grid } from 'react-bootstrap'

const store = configureStore()

render(
    <Grid>
      <Provider store={store}>
        <App />
      </Provider>
    </Grid>,
      document.getElementById('root')
)
