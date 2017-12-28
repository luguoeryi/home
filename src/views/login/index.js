/**
 * Revised by zhusass on 2017/11/13.
 */

import React from 'react'
import { Form, Icon, Input, Button, Checkbox, } from 'antd'

import './index.less'

const FormItem = Form.Item

class Logo extends React.Component {
    render() {
        return <div className="logo-wrap">
            <div className="login-img">
                <i className="login-img-font icon-logo"></i>
            </div>
        </div>
    }
}

class LoginForm extends React.Component{
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('values:', values)
                this.props.history.replace('/', { some: 'state' })
            }
        })
    }

    render() {
        const { getFieldDecorator } = this.props.form;

        return <div className="loginforms">
                <Form onSubmit={this.handleSubmit} className="loginforms-main">
                    <FormItem>
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: '请输入账号!' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="请输入账户" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: '请输入密码!' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="请输入密码" />
                        )}
                    </FormItem>
                    <FormItem>
                        <div className="main-operation">
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(
                                <Checkbox>记住我</Checkbox>
                            )}
                            <a className="login-form-forgot" href="">忘了密码</a>
                        </div>

                        <Button type="primary" htmlType="submit" className="main-operation-button">
                            登入
                        </Button>
                        <div className="main-sign">
                           或者 <a href="">注册!</a>
                        </div>
                    </FormItem>
                </Form>
        </div>
    }
}

const WrappedNormalLoginForm = Form.create()(LoginForm)

class Login extends React.Component {
    render() {
        return <div className="login-wrap">
            <div className="login-main">
                <div className="main-logo">
                    <Logo/>
                </div>
                <div className="main-form">
                    <WrappedNormalLoginForm history={this.props.history}/>
                </div>
            </div>
        </div>
    }
}

export default Login
