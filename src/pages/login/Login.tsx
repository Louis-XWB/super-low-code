import React, { FC, useEffect } from 'react'
import { useTitle } from 'ahooks'
import { Button, Checkbox, Form, Space, Typography } from 'antd'
import { UserAddOutlined } from '@ant-design/icons'
import styles from './Login.module.scss'
import Input from 'antd/es/input/Input'
import Password from 'antd/es/input/Password'
import { Link } from 'react-router-dom'
import { REGISTER_PATHNAME } from '../../router'
import { useForm } from 'antd/es/form/Form'

const { Title } = Typography

const USERNAME_KEY = 'username'
const PASSWORD_KEY = 'password'

function rememberUser(username: string, password: string) {
  localStorage.setItem(USERNAME_KEY, username)
  localStorage.setItem(PASSWORD_KEY, password)
}

function forgetUser() {
  localStorage.removeItem(USERNAME_KEY)
  localStorage.removeItem(PASSWORD_KEY)
}

function getRememberedUser() {
  const username = localStorage.getItem(USERNAME_KEY)
  const password = localStorage.getItem(PASSWORD_KEY)
  return { username, password }
}

const Login: FC = () => {
  useTitle('SuperLowCode - 登录')

  const [form] = useForm()

  function onFinish(values: any) {
    console.log('Success:', values)
    const { username, password, remember } = values
    if (remember && username && password) {
      rememberUser(username, password)
    } else {
      forgetUser()
    }
  }

  useEffect(() => {
    const { username, password } = getRememberedUser()
    if (username && password) {
      console.log('username:', username)
      form.setFieldsValue({ username, password })
    }
  }, [])

  return (
    <div className={styles.container}>
      <div>
        <Space>
          <Title level={4}>
            <UserAddOutlined />
          </Title>
          <Title level={4}>用户登录</Title>
        </Space>
      </div>
      <div>
        <Form
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
          onFinish={onFinish}
          form={form}
          initialValues={{ remember: true }}
        >
          <Form.Item label="用户名" name="username">
            <Input />
          </Form.Item>
          <Form.Item label="密码" name="password">
            <Password />
          </Form.Item>
          <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 6 }}>
            <Checkbox>记住我</Checkbox>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 6 }}>
            <Space>
              <Button type="primary" htmlType="submit">
                登录
              </Button>
              <Link to={REGISTER_PATHNAME}>注册新用户</Link>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Login
