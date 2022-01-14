import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter,HashRouter } from "react-router-dom";
import 'animate.css';
import App from './App'
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import 'normalize.css/normalize.css'
import 'antd/dist/antd.css';
import './index.css';
import {store} from './store/store'
import {Provider} from 'react-redux'
import {message} from "antd";
message.config({
  duration: 2,
  maxCount: 3,
  rtl:true
});


ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
  ,
  document.getElementById('root')
)
