import './App.css';
import Menu from './Menu';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routes from './route-config'
import configureValidations from './Validations';

configureValidations();

function App() {
  

  return (
    <BrowserRouter>
      <Menu />
      <div className="container">
        <Switch>
          {routes.map(route => 
          <Route key={route.path} path={route.path} exact={route.exact}>
            <route.component />
          </Route>)}
        </Switch>
      </div>
      <footer className="bd-footer py-5 mt-5 bg-light">
            <div className="container">
                React Movies {new Date().getFullYear().toString()}
            </div>
      </footer>
    </BrowserRouter>
  )
}

export default App;
