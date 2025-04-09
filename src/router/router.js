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
];

export default routerList;
