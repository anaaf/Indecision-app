import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import AddExpense from '../Components/AddExpense'
import EditExpense from '../Components/EditExpense'
import Error404 from '../Components/Error404'
import ExpenseDashboard from '../Components/ExpenseDashboard'
import Header from '../Components/Header'
import Help from '../Components/Help'

  const AppRouter = () => (
    <div>
    <BrowserRouter> 
       <Header />
       <Switch>
        <Route path="/" component={ExpenseDashboard} exact={true} /> 
        <Route path="/AddExpense" component={AddExpense} /> 
        <Route path="/EditExpense" component={EditExpense} />
        <Route path="/Help" component={Help} />
        <Route component={Error404} />
       </Switch>  
       </BrowserRouter>  
    </div>
  ) 
    
  export default AppRouter; 
  