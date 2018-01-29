/**
 * Created by Administrator on 2018/1/25.
 */
import React from 'react'
import {Row,Col,Icon,Input} from "antd"
import  "../../static/css/head.css"

class Header extends React.Component {

    render() {
        return (
            <div className="home-header">
                <Row type="flex" justify="space-around" align="middle">
                    <Col>{this.props.cityName}&nbsp;<Icon type="down" /></Col>
                    <Col className="search">
                        <Input prefix={<Icon type='search'/>} placeholder="请输入关键字" size="large"/>
                    </Col>
                    <Col className="setting"><Icon type="user" style={{fontSize:25}}/></Col>
                </Row>
            </div>
        )
    }
}
export default Header