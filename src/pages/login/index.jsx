import React from 'react';
import {
  Layout,
  Row,
  Col,
  Form,
  Card,
  Input,
  Button,
  notification,
} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {userLogin} from '@api/apiManager';
import './index.scss';

const { Item } = Form;

function Login(props) {

  const onSubmit = (data) => {
    userLogin(data).then((res) => {
      console.log(res);
    });
  };

  return (
    <Row justify="space-around" align="middle" className="login-wrapper">
      <Col>
        <div className="login-container">
          <div className="login-title">XXX后台管理系统</div>
          <div className="login-content">
            <Row justify="space-around" align="middle">
              <Col>
                <h2 className="iconfont icon-yonghu"></h2>
              </Col>
            </Row>
            <Form
              className="login-form"
              onFinish={onSubmit}
              wrapperCol={{ span: 16, offset: 4 }}
            >
              <Item name="userName">
                <Input
                  placeholder="请输入用户名"
                  prefix={<UserOutlined />}
                />
              </Item>
              <Item name="password">
                <Input
                  placeholder="请输入密码"
                  prefix={<LockOutlined />}
                />
              </Item>
              <Item wrapperCol={{ offset: 4 }}>
                <Button
                  className="login-form-button"
                  type="primary"
                  htmlType="submit"
                >
                  登录
                </Button>
              </Item>
            </Form>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default Login;
