import React from 'react';
import OneSelectCRUDComponent from 'components/CRUDComponent/OneSelectCRUDComponent';


const AnswerOption = () => {

    const answerOptionDTOList = [
        {
            id: '1',  
            key: '1',
            answerContents: "주로 기숙사 침대에 누워서 시간을 보낼래요",
            weight: 1,
            answerType: "E"
        },
        {
            id: '2',
            key: '2',
            answerContents: "먼저 나서서 최대한 분위기 살려요",
            weight: 2,
            answerType: "E"
        }
      ]

      const answerOptionFormatData = [
        {
            title: 'ID',
            dataIndex: 'id',
            width: '5%',
            dataType: 'number',
            editable: false,
        },
        {
            title: 'Answer Contents ',
            dataIndex: 'answerContents',
            dataType: 'text',
            editable: true,
        },
        {
            title: 'Weight',
            dataIndex: 'weight',
            dataType: 'number',
            editable: true,
        },
        {
            title: 'Answer Type',
            dataIndex: 'answerType',
            dataType: 'select',
            editable: true,
        },
    ];

    const answerOptionType = [
        {
            value: 'E',
            label: 'E',
        },
        {
            value: 'I',
            label: 'I',
        },
        {
            value: 'X',
            label: 'X',
        },
        {
            value: 'H',
            label: 'H',
        },
        {
            value: 'F',
            label: 'F',
        },
        {
            value: 'T',
            label: 'T',
        },
        {
            value: 'P',
            label: 'P',
        },
        {
            value: 'J',
            label: 'J',
        },
    ];

    return (
        <div>
            <OneSelectCRUDComponent originData={answerOptionDTOList} columnData={answerOptionFormatData} answerOptionType={answerOptionType}  opEdit={true} opDelete={true} />

        </div>
    );
};

export default AnswerOption;