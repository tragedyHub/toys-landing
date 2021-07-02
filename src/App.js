import React from 'react'
import {Switch, Route} from "react-router-dom"
import Catalog from './components/Catalog/Catalog'
import Home from "./components/Home/Home"

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact render={() => <Home />}></Route>
        <Route path="/catalog" exact render={() => <Catalog />}></Route>
      </Switch>
    </div>
  )
}

export default App