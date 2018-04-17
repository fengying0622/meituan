/**
 * Created by Feng Ying on 2018/4/17.
 */
import Head from "../../components/Head"
import TableList from './subpage'
import React from 'react'

class Table extends React.Component{
    render(){
        return (
            <div>
                <Head title="超值特惠" />
                <TableList />
            </div>
        )
    }
}
export default Table