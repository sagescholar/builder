import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NewPage from './pages/NewPage';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/new-page" element={<NewPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;