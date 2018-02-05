/**
 * Created by Administrator on 2018/1/25.
 */
import React from 'react'
import {Row,Col,Icon} from "antd"
import {Link} from "react-router-dom"
import  "../../static/css/head.css"
import {withRouter} from "react-router-dom"
import {connect} from "react-redux"
import InputSearch from "./input"

class HomeHead extends React.Component {

    handleKeyDown=(value)=>{
        this.props.history.push('/search/all/'+value)
    }
    render() {
        return (
            <div className="home-header">
                <Row type="flex" justify="space-around" align="middle">
                    <Col>
                        <Link to="/city">
                        {this.props.cityName}&nbsp;<Icon type="down" />
                        </Link>
                    </Col>
                    <Col className="search">
                        <InputSearch enterHandler={this.handleKeyDown}/>
                    </Col>
                    <Col className="setting">
                        <Link to="/login"><Icon type="user" style={{fontSize:25}}/></Link>
                    </Col>
                </Row>
            </div>
        )
    }
}
const mapStateToProps=()=>{
    return {}
}
const mapDispatchToProps=()=>{
    return {}
}
export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeHead))
