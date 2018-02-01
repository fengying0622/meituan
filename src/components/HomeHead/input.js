/**
 * Created by Administrator on 2018/2/1.
 */
import React from "react"
import {Icon,Input} from "antd"

class InputSearch extends React.Component{
    constructor(props){
        super(props)
        this.state={
            search : ""
        }
    }

    componentDidMount() {
        this.setState({
            search : this.props.value || ""
        })
    }

    handleChange=(e)=>{
        this.setState({
            search:e.target.value
        })
    }

    handleKeyDown =(e)=>{
        let value = this.state.search;
        if(e.keyCode === 13 && value.trim()){
            this.props.enterHandler(value)
        }
    }
    render(){
        return (
            <Input prefix={<Icon type='search'/>} placeholder="请输入关键字" size="large"
                   onChange={this.handleChange} onKeyDown={this.handleKeyDown} value={this.state.search}/>
        )
    }
}
export default InputSearch