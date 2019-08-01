import React from 'react'
import 'normalize.css/normalize.css'
import '../styles/App.css'
import { Provider } from 'react-redux'
import store from '../store'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import WeatherSelect from './WeatherSelect'

export default props => {
  return (
    <Provider store={store}>
      <Router>
      <div>
        <Route path="/" component={WeatherSelect}></Route>
      </div>
      </Router>
    </Provider>
  )
}