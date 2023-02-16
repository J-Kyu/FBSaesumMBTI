import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Menu, Layout, Row, Col } from 'antd';

import HeaderComponent from 'components/AppLayout/Header';
import FooterComponent from 'components/AppLayout/Footer';
import SideBarComponent from 'components/AppLayout/SideBar';

const {Content} = Layout;

const AppLayout = ({children}) => {


    const [collapsed, setCollapsed] = useState(false);

    return (
        <>
            <Layout hasSider='true' style={{minHeight: "100%"}}>
                    <SideBarComponent collapsed={collapsed}  />
                    <Layout>
                        <HeaderComponent  collapsed={collapsed} setCollapsed={setCollapsed}/>
                            <Content style={{minHeight:"50vh"}}>
                                {children}
                            </Content>
                        <FooterComponent/>
                    </Layout>
            </Layout>
        </>
    );
};


AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
  };


export default AppLayout;