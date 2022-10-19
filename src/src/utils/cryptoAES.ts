/*
 * @Author: zyq
 * @Date: 2022-10-18 20:49:26
 * @Last Modified by: zyq
 * @Last Modified time: 2022-10-19 11:35:23
 */

const CryptoJS = require('crypto-js'); //引用AES源码js
// 字符串转hex
let keystr = '0123456789ABCDEF'; //密钥
let ivstr = '0123456789101112'; //偏移量

// console.log('密钥：', keystr);
// console.log('偏移量：', ivstr);

const string_to_hex = function (str: any) {
  let tempstr = '';
  for (let i = 0; i < str.length; i++) {
    if (tempstr === '') tempstr = str.charCodeAt(i).toString(16);
    else tempstr += str.charCodeAt(i).toString(16);
  }
  return tempstr;
};
let key = string_to_hex(keystr);
key = CryptoJS.enc.Hex.parse(key);
ivstr = string_to_hex(ivstr);
let iv = CryptoJS.enc.Hex.parse(ivstr);

//加密
function Encrypt(word: any) {
  const enc = CryptoJS.AES.encrypt(word, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });
  const enced = enc.ciphertext.toString();
  return enced;
}

//解密
function Decrypt(word: any) {
  const dec = CryptoJS.AES.decrypt(CryptoJS.format.Hex.parse(word), key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });
  const decstr = CryptoJS.enc.Utf8.stringify(dec);
  return decstr;
}

export { Decrypt, Encrypt };
