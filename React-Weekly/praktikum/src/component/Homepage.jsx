import React from 'react'
import NavBar from './NavigationBar'
import BasicForm from '../pages/basic-form'
import EventHandling from '../pages/event-handling'
import GlobalState from '../pages/global-state'
import IntroductionReact from '../pages/introduction-react'
import ReactFundamental from '../pages/react-fundamental'
import ReactHook from '../pages/react-hook'
import Header from './Introduction'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

export default function Homepage() {
  return (
    <div>
      <NavBar/>
      <Router>
          <Switch>
            <Route path="/" exact component={Header}/>
            <Route path='/introduction-react' exact component={IntroductionReact}/>
            <Route path='/react-fundamental' exact component={ReactFundamental}/>
            <Route path='/event-handling' exact component={EventHandling}/>
            <Route path='/react-hook' exact component={ReactHook}/>
            <Route path='/basic-form' exact component={BasicForm}/>
            <Route path='/global-state' exact component={GlobalState}/>
            {/* <Route component={NotFound}/> */}
          </Switch>
        </Router>
      {/* <BasicForm/> */}
      {/* <EventHandling/> */}
      {/* <GlobalState/> */}
      {/* <IntroductionReact/> */}
      {/* <ReactFundamental/> */}
      {/* <ReactHook/> */}
    </div>
  )
}
