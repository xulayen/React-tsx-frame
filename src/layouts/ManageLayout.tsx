
import React from 'react';
import { stringify } from 'querystring';
import observerHoc from '@/components/hoc/observerHoc';

import {
    Redirect
} from 'react-router-dom';

class ManageLayout extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
          
        }
    }

    componentWillMount() {

    }

    async componentDidMount() {


    }

    render() {
        const { children } = this.props;
        return (
            <>
                <div>
                    头部
                </div>
                <div>
                    左边
                </div>
                <div>
                    {children}
                </div>
            </>
        )
    }
}



export default ManageLayout;