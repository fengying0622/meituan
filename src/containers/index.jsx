import React from 'react'
import {bindActionCreators} from "redux"
import {connect} from "react-redux"
import {update} from "../actions/userinfo"
//根路由
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
export default connect (
    mapStateToProps,
    mapDispatchToProps
)(App)


