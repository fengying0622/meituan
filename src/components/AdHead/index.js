/**
 * Created by Administrator on 2018/1/30.
 */
import React from "react"
import {Link} from "react-router-dom"
import "../../static/css/AdHead.css"

class AdHead extends React.Component{

    render(){
        const data = this.props.data;
        return (
            <div className="adHead">
                <h2>超值特惠</h2>
                <div className="ad-container">
                {data.map((item,index)=>{
                    return (
                        <div key={index} className="ad-item">
                            <Link to={/table/+item.id}>
                                <img src={item.img} alt={item.title}/>
                            </Link>
                        </div>
                    )
                })}
                </div>
            </div>
        )

    }
}
export default AdHead