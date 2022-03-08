import {render} from 'react-dom';
import React from 'react';
import LoadingAnimated from './loadingAnimated';


const loading = (flag) => {
  let wrapper = document.querySelector('.globalLoading');
  if(flag){
    if(wrapper===null){
      wrapper = document.createElement('div');
      wrapper.className = 'globalLoading';
      document.body.appendChild(wrapper);
      render(<LoadingAnimated />,wrapper);
    }
  }else{
    if(wrapper !== null) wrapper.parentNode.removeChild(wrapper);
  }
};

export default loading;