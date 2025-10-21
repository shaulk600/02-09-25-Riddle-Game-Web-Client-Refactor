import { Route, Routes } from 'react-router';
// import LoginRegisterPage from '../accounts/LoginRegisterPage';
import GamePage from '../game/GamePage';

export default function RoutesGame() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<GamePage />} />
      </Routes >
    </div>
  )
}
