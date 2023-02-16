import React, {useState, useEffect} from 'react';
import { Space, Table, Tag } from 'antd';

const { Column, ColumnGroup } = Table;


const UserComponent = () => {


    const data = [
        {
          id: '1',
          key: '1',
          nickname: 'John',
          oAuthType: "KAKAO",
          uuid: "123454",
          accessToken: "ABCDE",
          userRoleType: "ADMINE",
          genDateTime: "2023-02-14"
        },
        {
          id: '2',
          key: '2',
          nickname: 'Jim',
          oAuthType: "KAKAO",
          uuid: "46574456",
          userRoleType: "USER",
          accessToken: "CVBSDR",
          genDateTime: "2023-02-14"

  
        },
        {
          id: '3',
          key: '3',
          nickname: 'Joe',
          oAuthType: "GOOGLE",
          uuid: "6722234",
          accessToken: "MBOFOE",
          userRoleType: "USER",
          genDateTime: "2023-02-14"

        },
      ];



    return (
        <>
       <Table dataSource={data}>

            <Column title="ID" dataIndex="id" key="id" />
            <Column title="Nickname" dataIndex="nickname" key="nickname" />

            <Column title="oAuthType" dataIndex="oAuthType" key="oAuthType" />

            <Column title="UUID" dataIndex="uuid" key="uuid" />
            <Column title="Access Token" dataIndex="accessToken" key="accessToken" />

            <Column title="Role Type" dataIndex="userRoleType" key="userRoleType" />
            <Column title="Gen Date" dataIndex="genDateTime" key="genDateTime" />

            <Column
            title="Action"
            key="action"
            render={(_, record) => (
                <Space size="middle">
                <a>Edit</a>
                <a>Delete</a>
                </Space>
            )}
            />
        </Table>
        </>
    );
};

export default UserComponent;