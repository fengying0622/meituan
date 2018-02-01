/**
 * Created by Administrator on 2018/2/1.
 */
import React from "react"
import {withRouter} from "react-router-dom"
import {connect} from "react-redux"
import InputSearch from "../../components/HomeHead/input"
import {Icon,Row,Col} from "antd"
import "../../static/css/head.css"
import List from "./subpage/index"
class Search extends React.Component{
    clickHandle=()=>{
        window.history.back()
    }

    handleKeyDown=(value)=>{
        this.props.history.push('/search/all/'+value)
    }

    render(){
        //得到url里面的参数
        const param = this.props.match.params;
        const keyWord = param.keyword;
        const category=param.category;
        return (
            <div>
                <div className="search-input">
                    <Row type="flex">
                        <Col><Icon type="left" onClick={this.clickHandle} /></Col>
                        <Col className="search-input-search">
                            <InputSearch enterHandler={this.handleKeyDown} value={keyWord}/>
                        </Col>
                    </Row>
                </div>
                <List keyword={keyWord} category={category}/>
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
)(Search))