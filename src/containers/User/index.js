/**
 * Created by Administrator on 2018/2/5.
 */
import React from "react"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import Head from "../../components/Head"
import UserComponent from "../../components/User"
import List from "./subpage/list"
import {buyList,commentSubmit} from "../../api"

class User extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data : []
        }
    }

    componentDidMount() {
        const flag = this.checkLogin();
        if(flag){
            const value={
                userId : this.props.userInfo.userId
            }
           buyList(value)
                .then(res=>{
                    this.setState({
                        data : res.data
                    })
                })
        }

    }
    //检查是否登录
    checkLogin(){
        const userInfo = this.props.userInfo;
        if(!userInfo.userName){
            this.props.history.push('/login')
            return false
        }
        return true
    }

    //上传评论
    submitComment = (data,callback) =>{
        console.log(data)
        commentSubmit(data)
            .then(res=>{
                if(res.success===true){
                    callback()
                }
            })
    }

    render(){
        return (
                <div>
                    <Head title="用户中心" backUrl="/"/>
                    <UserComponent userInfo={this.props.userInfo} />
                    <br/>
                    { this.state.data.length > 0 ?
                        <List data={this.state.data}
                              store={this.props.store}
                              userInfo={this.props.userInfo}
                              submitComment={this.submitComment}

                        />
                        : ""
                    }

                </div>
            )
    }
}
const mapStateToProps=(state)=>{
    return {
        userInfo : state.userInfo,
        store : state.store
    }
}

export default withRouter(connect (
    mapStateToProps
)(User))