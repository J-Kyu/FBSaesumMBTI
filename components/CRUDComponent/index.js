import React, {useState, useEffect} from 'react';
import { Form,Input, InputNumber, Popconfirm, Space, Table, Typography } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';



const index = ({originData, columnData, opView=false, opEdit=true, opDelete=true, opPagination=true}) => {

    const [form] = Form.useForm();
    const [data, setData] = useState(originData);
    const [columns, setColumns] = useState([]);
    const [editingKey, setEditingKey] = useState('');
    const isEditing = (record) => record.key === editingKey;

    useEffect(() => {
        setColumns([...columnData ,
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
                                    opEdit={opEdit}
                                />
    
                                <RemoveComponent 
                                    record={record} 
                                    data={data} 
                                    setData={setData}
                                    opDelete={opDelete}
                                />
    
                                <ViewComponent opView={opView}/>
                            </Space>
    
                        </>
                        
                    );
                }
    
                },
            },
        ]);
    },[columnData, opView, opEdit,opDelete,opPagination,editingKey]);

    // const columns = [...columnData ,
    //     {
    //         title: 'operation',
    //         dataIndex: 'operation',
    //         width: '30%',
    //         render: (_, record) => {
            
    //         const editable = isEditing(record);
    //         if (editable == true){
    //             return (
    //                 // Eiditing
    //                 <SaveAndCancelComponent 
    //                     record={record} 
    //                     data={data} 
    //                     setData={setData} 
    //                     cancel={cancel} 
    //                     setEditingKey={setEditingKey} 
    //                     form={form} 
    //                 />
    //             );
    //         }
    //         else{
    //             // Not Editing
    //             return (
    //                 <>
    //                     <Space size="middle">
    //                         <EditComponet 
    //                             record={record} 
    //                             form={form} 
    //                             setEditingKey={setEditingKey} 
    //                             editingKey={editingKey}
    //                             opEdit={opEdit}
    //                         />

    //                         <RemoveComponent 
    //                             record={record} 
    //                             data={data} 
    //                             setData={setData}
    //                             opDelete={opDelete}
    //                         />

    //                         <ViewComponent opView={opView}/>
    //                     </Space>

    //                 </>
                    
    //             );
    //         }

    //         },
    //     },
    // ]

    const cancel = () => {
        setEditingKey('');
    };

    
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
                    expandable={{
                        expandedRowRender: (record) => (
                          <p
                            style={{
                              margin: 0,
                            }}
                          >
                            {record.children}
                          </p>
                        ),
                        rowExpandable: (record) => record.expandable,
                    }}
                    
                    pagination={{
                        onChange: cancel,
                        hideOnSinglePage : opPagination,
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
            <Space size="middle">
                {/* <Typography.Link style={{ marginRight: 8, }} onClick={() => save(record.key)} >
                    Save
                </Typography.Link> */}
                <Popconfirm title="Sure to Save?" onConfirm={() => save(record.key)}>
                    <a style={{color:"green"}}>Save</a>
                </Popconfirm>

                <Typography.Link onClick={cancel} style={{color:"red"}}>
                    Cancel
                </Typography.Link>
            </Space>
        </>
    );


};


const EditComponet = ({record, form, setEditingKey, editingKey, opEdit}) => {

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
            {
                opEdit ?
                <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
                    <a>Edit</a>
                </Typography.Link>
                :
                <a style={{color: "gray"}} disabled={true}>Edit</a>
            }
        </>
    );


};

const RemoveComponent = ({record,data, setData, opDelete}) =>{

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
                disabled={!opDelete}
                onConfirm={() => remove(record.key)}>
                    {
                    opDelete ?
                    <a style={{color: "red"}} disabled={false}>Delete</a> :
                    <a style={{color: "gray"}} disabled={true}>Delete</a>
                    }

                
            </Popconfirm>
        </>
    );
};


const ViewComponent = ({opView}) =>{
    if (opView == false){
        return (
            <>
            </>
        );
    }

    return (
        <>
            <a>View</a>
        </>
    );
}



export default index;