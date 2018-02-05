/**
 * Created by Administrator on 2018/2/2.
 */
import React from "react"
import Head from "../../components/Head"
import Info from "./subpage/info"
import Comment from "./subpage/comment"
import Buy from "./subpage/buy"
import "../../static/css/list.css"

class Detail extends React.Component{
    render(){
        const id = this.props.match.params.id
        console.log(id)
        return (
            <div>
                <Head title="商品详情"/>
                <Info id={id} />
                <br/>
                <Buy id={id}/>
                <br/>
                <Comment id={id}/>
            </div>
        )
    }
}
export default Detail