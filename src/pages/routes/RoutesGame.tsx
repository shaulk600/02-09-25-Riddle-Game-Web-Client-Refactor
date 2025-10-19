import { Route, Routes } from 'react-router';
import LoginRegisterPage from '../accounts/LoginRegisterPage';

export default function RoutesGame() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginRegisterPage />} />
      </Routes >
    </div>
  )
}
