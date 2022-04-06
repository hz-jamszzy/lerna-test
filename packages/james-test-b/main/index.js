/*
 * @Author: onePunch
 * @Date: 2022-01-20 15:37:26
 * @LastEditors: onePunch
 * @LastEditTime: 2022-04-06 10:22:43
 * @Description: file content
 * @FilePath: \lerna-test\packages\james-test-b\main\index.js
 */
import { add, join } from 'lodash';

const types = ['Arguments', 'Function', 'Array', 'Object', 'String', 'Number', 'Date', 'RegExp', 'Error', 'Symbol', 'Map', 'WeakMap', 'Set', 'WeakSet']
const checkTypeFns = {}
types.forEach(v => {
  checkTypeFns[`is${v}`] = obj => {
    return Reflect.apply(Object.prototype.toString, obj, []) === `[object ${v}]`
  }
})

export const joinFn = (arr, connector) => {
  if(!checkTypeFns['isArray'](arr) || checkTypeFns['isString'](connector)) {
    console.log('入参类型不对');
    return;
  };
  return join(arr, connector);
}

export const sumFn = (a, b) => {
  if(!checkTypeFns['isNumber'](a) || !checkTypeFns['isNumber'](b)) {
    console.log('入参类型不对');
    return;
  };
  return add(a, b);
}