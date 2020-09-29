/**
 * 拍平数据
 *
 * @memberof MainRoute
 */
function flatten(arr: any[]): any {
    if (arr)
        return [].concat(...arr.map(item => [].concat(item, ...flatten(item.children ? item.children : []))));
    return null;
}

export default {
    flatten
}