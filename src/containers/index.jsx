import React from 'react'
import {bindActionCreators} from "redux"
import {connect} from "react-redux"
import {update} from "../actions/userinfo"
import {withRouter} from "react-router-dom"
//根路由
//withRouter作用：页面跟路由绑定，没有这个，会发生路由变了但页面不跳转bug
class App extends React.Component {
    constructor(props){
        super(props);
        this.state={
            initDone : false,
            cityName :"南京"
        }
    }
    componentDidMount() {
        this.setState({
            initDone : true
        })
        //将城市信息存储到redux
        this.props.userInfoActions({cityName:this.state.cityName})
    }

    render() {
        return (
            <div>
                {this.state.initDone? this.props.children : <div>正在加载...</div>}
            </div>
        )
    }

}

const mapStateToProps = () =>{
    return {}
}

const mapDispatchToProps = (dispatch) =>{
    return {
        userInfoActions : bindActionCreators(update,dispatch)
    }
}
export default withRouter(connect (
    mapStateToProps,
    mapDispatchToProps
)(App))


