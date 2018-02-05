/**
 * Created by Administrator on 2018/2/5.
 */
import React from "react"
import Head from "../../components/Head"
import LoginComponent from "../../components/Login"
import{connect} from "react-redux"
import {bindActionCreators} from "redux"
import {update} from "../../actions/userinfo"
import {withRouter} from "react-router-dom"

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            checking : true
        }
    }

    componentDidMount() {
        //判断用户是否登录
        const userInfo = this.props.userInfo;
        if(userInfo.userName){
            //如果登录,跳转到用户中心
                this.goUserCenter();
        }else{
            this.setState({
                checking: false
            })
        }
    }

    loginHandle = (value) =>{
        //登录成功后将username，password存入redux
        const userInfo = this.props.userInfo;
        userInfo.userName = value.username;
        userInfo.password = value.password;
        this.props.userInfoActions(userInfo);
        //跳转页面
        const router = this.props.match.params.router;
        console.log(router)
        if(router){
            this.props.history.push(router)
        }else{
            this.goUserCenter()
        }
    }

    goUserCenter(){
        this.props.history.push('/user')
    }

    render(){
        return (
            <div>
                <Head title="登录"/>
                <div style={{height:60}}></div>
                {
                    this.state.checking ? '' :  <LoginComponent successAfterLogin={this.loginHandle}/>
                }
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
export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Login))