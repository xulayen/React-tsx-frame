/****
 * 高阶组件-反向继承
 */
const iiHoc = (WrappedComponent:any) => class extends WrappedComponent {
    render() {
        console.log(this.state, 'state');
      return super.render();
    }
};

export default iiHoc;