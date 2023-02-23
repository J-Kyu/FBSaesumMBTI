import { MenuOutlined } from '@ant-design/icons';
import { DndContext } from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Table } from 'antd';
import React, { useState } from 'react';

import CRUDComponent from '../CRUDComponent';


const columns = [
  {
    key: 'sort',
  },
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

const Row = ({ children, ...props }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: props['data-row-key'],
  });
  const style = {
    ...props.style,
    transform: CSS.Transform.toString(
      transform && {
        ...transform,
        scaleY: 1,
      },
    ),
    transition,
    ...(isDragging
      ? {
          position: 'relative',
          zIndex: 9999,
        }
      : {}),
  };

  return (
    <tr {...props} ref={setNodeRef} style={style} {...attributes}>
      {React.Children.map(children, (child) => {
        if (child.key === 'sort') {
          return React.cloneElement(child, {
            children: (
              <MenuOutlined
                ref={setActivatorNodeRef}
                style={{
                  touchAction: 'none',
                  cursor: 'move',
                }}
                {...listeners}
              />
            ),
          });
        }
        return child;
      })}
    </tr>
  );
};


const App = () => {

  const [dataSource, setDataSource] = useState([
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address:
        'Long text',
        expandable: true,
        children: [{
            id: 1036,
            title: "새섬 MBTI",
            expandable: true,
          }
        ]
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        expandable: true,
        children: [{
            id: 1036,
            title: "새섬 MBTI",
            expandable: true,
          }
        ]
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      expandable: true,
      children: [{
            id: 1036,
            title: "새섬 MBTI",
            expandable: true,
          }
        ]
    },
  ]);

  const onDragEnd = ({ active, over }) => {
    if (active.id !== over?.id) {
      setDataSource((previous) => {
        const activeIndex = previous.findIndex((i) => i.key === active.id);
        const overIndex = previous.findIndex((i) => i.key === over?.id);
        return arrayMove(previous, activeIndex, overIndex);
      });
    }
  };


/* *********** */
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
      editable: false,
    },
  ];

const surveyData = [{
    id: 1036,
    title: "새섬 MBTI",
    expandable: false,
  }
];
    const [isExpand, setIsExpand ] = useState(false);

  return (
    <DndContext onDragEnd={onDragEnd} onDragStart={()=>{setIsExpand(true)}}>
      <SortableContext
        // rowKey array
        items={dataSource.map((i) => i.key)}
        strategy={verticalListSortingStrategy}
      >
        <Table
          components={{
            body: {
              row: Row,
            },
          }}
          rowKey="key"
          columns={columns}
          dataSource={dataSource}
          expandable={{
            expandedRowRender: (record) => (
              <p
                style={{
                  margin: 0,
                }}
              >
                <CRUDComponent originData={record.children} columnData={surveyFormatData}  opEdit={false} opDelete={true} opView={true}/>
              </p>
            ),
            rowExpandable: (record) => record.expandable,
            showExpandColumn: isExpand,
        }}
        />
      </SortableContext>
    </DndContext>
  );
};
export default App;