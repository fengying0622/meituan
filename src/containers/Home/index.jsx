import React from 'react'
import Header from "../../components/Head/index"
import {connect} from "react-redux"
import Category from "../../components/Category"
import Ad from "./subpage/Ad"

//首页
class Home extends React.Component {

    render() {
        return (
            <div>
                <Header cityName={this.props.userInfo.cityName}/>
                <Category/>
                <div style={{height:'15px'}}></div>
                <Ad/>
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
