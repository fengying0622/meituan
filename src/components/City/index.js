/**
 * Created by Administrator on 2018/1/31.
 */
import React from "react"
import "../../static/css/city.css"

class CurrentCity extends React.Component{
    render(){
        return <div className="current">{this.props.cityName}</div>
    }
}
export default CurrentCity