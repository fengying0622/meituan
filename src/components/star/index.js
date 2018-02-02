/**
 * Created by Administrator on 2018/2/2.
 */
import React from "react"
import {Icon} from "antd"

class Star extends React.Component{
    render(){
        const number = this.props.number;
        return (
            <div  className="star">
                {[1,2,3,4,5].map((item,index)=>{
                   const lightClass= number>=item ? "light":""
                    return (
                            <div key={index} className="star-show">
                                <Icon type="star" className={lightClass}/>
                            </div>
                        )
                })}
            </div>
        )
    }
}
export default Star