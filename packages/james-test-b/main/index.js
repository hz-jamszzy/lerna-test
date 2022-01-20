/*
 * @Author: onePunch
 * @Date: 2022-01-20 15:37:26
 * @LastEditors: onePunch
 * @LastEditTime: 2022-01-20 15:37:26
 * @Description: file content
 * @FilePath: \lerna-test\packages\test-b\main\index.js
 */
import { add } from 'lodash';

const checkType = (type, value) => {
  return typeof value === type;
}

export const sumFn = (a, b) => {
  if(!checkType('number', a) || !checkType('number', b)) return;
  return add(a, b);
}