/*
 * @Author: onePunch
 * @Date: 2022-01-20 15:33:44
 * @LastEditors: onePunch
 * @LastEditTime: 2022-01-20 15:41:37
 * @Description: file content
 * @FilePath: \lerna-test\packages\james-test-a\main\index.js
 */
import { sumFn } from 'james-test-b';

export const parseIntSum = (a, b) => {
  const sumRes = sumFn(a, b)
  return sumRes ? parseInt(String(sumRes)) : 'not-number';
}