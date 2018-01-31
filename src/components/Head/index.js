/**
 * Created by Administrator on 2018/1/31.
 */
import React from "react"
import {Icon} from "antd"
import "../../static/css/head.css"

class Head extends React.Component{
    clickHandler=()=>{
        window.history.back()
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
export default Head