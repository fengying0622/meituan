/**
 * Created by Feng Ying on 2018/4/16.
 */
import React from 'react'
import { Table } from 'antd';

const columns = [{
    title: 'Name',
    dataIndex: 'name',
    width: 150,
}, {
    title: 'Age',
    dataIndex: 'age',
    width: 100,
}, {
    title: 'Address',
    dataIndex: 'address',
}, {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
        <span><a href="javascript:;">Delete</a></span>
    ),
}];

const data = [];
for (let i = 0; i < 100; i++) {
    data.push({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
    });
}

class TableList extends React.Component{
    render(){
        return <Table columns={columns} dataSource={data} pagination={{ pageSize: 10 }}/>
    }
}
export default TableList