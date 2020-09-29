import React from 'react'

import {
    BrowserRouter as Router,
    // Route,
    Switch
} from 'react-router-dom';
import { Provider } from 'mobx-react';
// import { createBrowserHistory } from "history";
import routes from './routes';
import Store from '@/store';
import AuthorizedRoute from '@/components/authorized';
// const history = createBrowserHistory();

class MainRoute extends React.Component {




    /**
     * 构建有登录状态、权限的路由，支持N及目录；父节点无权限，则子节点无权限
     * @param config 路由配置
     */
    StructureRouteConfig(config: object[], parent?: any): any {
        return config.map((route: any, i: any) => {
            const { path, component, authority, redirectPath, exact, ...rest } = route, currentNode = (
                <AuthorizedRoute
                    exact={exact}
                    key={i}
                    path={path}
                    authority={parent ? parent.authority : authority}
                    redirectPath={redirectPath}
                    store={Store}
                    {...rest}
                    render={(props: any) => (
                        document.title = route.title || "React-frame-tsx 框架",
                        // pass the sub-routes down to keep nesting
                        <route.component
                            {...props}
                            store={Store}
                            {...rest}
                        />
                    )}
                />
            );
            if (route.children && route.children.length > 0) {
                //父节点的权限会渗透给子路由，路由层层嵌套
                for (var index in route.children) {
                    route.children[index].authority = route.authority;
                    route.children[index].path = route.path + route.children[index].path;
                }

                let parentNode = this.StructureRouteConfig(route.children, route);
                return [parentNode, currentNode]
            }

            return currentNode;
        });
    }


    render() {
        return (

            <Provider>
                <Router>
                    <Switch>
                        {/* {routes.map((route, i) => (
                            <Route
                                exact
                                key={i}
                                path={route.path}
                                location={history.location}

                                render={props => (
                                    document.title = route.title || "首页",
                                    // pass the sub-routes down to keep nesting
                                    <route.component
                                        {...props}
                                        store={Store}
                                    />
                                )}
                            />
                        ))} */}



                        {/* {routes.map((route: any, i) => {

                            const { path, component, authority, redirectPath, exact, ...rest } = route;
                            return (

                                <AuthorizedRoute
                                    exact={exact}
                                    key={i}
                                    path={path}
                                    authority={authority}
                                    redirectPath={redirectPath}
                                    store={Store}
                                    {...rest}
                                    render={(props: any) => (
                                        document.title = route.title || "首页",
                                        // pass the sub-routes down to keep nesting
                                        <route.component
                                            {...props}
                                            store={Store}
                                            {...rest}
                                        />
                                    )}
                                />
                            )

                        })} */}


                        {
                            this.StructureRouteConfig(routes)
                        }

                    </Switch>
                </Router>
            </Provider>
        )
    }

}


export default MainRoute;

