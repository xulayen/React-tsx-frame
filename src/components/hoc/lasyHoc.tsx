import * as React from 'react';
import { Spin, Space } from 'antd';
const Loading: React.SFC<any> = () => {

    return <div style={{ textAlign: "center"}}>
        <Space size="large">
            <Spin size="large" />
        </Space>
    </div>;
};

/**
 * 高阶组件，懒加载组件
 * @param loader 组件
 */
export default function (loader: any) {
    const OtherComponent = React.lazy(loader);
    return function MyComponent(props: any) {
        return (
            <React.Suspense fallback={<Loading />}>
                <OtherComponent {...props} />
            </React.Suspense>
        );
    };
}


