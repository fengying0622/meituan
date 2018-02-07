/**
 * Created by Administrator on 2018/2/7.
 */
import React from "react"
import "../../static/css/list.css"
import Star from "../star"
import {Row,Col} from "antd"
class DetailInfo extends React.Component{
    render(){
        const data = this.props.info
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
export default DetailInfo