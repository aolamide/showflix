import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Provider } from 'react-redux'
import './App.css';
// import SideBar from './components/SideBar/SideBar';
import Home from './pages/Home/Home';
import store from './redux/store';
import Movie from './pages/Movie/Movie';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path='/movie/view/:id' exact>
          <Movie />
        </Route> 
          <Route path='/'>
            <Home />
          </Route>

        </Switch>
        
        
      </Router>
    </Provider>
  );
}

export default App;
