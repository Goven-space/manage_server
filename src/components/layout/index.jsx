import React from 'react';
import {Layout} from 'antd';
import Header from '../header';


function LayoutWrapper(props) {
  return (
    <Layout>
      <Layout.Header>
        <Header />
      </Layout.Header>
      <Layout.Content>
        {props.content}
      </Layout.Content>
    </Layout>
  );
}

export default Layout;