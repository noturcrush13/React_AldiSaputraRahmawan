import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import About from './components/About';
import About_App from './components/About_App';
import About_Author from './components/About_Author';
import NotFound from './components/NotFound'

function App() {
  return (
    <>
      <div className='App'>
        <Router>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path='/about' exact component={About}/>
            <Route path='/about/about-app' exact component={About_App}/>
            <Route path='/about/about-author' exact component={About_Author}/>
            <Route component={NotFound}/>
          </Switch>
        </Router>
      </div>

    </>
  );
}

export default App;

// class App extends Component {
//   constructor(){
//     super();

//     this.state = {
//       lists
//     }
//   }


//   render () {
//     return (
//       <>
//         <div className='App'>
//           <Router>
//             <Switch>
//               <Route path="/" exact component={Home}/>
//               <Route path='/about' exact component={About}/>
//               <Route path='/about/about-app' exact component={About_App}/>
//               <Route path='/about/about-author' exact component={About_Author}/>
//               <Route component={NotFound}/>
//             </Switch>
//           </Router>
//         </div>
//       </>
//     );
//   }
// }