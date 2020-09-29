
import { observer } from "mobx-react";
const observerHoc = (WrappedComponent: any) => {
  return observer(WrappedComponent);
}

/*****
 * 高阶组件，为组件绑定设置mobx
 */
export default observerHoc;