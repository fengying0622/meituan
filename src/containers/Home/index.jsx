import React from 'react'
import HomeHeader from "../../components/HomeHead/index"
import {connect} from "react-redux"
import Category from "../../components/Category"
import Ad from "./subpage/Ad"
import List from "./subpage/List"
import {withRouter} from "react-router-dom"

//首页
class Home extends React.Component {

    render() {
        return (
            <div>
                <HomeHeader cityName={this.props.userInfo.cityName} />
                <Category/>
                <Ad/>
                <List cityName={this.props.userInfo.cityName}/>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        userInfo : state.userInfo
    }
}


export default withRouter(connect(
    mapStateToProps
)(Home))
