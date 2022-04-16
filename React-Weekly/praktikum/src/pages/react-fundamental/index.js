import { mockUser } from './mockData';
import Mainpage from './Main';

function App() {
  return (
    <>
      <Mainpage listData={mockUser}/>
    </>
  );
}

export default App;