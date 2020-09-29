

import Loadable from '@/components/hoc/lasyHoc';
import ROUTES from '@/constants/routes';
const AntdPage = Loadable(() => import('.'));
const table = Loadable(() => import('@/components/antd/table'));
export default [
    {
        path: ROUTES.ANTD,
        component: AntdPage,
        title: 'Ant Design',
        authority: ['admin'],
        redirectPath: ROUTES.NO_AUTHORIRY,
        children: [
            {
                path: '/adv',
                component: table,
                title: 'Ant Design1111111111111111',
                children: [
                    {
                        path: '/kkk',
                        component: AntdPage,
                        title: 'Ant 2222222222222222222222222222222222222222222222222',
                        children: [
                            {
                                path: '/99',
                                component: AntdPage,
                                title: '99999999999999999999',
                            }
                        ]
                    }
                ]
            }
        ]
    }
];