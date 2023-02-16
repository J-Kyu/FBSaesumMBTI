import React, {useState} from 'react';
import { Form,Input, InputNumber, Popconfirm, Space, Table, Typography } from 'antd';


const originData = [];

for (let i = 0; i < 100; i++) {
  originData.push({
    key: i.toString(),
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}




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
          render: (_, record) => {
            
            const editable = isEditing(record);
            if (editable == true){
                return (
                    // Eiditing
                    <span>
                        <Typography.Link style={{ marginRight: 8, }}>
                            Save
                        </Typography.Link>

                        <Popconfirm title="Sure to cancel?" >
                            <a>Cancel</a>
                        </Popconfirm>
                    </span>
                );
            }
            else{
                // Not Editing
                return (
                    <>
                        <Space size="middle">
                            <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
                                <a>Edit</a>
                            </Typography.Link>

                            <Popconfirm title="Sure to Delete?" >
                                <a>Delete</a>
                            </Popconfirm>
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
                    // components={{
                    //     body: {
                    //         cell: EditableCell,
                    //     },
                    // }}
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

export default tempSurvey;