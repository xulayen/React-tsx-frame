/**
 * 校验当前组件是否拥有权限
 * @param props 属性
 */
function Authorized(props: any) {
  const { children, authority, noMatch, store } = props;
  const userInfo = store.APPStore.BaseInfo.UserInfo;
  const { currentAuthority } = userInfo || {};
  if (!authority) return children;
  const _authority = Array.isArray(authority) ? authority : [authority];
  if (_authority.includes(currentAuthority)) return children;
  return noMatch;
}

export default Authorized;