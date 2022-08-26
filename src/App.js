import { Routes, Route } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import About from './components/About/About';
import { TaskStack } from './components/TaskStack/TaskStack';

function App() {
  return (
    <>
      {/* <div className="container"> */}
      <TaskStack />
      <Footer />
      {/* </div> */}
    </>
  );
}

export default App;
