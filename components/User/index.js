import React, {useState, useEffect} from 'react';
import { Space, Table, Tag } from 'antd';
import CRUDComponent from '@/components/CRUDComponent';

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


  const abc = [
      {
        title: 'ID',
        dataIndex: 'id',
        editable: false,
      },
      {
        title: 'Nickname',
        dataIndex: 'nickname',
        editable: true,
      },
      {
        title: 'oAuthType',
        dataIndex: 'oAuthType',
        editable: true,
      },
      {
        title: 'UUID',
        dataIndex: 'uuid',
        editable: true,
      },
      {
        title: 'Access Token',
        dataIndex: 'accessToken',
        editable: true,
      },
      {
        title: 'Role Type',
        dataIndex: 'userRoleType',
        editable: true,
      },
      {
        title: '"Gen Date',
        dataIndex: 'genDateTime',
        editable: true,
      }

    ];


    return (
        <>
          <CRUDComponent originData={data} columnData={abc}  opEdit={true} opDelete={true}/>
        </>
    );
};

export default UserComponent;