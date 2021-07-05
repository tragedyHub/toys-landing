import React from 'react'
import {Switch, Route} from "react-router-dom"
import Article from './components/Article/Article'
import Blog from './components/Blog/Blog'
import Catalog from './components/Catalog/Catalog'
import Home from "./components/Home/Home"
import ToyPage from './components/ToyPage/ToyPage'
import Tarifs from './components/Tarifs/Tarifs'
import Registration from './components/Registration/Registration'
import Login from './components/Login/Login'
import Order from './components/Order/Order'

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact render={() => <Home />}></Route>
        <Route path="/catalog" exact render={() => <Catalog />}></Route>
        <Route path="/catalog/item" exact render={() => <ToyPage />}></Route>
        <Route path="/blog" exact render={() => <Blog />}></Route>
        <Route path="/blog/article" exact render={() => <Article />}></Route>
        <Route path="/tarifs" exact render={() => <Tarifs />}></Route>
        <Route path="/register" exact render={() => <Registration />}></Route>
        <Route path="/login" exact render={() => <Login />}></Route>
        <Route path="/order" exact render={() => <Order />}></Route>
      </Switch>
    </div>
  )
}

export default App