/**
 * Created by Administrator on 2018/1/31.
 */
import React from "react"
import {Icon} from "antd"
import "../../static/css/head.css"
import {withRouter} from 'react-router-dom'

class Head extends React.Component{
    clickHandler=()=>{
        const backUrl = this.props.backUrl;
        if(backUrl){
            this.props.history.push(backUrl)
        }else{
            window.history.back()
        }
    }
    render(){
        return (
            <div className="second-head">
                <Icon type="left" onClick={this.clickHandler}/>
                <span className="span">{this.props.title}</span>
            </div>
        )
    }
}
//不加withrouter会报错：找不到history.push方法
export default withRouter(Head)