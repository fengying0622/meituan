/**
 * Created by Administrator on 2018/2/5.
 */
import React from 'react'
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {withRouter} from "react-router-dom"
import * as storeActions from "../../../actions/store"
import BuyStore from "../../../components/BuyStore"

class Buy extends React.Component {

    constructor(props){
        super(props)
        this.state={
            isStore : false
        }
    }

    componentDidMount() {
        //检查是否收藏
        const id = this.props.id;
        const store = this.props.store;
        store.some(item=>{
            if(item.id === id){
                this.setState({
                    isStore : true
                })
                //some有一个满足就跳出循环
                return true
            }
        })

    }
    //检查是否登录
    checkLogin(){
        const userInfo = this.props.userInfo;
        const id = this.props.id;
        if(!userInfo.userName){
            this.props.history.push('/login/'+encodeURIComponent('/detail/' + id))
            return false
        }
        return true
    }

    buyHandle =()=>{
        const flag = this.checkLogin();
        if(!flag){
            return
        }
        //购买成功跳转到用户中心
        this.props.history.push('/user')
    }

    //收藏
    storeHandle =()=>{
        const flag = this.checkLogin();
        if(!flag){
            return
        }
        const id = this.props.id;
        const storeActions =this.props.storeActions;
        //如果已收藏，点击后将取消收藏
        if(this.state.isStore){
            storeActions.remove({id:id})
        }else{
            storeActions.add({id:id})
        }
        this.setState({
            isStore : !this.state.isStore
        })

    }

    render() {
        return (
           <BuyStore isStore={this.state.isStore} buyHandle={this.buyHandle} storeHandle={this.storeHandle}/>
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        userInfo : state.userInfo,
        store : state.store
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        storeActions : bindActionCreators(storeActions,dispatch)
    }
}
export default withRouter(connect (
    mapStateToProps,
    mapDispatchToProps
)(Buy))