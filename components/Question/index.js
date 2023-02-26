import React, {useEffect, useState} from 'react';
import OneSelectCRUDComponent from 'components/CRUDComponent/OneSelectCRUDComponent';

import axios from 'axios';


const QuestionComponet = () => {

    const [data, setData] = useState([]);

    const questionListData = [
        {
            id: 1,
            key: 1,
            questionContents: "오랜만에 찾아온 여유로운 주말은 어떻게 보내고 싶나요?",
            questionType: "EI",
            answerOptionDTOList: []
        },
        {
            id: 2,
            key: 2,
            questionContents: "새학기 첫 팀모임에서 팀원들과 처음 만났을 때, 나의 모습은?",
            questionType: "EI",
            answerOptionDTOList: []
        },
        {
            id: 3,
            key: 3,
            questionContents: "밥고에 가기위해 준비 중인데, 새내기가 고민을 들어달라고 찾아왔다. 이때 나는?",
            questionType: "XH",
            answerOptionDTOList: []
        },
        {
            id: 4,
            key: 4,
            questionContents: "나에게 학업과 섬김 중 우선순위는?",
            questionType: "XH",
            answerOptionDTOList: []
        },
        {
            id: 5,
            key: 5,
            questionContents: "새내기가 개인적인 일로 힘들어한다면, 나는",
            questionType: "FT",
            answerOptionDTOList: []
        },
        {
            id: 6,
            key: 6,
            questionContents: "새섬파트너에게 서운한 점이 생긴다면?",
            questionType: "FT",
            answerOptionDTOList: []
        },
        {
            id: 7,
            key: 7,
          questionContents: "새내기들과 1박 2일동안 경주 여행을 가기로 했다!",
          questionType: "PJ",
          answerOptionDTOList: []
        },
        {
            id: 8,
            key: 8,
            questionContents: "새섬 지원 마감일 하루 전날, 나의 모습은 어땠나요?",
            questionType: "PJ",
            answerOptionDTOList: []
        }
      ];


    const questionFormatData = [
        {
            title: 'ID',
            dataIndex: 'id',
            width: '5%',
            dataType: 'number',
            editable: false,
        },
        {
            title: 'Question Content',
            dataIndex: 'questionContents',
            dataType: 'text',
            editable: true,
        },
        {
            title: 'Question Type',
            dataIndex: 'questionType',
            dataType: 'select',
            editable: true,
        },
    ];
    
    const QuestionType = [
        {
            value: 'EI',
            label: 'EI',
        },
        {
            value: 'XH',
            label: 'XH',
        },
        {
            value: 'FT',
            label: 'FT',
        },
        {
            value: 'PJ',
            label: 'PJ',
        }
    ];




    useEffect(() => {
        questionPageRequestAPI(0,10, setData);
    },[]);

    useEffect(() => {
        console.log(data)
    },[data]);


    if (data.length == 0){
        return (
        <>
            Loading
        </>
        );
    }

    return (
        <div>
                <OneSelectCRUDComponent originData={data} columnData={questionFormatData} options={QuestionType} opEdit={true} opDelete={true} />
        </div>
    );
};




const questionPageRequestAPI = (page, count, setData) => {

    var url = "http://api.gettoknow.life/v1/admin/api/survey/question/"+page+"/"+count+"/paging";

    axios.get(url)
        .then((response)=> {

            console.log(response);

            response.data.questionDTOList.forEach((element, index) => {
                setData(prev => [
                    ...prev,
                    {
                        id: index,
                        key: index,
                        questionContents: element.questionContents,
                        questionType: element.questionType,
                    }                    
                ]);
            });

        })
        .catch((error)=> {
            console.log(error);
        })
}




export default QuestionComponet;