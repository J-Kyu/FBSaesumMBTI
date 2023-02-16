import React from 'react';
import { Layout, Menu } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';


import {
  CONTENT_TYPE_USER,
  CONTENT_TYPE_LETTER,
  CONTENT_TYPE_SURVEY,
  CONTENT_TYPE_QUESTION,
  CONTENT_TYPE_ANSWER,
  CONTENT_TYPE_RESULT,
  CONTENT_TYPE_PROS,
  CONTENT_TYPE_SITUATION,
  CONTENT_TYPE_CONS,
  CONTENT_TYPE_TIP,
  CONTENT_TYPE_HASHTAG,
}
from 'store/modules/contentState'

const { Sider } = Layout;
import {
    FormOutlined,
    UserOutlined,
    QuestionCircleOutlined,
  } from '@ant-design/icons';


  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }


const items = [
  getItem('User', CONTENT_TYPE_USER, <UserOutlined />),
  getItem('Survey', 'sub2', <QuestionCircleOutlined />, [
    getItem('Survey ', CONTENT_TYPE_SURVEY),
    getItem('Question ', CONTENT_TYPE_QUESTION),
    getItem('Answer', CONTENT_TYPE_ANSWER),
  ]),
  getItem('Result', 'sub4', <FormOutlined />, [
    getItem('Result', CONTENT_TYPE_RESULT),
    getItem('Pros', CONTENT_TYPE_PROS),
    getItem('Situation', CONTENT_TYPE_SITUATION),
    getItem('Cons', CONTENT_TYPE_CONS),
    getItem('Tip', CONTENT_TYPE_TIP),
    getItem('HashTag', CONTENT_TYPE_HASHTAG),

  ]),
];


const SideBarComponent = ({collapsed}) => {

  const dispatch = useDispatch();

  const SetContentState = (e) => {
    dispatch({type: e.key});

  }

    return (
        <>

            <Sider trigger={null} collapsible collapsed={collapsed}>
                <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={[CONTENT_TYPE_USER]}
                items={items}
                onClick={SetContentState}
                />
            </Sider>

        </>
    );
};

export default SideBarComponent;