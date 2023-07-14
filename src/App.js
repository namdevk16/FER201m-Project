import { BrowserRouter } from 'react-router-dom'
import './App.css';
import ListRoutes from './routes/routes'



function App() {
  return (
    <BrowserRouter>
      <ListRoutes />
    </BrowserRouter>
  );
}

export default App;
