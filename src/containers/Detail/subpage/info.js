/**
 * Created by Administrator on 2018/2/2.
 */
import React from "react"
import {Row,Col} from "antd"
import Star from "../../../components/star"

class Info extends React.Component{
    constructor(props){
        super(props)
        this.state={
            info : []
        }
    }
    componentDidMount() {
        const id = this.props.id;
        fetch("http://rap2api.taobao.org/app/mock/4877/POST//detail",{method:"post"},{id:id})
            .then(res=>res.json())
            .then(res=>{
                this.setState({
                    info : res.data
                })
            })
    }
    render(){
        const data = this.state.info
        return (
                <div className="item">
                    <div className="img">
                        <img src={data.img} alt={data.title}/>
                    </div>
                    <div className="detail">
                        <Row type="flex" justify="space-between" align="middle">
                            <Col className="subTitle">{data.subtitle}</Col>
                        </Row>
                        <Row type="flex"  justify="space-between" align="middle">
                            <Star number={data.star}/>
                            <Col className="price">￥{data.price}</Col>
                        </Row>
                        <Row type="flex" justify="space-between" align="middle">
                            <Col style={{color:"grey",fontSize:14}}>{data.title}</Col>
                        </Row>
                        <Row type="flex" justify="space-between" align="middle">
                            <Col style={{color:"grey",fontSize:14}}>地址：{data.address}</Col>
                        </Row>
                    </div>
                </div>
            )
    }
}
export default Info