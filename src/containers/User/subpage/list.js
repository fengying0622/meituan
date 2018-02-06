/**
 * Created by Administrator on 2018/2/6.
 */
import React from "react"
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
                            <div key={index}  className="buy-item">
                                <div className="buy-img">
                                    <img src={item.img} alt={item.shop}/>
                                </div>
                                <div  className="buy-comment">
                                    <button>评 价</button>
                                </div>
                                <div className="buy-detail">
                                    <span>商户：{item.shop}</span>
                                    <span>{item.type}</span>
                                    <span>数量：{item.num}</span>
                                    <span>价格：￥{item.price}</span>
                                </div>
                            </div>
                        )
                    }) : <div>列表空</div>}
                </div>
                <h2 style={{fontSize:20}}>收 藏 列 表</h2>
                <div>
                    {store.length>0 ? store.map((item,index)=>{
                        return (
                            <div key={index}  className="buy-item">
                                <div className="buy-img">
                                    <img src={item.img} alt={item.shop}/>
                                </div>
                                <div className="buy-detail">
                                    <span>商户：{item.shop}</span>
                                    <span>{item.type}</span>
                                    <span>数量：{item.num}</span>
                                    <span>价格：￥{item.price}</span>
                                </div>
                            </div>
                        )
                    }) : <div>暂无收藏列表</div>}
                </div>
            </div>
        )
    }
}
export default List
