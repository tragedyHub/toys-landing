import React from 'react'
import {Switch, Route} from "react-router-dom"
import Article from './components/Article/Article'
import Blog from './components/Blog/Blog'
import Catalog from './components/Catalog/Catalog'
import Home from "./components/Home/Home"
import ToyPage from './components/ToyPage/ToyPage'

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact render={() => <Home />}></Route>
        <Route path="/catalog" exact render={() => <Catalog />}></Route>
        <Route path="/catalog/item" exact render={() => <ToyPage />}></Route>
        <Route path="/blog" exact render={() => <Blog />}></Route>
        <Route path="/blog/article" exact render={() => <Article />}></Route>
      </Switch>
    </div>
  )
}

export default App