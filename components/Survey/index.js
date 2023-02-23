import React, {useState} from 'react';
import { Form,Input, InputNumber, Popconfirm, Table, Typography } from 'antd';
import CRUDComponent from 'components/CRUDComponent';



const surveyData = [
  {
    id: '1036',
    key: '1',
    title: "새섬 MBTI",
    expandable: true,
  },
  {
  id: '1037',
  key: '2',
  title: "test",
  expandable: false,
  }
];


const SurveyComponent = () => {

  const surveyFormatData = [
    
    {
      title: 'ID',
      dataIndex: 'id',
      width: '10%',
      editable: false,
    },
    {
      title: 'Survey Title',
      dataIndex: 'title',
      editable: true,
    },
  ];




  return (
    <>
      {/* <CRUDComponent originData={originData} columnData={columnData}  opEdit={false} opDelete={true}/> */}

      <CRUDComponent originData={surveyData} columnData={surveyFormatData}  opEdit={true} opDelete={true} opView={true}/>
    </>
  );

};


export default SurveyComponent;