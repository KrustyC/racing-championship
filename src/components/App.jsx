import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Landing from './scenes/landing'
import About from './scenes/about'
import Navbar from './shared/navbar'
import NotFound from './shared/not-found'
import Footer from './shared/footer'
import '../assets/scss/main.scss'

const App = () => (
  <Router>
    <div>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path='/me' component={About} />
        <Route path='*' component={() => (<NotFound />)} />
      </Switch>
      <Footer/>
    </div>
  </Router>
)

export default App
