import React from 'react';
import LoginComponent from '@/components/login'
import hihackHoc from '@/components/hoc/hijackHoc'

//@hihackHoc({type: 'add-style', style: { color: 'red'}})
class LoginPage extends React.Component {
    render() {
        return (
            <div>
                <LoginComponent {...this.props} />
            </div>
        )
    }
}

export default hihackHoc({ type: 'add-style', style: { color: 'red' } })(LoginPage);
//export default LoginPage;