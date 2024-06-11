import { useContext } from 'react';
import UserContext from '../../context/UserContext';

// personalized hook for request user context
export const useUser = () => {
  return useContext(UserContext);
};
