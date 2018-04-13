import React from 'react'
import Head from "../../components/Head"
import {bindActionCreators} from "redux"
import {connect} from "react-redux"
import {update} from "../../actions/userinfo"
import {withRouter} from "react-router-dom"
import CurrentCity from "../../components/City"
import CityList from "../../components/City/list"

class City extends React.Component {

    constructor(){
        super();
        this.state={
            color:'yellow'
        }
    }
    change(){
        this.setState({
            color:'green'
        })

    }
    //添加一个定时器测试父组件props值变化时，触发componentWillReceiveProps钩子
    componentDidMount(){
        setTimeout(()=>this.change(),5000);
    }

    changeCity=(newCity)=>{
        if(newCity==null){
            return
        }
        const userInfo = this.props.userInfo;
        userInfo.cityName=newCity;
        this.props.userInfoActions(userInfo)
        //跳转到首页
        this.props.history.push('/')
    }

    render() {
    return (
        <div>
            <Head title="选择城市"/>
            <CurrentCity cityName={this.props.userInfo.cityName}/>
            <CityList changeFn={this.changeCity} color={this.state.color}/>
        </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        userInfo : state.userInfo
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        userInfoActions:bindActionCreators(update,dispatch)
    }
}
export default withRouter(connect (
    mapStateToProps,
    mapDispatchToProps
)(City))
