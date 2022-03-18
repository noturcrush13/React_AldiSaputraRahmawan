import './App.css';
import { mockUser } from './mockData';
import Mainpage from './pages/Main';

function App() {
  return (
    <>
      <Mainpage listData={mockUser}/>
    </>
  );
}

export default App;
