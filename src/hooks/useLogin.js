import { useMutation } from '@tanstack/react-query';
import { login } from '../services/authService';

const useLogin = () => {
  return useMutation({
    mutationFn: login,
  });
};

export default useLogin;
