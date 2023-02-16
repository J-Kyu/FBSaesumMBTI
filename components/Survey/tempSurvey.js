import React, {useState} from 'react';
import { Form,Input, InputNumber, Popconfirm, Space, Table, Typography } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

const originData = [];

for (let i = 0; i < 100; i++) {
  originData.push({
    key: i.toString(),
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}


//cell을 editing filed로 변환하게 하는 변수
const EditableCell = ({
    editing,
    dataIndex,
    title,
    inputType,
    record,
    index,
    children,
    ...restProps
  }) => {
    const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;

    if(editing == true){
        return(
            <>
                <td {...restProps}>
                    <Form.Item 
                        name={dataIndex} 
                        style={{ margin: 0,}}
                        rules={[
                            {
                                required: true,
                                message: `Please Input ${title}!`,
                            },
                        ]}>
                        {inputNode}
                    </Form.Item>
                </td>
            </>
            
        );
    }
    else{
        return(
            <>
                <td {...restProps}>
                    {children}
                </td>

            </>
        );
    }

};


const tempSurvey = () => {

    const [form] = Form.useForm();
    const [data, setData] = useState(originData);
    const [editingKey, setEditingKey] = useState('');
    const isEditing = (record) => record.key === editingKey;


    const cancel = () => {
        setEditingKey('');
    };


    /*
    Column에 대한 설정은 아래와 같이 2가지로 나눠서 설정한다.
    1. Column 형태 구성
        - 일반 상태와 Operation에 대한 정의
    2. Colun Editing 구성
        - Operation에 의해 상태가 변경되었을 때의 상태 정의
    */

    //colum 형태 구성 (column 설정)
    const columns = [
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
        },
        {
          title: 'operation',
          dataIndex: 'operation',
          width: '30%',
          render: (_, record) => {
            
            const editable = isEditing(record);
            if (editable == true){
                return (
                    // Eiditing
                    <SaveAndCancelComponent 
                        record={record} 
                        data={data} 
                        setData={setData} 
                        cancel={cancel} 
                        setEditingKey={setEditingKey} 
                        form={form} 
                    />
                );
            }
            else{
                // Not Editing
                return (
                    <>
                        <Space size="middle">
                            <EditComponet 
                                record={record} 
                                form={form} 
                                setEditingKey={setEditingKey} 
                                editingKey={editingKey}
                            />

                            <RemoveComponent 
                                record={record} 
                                data={data} 
                                setData={setData}
                            />
                        </Space>

                    </>
                    
                );
            }

          },
        },
    ];

    //eiditng 때와 일반일 때의 row value 형태 설정
    const mergedColumns = columns.map((col) => {
        if (!col.editable) {
          return col;
        }
        return {
          ...col,
          onCell: (record) => ({
            record,
            inputType: col.dataIndex === 'age' ? 'number' : 'text',
            dataIndex: col.dataIndex,
            title: col.title,
            editing: isEditing(record),
          }),
        };
      }
    );


    return (
        <>

            <Form form={form} component={false}>
                <Table
                    components={{
                        body: {
                            cell: EditableCell,
                        },
                    }}
                    bordered
                    dataSource={data}
                    columns={mergedColumns}
                    rowClassName="editable-row"
                    
                    pagination={{
                        onChange: cancel,
                    }}
                />
            </Form>
        </>
    );
};


const SaveAndCancelComponent = ({record, data, setData, cancel,setEditingKey, form}) =>{

    //수정된 것을 적용 하거나, 생성된 것을 저장
    const save = async (key) => {
        try {
            const row = await form.validateFields();
            const newData = [...data];
            const index = newData.findIndex((item) => key === item.key);
            if (index > -1) {
                const item = newData[index];
                newData.splice(index, 1, {
                    ...item,
                    ...row,
                });
                setData(newData);
                setEditingKey('');
            } else {
                newData.push(row);
                setData(newData);
                setEditingKey('');
            }
        } catch (errInfo) {
            console.log('Validate Failed:', errInfo);
        }
    };

    return (
        <>
            <span>
                <Typography.Link style={{ marginRight: 8, }} onClick={() => save(record.key)} >
                    Save
                </Typography.Link>

                <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
                    <a>Cancel</a>
                </Popconfirm>
            </span> 
        </>
    );


};


const EditComponet = ({record, form, setEditingKey, editingKey}) => {

    const edit = (record) => {
        form.setFieldsValue({
          name: '',
          age: '',
          address: '',
          ...record,
        });
        setEditingKey(record.key);
    };


    return(
        <>
            <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
                <a>Edit</a>
            </Typography.Link>
        </>
    );


};

const RemoveComponent = ({record,data, setData}) =>{

    const remove = async (key) => {
        try {

            const newData = [...data];
            const index = newData.findIndex((item) => key === item.key);

            //delete
            newData.splice(index, 1);
            setData(newData);


        } catch (errInfo) {
          console.log('Validate Failed:', errInfo);
        }
    };

    return(
        <>
            <Popconfirm 
                title="Delete the row"
                description="Are you sure to delete this row?"
                icon={
                    <QuestionCircleOutlined
                    style={{
                        color: 'red',
                    }}
                    />
                }
                onConfirm={() => remove(record.key)}>

                <a style={{color: "red"}}>Delete</a>
            </Popconfirm>
        </>
    );
};




export default tempSurvey;