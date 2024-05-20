import Game from "./components/game/Game";
import Logo from "./components/logo/Logo";

export default function App() {
  return (
    <main className='h-screen grid place-items-center'>
      <Logo />
      <Game />
    </main>
  );
}