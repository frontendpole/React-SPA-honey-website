import React from 'react';
import { Route, Switch } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import ProductsPage from '../pages/ProductsPage'
import ProductListPage from '../components/ProductListPage'
import ContactPage from '../pages/ContactPage'
import AdminPanel from '../pages/AdminPanel'
import ErrorPage from '../pages/ErrorPage'
import LoginPage from '../components/LoginPage'

const Page = () => {
  return (
    <>
      <Switch>
        <Route path='/' exact component={HomePage}></Route>
        <Route path='/products' exact component={ProductListPage}></Route>
        <Route path='/product/:id' exact component={ProductsPage}></Route>
        <Route path='/contact' exact component={ContactPage}></Route>
        <Route path='/admin' exact component={AdminPanel}></Route>
        <Route path='/login' exact component={LoginPage}></Route>
        <Route component={ErrorPage}></Route>
      </Switch>
    </>
  )
}

export default Page