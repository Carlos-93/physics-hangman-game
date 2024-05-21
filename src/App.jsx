import Logo from './components/Logo/Logo';
import Game from './components/Game/Game';

export default function App() {
  return (
    <main className='h-screen flex items-center justify-center'>
      <Logo />
      <Game />
    </main>
  );
}