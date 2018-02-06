/**
 * Created by Administrator on 2018/2/6.
 */
import React from "react"
import {Icon} from "antd"
import "../../static/css/user.css"

class UserComponent extends React.Component{
    render(){
        const userInfo = this.props.userInfo;
        return (
            <div>
                <h2 style={{fontSize:20}}>个 人 信 息</h2>
                <div className="user">
                    <div><Icon type="user"/>&nbsp;{userInfo.userName}</div>
                    <div><Icon type="environment-o" />&nbsp;{userInfo.cityName}</div>
                </div>
            </div>
        )
    }
}
export default UserComponent