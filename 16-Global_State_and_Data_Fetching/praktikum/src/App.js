import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import About from './components/About';
import About_App from './components/About_App';
import About_Author from './components/About_Author';
import NotFound from './components/NotFound'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './store/store'

function App() {
  return (
      <div className='App'>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path='/about' exact component={About}/>
              <Route path='/about/about-app' exact component={About_App}/>
              <Route path='/about/about-author' exact component={About_Author}/>
              <Route component={NotFound}/>
            </Switch>
          </Router>
        </PersistGate>
      </Provider>

      </div>
  );
}

export default App;



