import React from 'react';

/****
 * 高阶组件-表单操作
 */
export default (WrappedComponent: any) => class formCreate extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    this.state = {
      fields: {},
    }
  }
  onChange = (key: any) => {
    return (e: any) => {
      const { fields } = this.state;
      fields[key] = e.target.value;
      this.setState({
        fields,
      })
    }
  }
  handleSubmit = (e: any) => {
    new WrappedComponent(this.props).handleSubmit(e);
    console.log(this.state.fields);
  }
  getField = (fieldName: any) => {
    return {
      onChange: this.onChange(fieldName),
    }
  }
  render() {
    const props = {
      ...this.props,
      handleSubmit: this.handleSubmit,
      getField: this.getField,
    }
    return (<WrappedComponent
      {...props}
    />);
  }
};