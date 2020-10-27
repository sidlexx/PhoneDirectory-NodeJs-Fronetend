import React from "react";
import AddContact from '../Components/addContact'
import App from '../App'
import Contact  from '../Components/contactlist'

import {
  Router,
  Switch,
  Route,
 
} from "react-router-dom";
import createHistory from 'history/createBrowserHistory';


export const history = createHistory();
const AppRouter = () => (
 
    
    <Router history={history}>
  <div>
      <Switch>
        <Route path="/" component={Contact} exact={true} />
        <Route path="/AddContact" component={AddContact}  />
        
      </Switch>
      </div>
      </Router>


);

export default AppRouter;