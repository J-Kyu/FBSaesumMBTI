import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Input, Row, Col } from 'antd';

const AppLayout = ({children}) => {
    return (
        <>
        <Row>
            <Col xs={24} md={6}>
            </Col>
            <Col xs={24} md={12}>
                {children}
            </Col>
            <Col xs={24} md={6}>
            </Col>
        </Row>
    </>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
  };


export default AppLayout;