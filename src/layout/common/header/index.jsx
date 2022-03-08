import React from 'react';
import {Button} from 'antd';

function Header(props) {
 
  return (
    <div className="header-container">
      <div className="header-goback-button">
        <Button type="primary">后台首页</Button>
      </div>
      <div className="header-content">1111</div>
    </div>
  );
}

export default Header;