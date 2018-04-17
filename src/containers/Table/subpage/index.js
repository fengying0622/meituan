/**
 * Created by Feng Ying on 2018/4/17.
 */
/**
 * Created by Feng Ying on 2018/4/16.
 */
import React from 'react'
import { Table,Popconfirm} from 'antd';

var data = [];
for (let i = 0; i < 100; i++) {
    data.push({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
    });
};
class TableList extends React.Component{
    constructor(props){
        super(props);
        this.columns=[{
            title: 'Name',
            dataIndex: 'name',
            width: 110,
        }, {
            title: 'Age',
            dataIndex: 'age',
            width: 70,
        }, {
            title: 'Address',
            dataIndex: 'address',
            width: 100,
        }, {
            title: 'Action',
            key: 'action',
            render: (text, record) => {
                return (
                    this.state.dataSource.length > 1 ?
                        (
                            <Popconfirm title="Sure to delete?" onConfirm={() => this.onDelete(record.key)}>
                                <a href="javascript:;">Delete</a>
                            </Popconfirm>
                        ) : null
                );
            }
        }];
        this.state= {
            dataSource: data
        }
    }

    onDelete = (key) => {
        const dataSource = [...this.state.dataSource];
        this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
    }

    render(){
        return <Table columns={this.columns} dataSource={this.state.dataSource} pagination={{ pageSize: 9 }}  size="small"/>
    }
}
export default TableList