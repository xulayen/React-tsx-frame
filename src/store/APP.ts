
import { observable, action, toJS } from 'mobx'
import { Storage } from '@/utils';

/**
 * 项目APP唯一状态管理器
 *
 * @class APPStore
 */
class APPStore {
    BASE_INFO_STORAGE = 'BASE-INFO';
    @observable
    private _BaseInfo: any = {};
    public get BaseInfo(): any {
        return toJS(this._BaseInfo);
    }
    public set BaseInfo(value: any) {
        this._BaseInfo = value;
    }

    /**
     *创建构造函数
    */
    constructor() {
        this._baseInfoStorage();
    }

    @action async _baseInfoStorage() {
        let value = await Storage.get(this.BASE_INFO_STORAGE);
        this._BaseInfo = value;
    }

    @action getBaseInfo = async () => {
        return await Storage.get(this.BASE_INFO_STORAGE);
    };


    @action setBaseInfo = (info: any) => {
        this._BaseInfo = info;
        Storage.set(this.BASE_INFO_STORAGE, info);
    };



}

export default new APPStore();
