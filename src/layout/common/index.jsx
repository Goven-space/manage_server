import React from 'react';
import { Layout } from 'antd';
import Header from './header';
import Sider from './sider';


function LayoutWrapper(props) {
  return (
    <Layout>
      <Layout.Sider>
        <Sider menuList={props.menuList} />
      </Layout.Sider>
      <Layout>
        <Layout.Header>
          <Header />
        </Layout.Header>
        <Layout.Content>
          {props.children}
        </Layout.Content>
      </Layout>
    </Layout>
  );
}

export default LayoutWrapper;