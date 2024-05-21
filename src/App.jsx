import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Logo from './components/Logo/Logo';
import Game from './components/Game/Game';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={
          <main className='h-screen grid place-items-center'>
            <Logo />
            <Game />
          </main>
        } />
      </Routes>
    </Router>
  );
}