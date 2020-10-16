import HomeRoute from '@/pages/home/route';
import AntdRoute from '@/pages/antd/route';
import NotFoundRoute from '@/pages/404/route';
import NoAuthorityRoute from '@/pages/403/route';
import LoginRoute from '@/pages/login/route';
export default [
    ...LoginRoute,
    ...HomeRoute,
    ...AntdRoute,
    ...NoAuthorityRoute,
    ...NotFoundRoute
];


