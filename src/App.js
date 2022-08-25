import { BrowserRouter as Routes, Route } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import { TaskStack } from './components/TaskStack/TaskStack';

function App() {
  return (
    <Routes>
      <div className="container">
        <TaskStack />

        <Footer />
      </div>
    </Routes>
  );
}

export default App;
