import React from 'react'
// import Sidebar from './Sidebar'
// import "./css/sidebar.css"
import Header from './Head-Page'
import BodyForm from './Body-Form';
import BodyList from './Body-List';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './store/store'

export default function Home(props) {
  return (
    <div className='App'>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Header title="To Do App"/>
          {/* <Sidebar /> */}
          <BodyForm/>
          <BodyList />
        </PersistGate>
      </Provider>
    </div>
  )
}
