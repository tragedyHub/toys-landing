import React from 'react'
import {Switch, Route} from "react-router-dom"
import Home from "./components/Home/Home"

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact render={() => <Home />}></Route>
      </Switch>
    </div>
  )
}

export default App