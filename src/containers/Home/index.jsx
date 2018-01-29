import React from 'react'
import Header from "../../components/Head/index"
import {connect} from "react-redux"
import Category from "../../components/Category"

//首页
class Home extends React.Component {

    render() {
        return (
            <div>
                <Header cityName={this.props.userInfo.cityName}/>
                <Category/>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        userInfo : state.userInfo
    }
}


export default connect(
    mapStateToProps
)(Home)
