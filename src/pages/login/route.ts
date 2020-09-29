import Loadable from '@/components/hoc/lasyHoc';
import ROUTES from '@/constants/routes';
import observerHoc from '@/components/hoc/observerHoc';
const LoginPage = Loadable(() => import('./index'));

export default [
    {
        path: ROUTES.LOGIN,
        component: observerHoc(LoginPage),
        title: 'React-frame-tsx 框架 登录'
    }
];