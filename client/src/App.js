import MainLayout from './MainLayout';
import HomeScreen from './screens/HomeScreen';
import AuthScreen from './screens/AuthScreen';

import './styles/styles.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<HomeScreen />} />
          <Route path='auth' element={<AuthScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
