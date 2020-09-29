import RStorage from 'react-native-storage';

//var RStorage = import('react-native-storage');
const _storage = new RStorage({
    // maximum capacity, default 1000
    size: 10000,

    // Use AsyncStorage for RN apps, or window.localStorage for web apps.
    // If storageBackend is not set, data will be lost after reload.
    storageBackend: window.localStorage, // for web: window.localStorage

    // expire time, default: 1 day (1000 * 3600 * 24 milliseconds).
    // can be null, which means never expire.
    defaultExpires: 1000 * 3600 * 24,

    // cache data in the memory. default is true.
    enableCache: true,

});

var Storage = {
    /**
     *
     * 设置值
     * @param {string} key 键，Do not use underscore("_") in key!
     * @param {*} value 值
     * @param {*} [expires=null] 过期时间
     * 
     */
    set(key: string, value: any, expires: number = 1000 * 3600 * 24) {//增加
        if (key.indexOf('_') > -1) {
            console.error('plase do not use _ in KEY!')
            return;
        }
        _storage.save({
            key: key, // Note: Do not use underscore("_") in key!
            data: value,
            // if expires not specified, the defaultExpires will be applied instead.
            // if set to null, then it will never expire.
            expires: expires
        });
    },
    async get(key: any) {//获取
        return await _storage
            .load({
                key: key,

                // autoSync (default: true) means if data is not found or has expired,
                // then invoke the corresponding sync method
                autoSync: true,

                // syncInBackground (default: true) means if data expired,
                // return the outdated data first while invoking the sync method.
                // If syncInBackground is set to false, and there is expired data,
                // it will wait for the new data and return only after the sync completed.
                // (This, of course, is slower)
                syncInBackground: false,

                // you can pass extra params to the sync method
                // see sync example below
                syncParams: {
                    extraFetchOptions: {
                        // blahblah
                    },
                    someFlag: true
                }
            })
            .then((ret: any) => {
                // found data go to then()
                return ret;
            })
            .catch((err: any) => {
                return {};
            });

    },
    remove(key: any) {//删除
        // remove a single record
        _storage.remove({
            key: key
        });
    }

};

export default Storage;