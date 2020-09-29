import Loadable from '@/components/hoc/lasyHoc';
import ROUTES from '@/constants/routes';
import observerHoc from '@/components/hoc/observerHoc';
const NotFontPage = Loadable(() => import('./index'));

export default [
    {
        path: ROUTES.NOT_FOUND_PAGE,
        component: observerHoc(NotFontPage),
        title: 'React-frame-tsx 框架'
    }
];