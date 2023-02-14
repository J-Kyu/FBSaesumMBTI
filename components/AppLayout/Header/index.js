import React from 'react';
import {Layout, theme} from 'antd';
import styled from 'styled-components';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
  } from '@ant-design/icons';


const {Header} = Layout;

const HeaderWrapper = styled(Header)`
  display: flex;
  flex-direction: row;
`;


const HeaderComponent = ( {collapsed, setCollapsed} ) => {

    const {
        token: { colorBgContainer },
      } = theme.useToken();

    return (
        <>
            <HeaderWrapper>
                <CollapseComponent collapsed={collapsed} setCollapsed={setCollapsed}/>
                <div style={{color:"white", fontSize:"1rem", marginLeft:"1rem"}}>
                    This is Header
                </div>
            </HeaderWrapper>   
        </>
    );
};


const IconWrapper = styled.div`
    color: white;
    &hove{
        color: #1890ff;
    }
`;

const CollapseComponent = ({collapsed, setCollapsed}) =>{

    const ConvertCollapsed = () =>{
        setCollapsed(!collapsed);
    }

    if (collapsed == true){
        return(
            <>  <IconWrapper>
                    <MenuUnfoldOutlined onClick={ConvertCollapsed}/>
                </IconWrapper>
            </>
        );
    }
    else{
        return (
            <>
                <IconWrapper>
                    <MenuFoldOutlined onClick={ConvertCollapsed}/>
                </IconWrapper>
            </>
        );
    }

}

export default HeaderComponent;