import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import User from './pages/User';

const Router = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='/sign-in' element={<SignIn />} />
      <Route path='/user' element={<User />} />
      {/* NotFound */}
      <Route path='*' element={<Home />} />
    </Routes>
  );
};

export default Router;
