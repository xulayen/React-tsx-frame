import Loadable from '@/components/hoc/lasyHoc';
import ROUTES from '@/constants/routes';
import observerHoc from '@/components/hoc/observerHoc';
const NoAuthorityPage = Loadable(() => import('./index'));

export default [
    {
        path: ROUTES.NO_AUTHORIRY,
        component: observerHoc(NoAuthorityPage),
        title: 'React-frame-tsx 框架'
    }
];