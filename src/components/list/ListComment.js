/**
 * Created by Administrator on 2018/2/2.
 */
import React from "react"
import Star from "../star"
import {Icon} from "antd"
class ListComment extends React.Component{
    render(){
        const data = this.props.data;
        return (
            <div>
                {data.map((item,index)=>{
                    const usernames = item.username;
                    return (
                        <div key={index}  className="item">
                            <div className="list">
                                <div className="phone"><Icon type="smile"/>&nbsp;{ usernames.substring(0,7)}****</div>
                                <Star number={item.star}/>
                                <div className="comment">评价：{item.comment}</div>
                                <br/>
                            </div>
                        </div>

                    )
                })}
            </div>
        )
    }
}
export default ListComment