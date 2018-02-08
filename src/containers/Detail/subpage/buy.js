/**
 * Created by Administrator on 2018/2/5.
 */
import React from 'react'
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {withRouter} from "react-router-dom"
import {add,remove}from "../../../actions/store"
import BuyStore from "../../../components/BuyStore"

class Buy extends React.Component {

    constructor(props){
        super(props)
        this.state={
            isStore : false,
            info :[]
        }
    }

    componentDidMount() {
        //检查是否收藏
        const id = this.props.id
        const store = this.props.store
        console.log(store)
        // some 即任何一个满足即可
        store.some(item => {
            if (item.id === id) {
                // 已经被收藏
                this.setState({
                    isStore: true
                })
            }
            // 跳出循环
            return true
        })
        //通过主键获取详情
        fetch("http://rap2api.taobao.org/app/mock/4877/POST//detail",{method:"post"},{id:id})
            .then(res=>res.json())
            .then(res=>{
                this.setState({
                    info : res.data
                })
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
        const data = this.state.info;
        const addAction =this.props.addAction;
        const removeAction =this.props.removeAction;
        //如果已收藏，点击后将取消收藏
        if(this.state.isStore){
            removeAction(data)
        }else{
            addAction(data)
        }
        this.setState({
            isStore : !this.state.isStore
        })

    }

    render() {
        return (
           <BuyStore isStore={this.state.isStore}
                     buyHandle={this.buyHandle}
                     storeHandle={this.storeHandle}
           />
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
        addAction : bindActionCreators(add,dispatch),
        removeAction: bindActionCreators(remove,dispatch)
    }
}
export default withRouter(connect (
    mapStateToProps,
    mapDispatchToProps
)(Buy))