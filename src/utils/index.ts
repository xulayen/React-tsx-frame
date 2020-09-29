import Storage from './local';
import lodash from 'lodash';
import Generator from './generator';
import { HttpApi } from '@/config';
import Tool from './tool';


//不改变原始对象结构
var apis = lodash.cloneDeep(HttpApi);
let Api:any = new Generator(apis);

export {
    Storage,
    Api,
    Tool
}