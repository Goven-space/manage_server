import { render } from 'react-dom';
import React from 'react';
import 'antd/dist/antd.css';
import Login from '@pages/login';
import '@icon/iconfont.css';
import './index.scss';

const App = () => {
  return <Login></Login>;
};

render(<App />, document.getElementById('root'));
