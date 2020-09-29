import React from 'react';
import CreateFromHoc from '@/components/hoc/createFormHoc';
import Store from '@/store';

@CreateFromHoc
class LoginPage extends React.Component<any, any> {

    handleSubmit(e: any) {
        Store.APPStore.setBaseInfo({ Author: '徐大腿', UserInfo: { currentAuthority: "admin" } })
    }

    render() {
        return (
            <div>
                <div>
                    <label id="username">
                        账户
                    </label>
                    <input name="username" {...this.props.getField('username')} />
                </div>
                <div>
                    <label id="password">
                        密码
                    </label>
                    <input name="password" {...this.props.getField('password')} />
                </div>
                <button onClick={this.props.handleSubmit}>
                    提 交  
                </button>
                <div>{Store.APPStore.BaseInfo.UserInfo && Store.APPStore.BaseInfo.UserInfo.currentAuthority}</div>
            </div>
        )
    }

}

export default LoginPage