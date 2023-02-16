import React, {useState} from 'react';
import { Form,Input, InputNumber, Popconfirm, Table, Typography } from 'antd';
import TempSurvey from './tempSurvey';

const originData = [];
for (let i = 0; i < 100; i++) {
  originData.push({
    key: i.toString(),
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}


const SurveyComponent = () => {

  const abc = [
    {
      title: 'name',
      dataIndex: 'name',
    //   width: '25%',
      editable: true,
    },
    {
      title: 'age',
      dataIndex: 'age',
    //   width: '15%',
      editable: true,
    },
    {
      title: 'address',
      dataIndex: 'address',
    //   width: '40%',
      editable: true,
    }];

  return (
    <>
      <TempSurvey originData={originData} columnData={abc}  opEdit={false} opDelete={true}/>
    </>
  );

};

export default SurveyComponent;