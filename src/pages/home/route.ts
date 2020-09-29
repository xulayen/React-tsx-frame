import Loadable from '@/components/hoc/lasyHoc';
import ROUTES from '@/constants/routes';
import observerHoc from '@/components/hoc/observerHoc';
const HomePage = Loadable(() => import('../home/index'));

export default [
    {
        path: ROUTES.HOME,
        component: observerHoc(HomePage),
        title: 'React-frame-tsx 框架-首页',
        exact: true
    }
];