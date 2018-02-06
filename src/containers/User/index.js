/**
 * Created by Administrator on 2018/2/5.
 */
import React from "react"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import Head from "../../components/Head"
import UserComponent from "../../components/User"
import List from "./subpage/list"

class User extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data : []
        }
    }

    componentDidMount() {
        const userId=this.props.userInfo.userId;
        fetch("http://rap2api.taobao.org/app/mock/4877/POST//buyList",{method:"post"},{userId:userId})
            .then(res=>res.json())
            .then(res=>{
                this.setState({
                    data : res.data
                })
            })
    }
    render(){
        return (
                <div>
                    <Head title="用户中心" backUrl="/"/>
                    <UserComponent userInfo={this.props.userInfo} />
                    <br/>
                    <List data={this.state.data} store={this.props.store}/>
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