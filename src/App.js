import React   from 'react';
import { BrowserRouter as Router , Route , Switch , Redirect } from 'react-router-dom';
 
import NoMatch from './pages/NoMatch';
import Home from './pages/Home';
import Admin from './admin';



class App extends React.Component{
  render(){
    return (
      <Router>
        <Admin>
          <Switch>
            <Route path="/common" component={NoMatch} />
            <Route path="collections" component={NoMatch} />
            <Route path="/topic" component={NoMatch} /> 
            <Route path="/menu"  component={NoMatch} />
            <Route path="/" render={()=>(
              <Switch>
                <Route path="/home" component={Home} />
                <Redirect to="/home" />
              </Switch>
            )} />
            
          </Switch>
        </Admin>
      </Router>
    )
  }
}




export default App;
