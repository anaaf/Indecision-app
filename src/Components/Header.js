import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'

const Header = () => (
    <div>
    <h1>Expensify</h1>
    <div><NavLink to="/" activeClassName="is-active" exact={true}> Expense Dashboard </NavLink></div>
    <div><NavLink to="/AddExpense" activeClassName="is-active"> Add Expense </NavLink></div>
    <div><NavLink to="/EditExpense" activeClassName="is-active"> Edit Expense </NavLink></div>
    <div><NavLink to="/Help" activeClassName="is-active"> Help </NavLink> </div>
    </div>
  )

  export default Header