import React from 'react'
import { Switch, Route } from 'react-router-dom';
/**
 * Components
 */
import Home from './components/Home/home';
import BookView from './components/Books';
import User from './components/Admin';
import UserPosts from './components/Admin/userPosts';
import Logout from './components/Admin/logout';


/**
 * Containers
*/ 
import Login from './containers/Admin/login';
import AddReview from './containers/Admin/add';
import EditReview from './containers/Admin/edit';
import Register from './containers/Admin/register';


/**
 * High Order Component(HOC)
 */
import Layout from './hoc/layout';
import Auth from './hoc/auth';


const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Auth(Home, null)} />
        <Route path="/login" exact component={Auth(Login, false)} />
        <Route path="/user/logout" exact component={Auth(Logout, true)} />
        <Route path="/user" exact component={Auth(User, true)} />
        <Route path="/user/add" exact component={Auth(AddReview,true)}/>
        <Route path="/user/register" exact component={Auth(Register,true)}/>
        <Route path="/user/edit-post/:id" exact component={Auth(EditReview,true)}/>
        <Route path="/books/:id" exact component={Auth(BookView,null)} />
        <Route path="/user/user-reviews" exact component={Auth(UserPosts,true)} />
      </Switch>
    </Layout>
  )
}


export default Routes;
