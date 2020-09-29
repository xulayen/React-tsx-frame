
import { observable, action } from 'mobx'
import { Api } from '@/utils'

class HomeStore {
    @observable
    private _txtMobile = '';
    public get txtMobile() {
        return this._txtMobile;
    }
    public set txtMobile(value) {
        this._txtMobile = value;
    }

    constructor() {
        this.getCode();
    }

    @action getCode = async () => {
        let res = await Api.getCode({
            params: {
                redirectUrl: `http://baidu.com`,
                scope: '1'
            }
        });
        this._txtMobile = res && res.systemState;
    }

}

export default new HomeStore();