/*
 * @Author: zyq
 * @Date: 2022-10-05 15:32:26
 * @Last Modified by: zyq
 * @Last Modified time: 2022-10-05 19:03:54
 */

//表单验证正则表达式的封装
const formValidation = {
  //手机号验证
  validate: (rule: any, value: string, callback: Function) => {
    const regMobile = /^1(3|4|5|7|8|9)\d{9}$/;
    const regEmail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    if (!regMobile.test(value) && !regEmail.test(value)) {
      callback('请输入正确的手机号或邮箱');
    } else {
      callback();
    }
  },
  // 邮箱验证
  email: (rule: any, value: string, callback: Function) => {
    const regEmail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    if (!regEmail.test(value)) {
      callback('请输入正确的邮箱号！');
    } else {
      callback();
    }
  },
};

export default formValidation;
