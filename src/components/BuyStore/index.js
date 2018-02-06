/**
 * Created by Administrator on 2018/2/5.
 */
import React from "react"
import {Row,Col,Button} from "antd"

class BuyStore extends React.Component{
    storeHandler =()=>{
         this.props.storeHandle();

    }
    buyHandler =()=>{
        this.props.buyHandle()
    }
    render(){
        const isStore =this.props.isStore;
        return (
            <Row type="flex" justify="space-around" align="middle">
                <Col><Button type="primary" style={{fontSize:18}} onClick={this.storeHandler}>
                    {isStore ? '已收藏' :'收藏'}
                </Button></Col>
                <Col><Button type="primary" style={{fontSize:18}} onClick={this.buyHandler}>购买</Button></Col>
            </Row>
        )
    }
}
export default BuyStore