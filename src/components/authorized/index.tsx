import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Authorized from './authorized';
import SecurityLayout from '@/layouts/SecurityLayout';
import ManageLayout from '@/layouts/ManageLayout';
/**
 * 统一安全布局下路由
 * @param props 属性
 */
function AuthorizedRoute(props: any) {
    return (
        //如果页面存在权限级别访问，则需要进行权限管控
        props.authority ? <SecurityLayout store={props.store}>
            {/* 后台管理系统可在此进行设置管理布局*/}
            <ManageLayout>
                <Authorized
                    authority={props.authority}
                    store={props.store}
                    noMatch={<Route exact={props.exact} key={props.i} {...props.rest} render={() => <Redirect to={{ pathname: props.redirectPath }} />} />}>
                    <Mroute {...props} />
                </Authorized>
            </ManageLayout>
        </SecurityLayout> : <Mroute {...props} />
    );
}


function Mroute(props: any) {
    return <Route exact={props.exact} key={props.i}  {...props.rest} render={propss => {
        return props.render(propss)
    }} />
}


export default AuthorizedRoute;

