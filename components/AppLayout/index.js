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
        {/* <Row>
            <Layout>
                <Col xs={24} md={3} style={{display:'flex', flexDirection:'row'}}>
                        <SideBarComponent collapsed={collapsed} />
                </Col>
                <Col xs={24} md={21}>
                        <HeaderComponent  collapsed={collapsed} setCollapsed={setCollapsed}/>
                        <Content>
                            {children}
                        </Content>
                        <FooterComponent/>
                </Col>
   
            </Layout>
        </Row> */}

        <Layout>
                <SideBarComponent collapsed={collapsed}  />
                <Layout>
                    <HeaderComponent  collapsed={collapsed} setCollapsed={setCollapsed}/>
                        <Content>
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