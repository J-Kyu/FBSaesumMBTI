import React from 'react';
import { Layout, Menu } from 'antd';
import styled from 'styled-components';

const { Sider } = Layout;
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
  } from '@ant-design/icons';


const items = [
    {
      key: '1',
      icon: <UserOutlined />,
      label: 'nav 1',
    },
    {
      key: '2',
      icon: <VideoCameraOutlined />,
      label: 'nav 2',
    },
    {
      key: '3',
      icon: <UploadOutlined />,
      label: 'nav 3',
    },
  ];


const SideBarComponent = ({collapsed}) => {



    return (
        <>

            <Sider trigger={null} collapsible collapsed={collapsed}>
                <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
                items={items}
                />
            </Sider>

        </>
    );
};

export default SideBarComponent;