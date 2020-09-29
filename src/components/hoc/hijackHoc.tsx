
import React from 'react';

/****
 * 高阶组件-渲染劫持
 */
const hijackRenderHoc = (config: any) => (WrappedComponent: any) => class extends WrappedComponent {
    render() {
        const { style = {} } = config;
        const elementsTree = super.render();
        console.log(elementsTree, 'elementsTree');
        if (config.type === 'add-style') {
            return <div style={{ ...style }}>
                {elementsTree}
            </div>;
        }   
        return elementsTree;
    }
};

export default hijackRenderHoc;