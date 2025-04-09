import HomePage from '../page/HomePage/HomePage';
import IndividulDetail from '../page/IndividulDetail/IndividulDetail';
import ProductList from '../page/ProductList';

const routerList = [
  {
    path: '/product',
    component: <ProductList />,
  },
  {
    path: '/individual-detail',
    component: <IndividulDetail />,
  },
  {
    path: '/',
    component: <HomePage />,
  },
];

export default routerList;
