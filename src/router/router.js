import HomePage from '../page/HomePage/page/HomePage';
import IndividulDetail from '../page/IndividulDetail/IndividulDetail';

const routerList = [
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
