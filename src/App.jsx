import React from 'react';
import 'antd/dist/antd.css';
// import Login from '@pages/login';
// import NotFound from '@pages/notFound';
import '@icon/iconfont.css';
import './index.scss';
import { MainProvider } from '@store/index';
import RoutesApp from './routes/index';


const App = () => {

  return (
    <MainProvider>
      <RoutesApp />
    </ MainProvider>
  );
};

export default App;