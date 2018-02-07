/**
 * Created by Administrator on 2018/2/7.
 */
import React from "react"

class Order extends React.Component{
    constructor(props){
        super(props)
        this.state={
            status : 2  //0,1,2 未评价,评价中,已评价
        }
    }

    componentDidMount() {
        this.setState({
            status : this.props.data.status
        })
    }

    render(){
        const data = this.props.data;
        return (
            <div className="buy-item">
                <div className="buy-img">
                    <img src={data.img} alt={data.shop}/>
                </div>
                <div  className="buy-comment">
                    {
                        this.state.status === 0 ? <button>评 价</button> : <button>已评价</button>
                    }
                </div>
                <div className="buy-detail">
                    <span>商户：{data.shop}</span>
                    <span>{data.type}</span>
                    <span>数量：{data.num}</span>
                    <span>价格：￥{data.price}</span>
                </div>
            </div>
        )
    }
}
export default Order