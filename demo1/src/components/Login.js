import React from 'react';
import styles from './Login.css';
import {cookie} from 'cookie_js';
console.log(cookie)
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;
// cookie.set('key1', 'Abcdefg');
// alert(cookie.get('key'));

function Login({ form: {
    getFieldDecorator,
  validateFieldsAndScroll,
  }, dispatch, userName }) {
  function handleOk() {
    validateFieldsAndScroll((errors, values) => {
      if (errors) {
        return
      }
      dispatch({ type: "login/login", payload: values });
    })
  }
  return (
    <Form className="login-form">
     <span style={{color:'red'}}>1 {userName}</span>
      <FormItem>
        {
          getFieldDecorator('userName')(<Input autoComplete="off" size="large" type="userName" onPressEnter={handleOk} placeholder="用户名" />)
        }
      </FormItem>
      <FormItem>
        {getFieldDecorator('passWord', {
          rules: [
            {
              required: true,
              message: '请填写密码',
            },
          ],
        })(<Input autoComplete='off' size="large" type="passWord" onPressEnter={handleOk} placeholder="密码" />)}
      </FormItem>
      <Button type="primary" onClick={handleOk} htmlType="submit" className="login-form-button">
        登录
          </Button>
      <FormItem>
        <Checkbox>Remember me</Checkbox>
        <a className="login-form-forgot">Forgot password</a> Or <a>注册!</a>
      </FormItem>
    </Form>
  );
}

export default Form.create()(Login);
