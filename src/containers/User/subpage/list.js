/**
 * Created by Administrator on 2018/2/6.
 */
import React from "react"
import DetailInfo from "../../../components/detail"
import Order from "../../../components/detail/order"
class List extends React.Component{
    render(){
        const data = this.props.data;
        const store = this.props.store;
        return (
            <div>
                <h2 style={{fontSize:20}}>订 单 详 情</h2>
                <div>
                    {data.length>0 ? data.map((item,index)=>{
                        return (
                            <div key={index}>
                                <Order data={item}/>
                            </div>
                        )
                    }) : <div>列表空</div>}
                </div>
                <h2 style={{fontSize:20}}>收 藏 列 表</h2>
                <div>
                    {store.length>0 ? store.map((item,index)=>{
                        return (
                            <div key={index}>
                                <DetailInfo info={item} />
                            </div>
                        )
                    }) : <div style={{paddingLeft:15}}>暂无收藏</div>}
                </div>
            </div>
        )
    }
}
export default List
