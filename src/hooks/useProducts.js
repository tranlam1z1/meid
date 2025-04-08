import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../utils/axiosInstance';

const fetchProducts = async () => {
  const { data } = await axiosInstance.get('/products');
  return data;
};

const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });
};

export default useProducts;
