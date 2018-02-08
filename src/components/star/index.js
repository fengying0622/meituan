/**
 * Created by Administrator on 2018/2/2.
 */
import React from "react"
import {Icon} from "antd"

class Star extends React.Component{
    constructor(props){
        super(props)
        this.state={
            star : 0
        }
    }

    clickHandle=(star)=>{
        const clickCallback = this.props.clickCallback
        if (!clickCallback) {
            return
        }
        this.setState({
            star : star
        })

        clickCallback(star)
    }

    render(){
        const number = this.props.number;
        return (
            <div  className="star">
                {[1,2,3,4,5].map((item,index)=>{
                   const lightClass= number>=item ? "light":""
                    return (
                            <div key={index} className="star-show">
                                <Icon type="star" star={item} className={lightClass} onClick={this.clickHandle}/>
                            </div>
                        )
                })}
            </div>
        )
    }
}
export default Star