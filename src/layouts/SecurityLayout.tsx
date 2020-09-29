
import React from 'react';
import { stringify } from 'querystring';
import observerHoc from '@/components/hoc/observerHoc';
import ROUTES from '@/constants/routes';

import {
    Redirect
} from 'react-router-dom';

class SecurityLayout extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            isReady: false
        }
    }

    componentWillMount() {

    }

    async componentDidMount() {
        await this.props.store.APPStore.getBaseInfo();
        this.setState({
            isReady: true,
        });


    }

    render() {
        const { children } = this.props;
        // You can replace it to your authentication rule (such as check token exists)
        // 你可以把它替换成你自己的登录认证规则（比如判断 token 是否存在）
        const isLogin = this.props.store.APPStore.BaseInfo.UserInfo && this.props.store.APPStore.BaseInfo.UserInfo.currentAuthority;
        const queryString = stringify({
            redirect: window.location.href,
        });

        if (!this.state.isReady) {
            return "loading...";
        }
        if (!isLogin && window.location.pathname !== ROUTES.LOGIN) {
            const tourl=`${ROUTES.LOGIN}?${queryString}`;
            return <Redirect to={tourl} />;
        }
        return children;
    }
}



export default observerHoc(SecurityLayout);