/**
 * Created by Administrator on 2018/1/30.
 */
import React from "react"
import {Row,Col} from "antd"
import {Link} from "react-router-dom"

class ListComponent extends React.Component{
    render(){
        const data = this.props.data;
        return (
            <div>
                {data.map((item,index)=>{
                    return (
                        <div key={index}  className="item">
                            <Link to={/detail/+item.id}>
                            <div className="img">
                                <img src={item.img} alt={item.title}/>
                            </div>
                            <div className="detail">
                                <Row type="flex" justify="space-between" align="middle">
                                    <Col className="subTitle">{item.subtitle}</Col>
                                    <Col style={{color:"grey"}}>{item.distance}m</Col>
                                </Row>
                                <Row type="flex" justify="space-between" align="middle">
                                    <Col style={{color:"grey",paddingTop:3,paddingBottom:3}}>{item.title}</Col>
                                </Row>
                                <Row type="flex" justify="space-between" align="middle">
                                    <Col style={{color:"red",fontSize:15}}>￥{item.price}</Col>
                                    <Col>已售{item.number}</Col>
                                </Row>
                            </div>
                            </Link>
                        </div>

                    )
                })}
            </div>
            )
    }
}
export default ListComponent
