/**
 * Created by Administrator on 2018/1/29.
 */
import React from "react"
import ListComponent from "../../../components/list"
import "../../../static/css/list.css"

class List extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data : [],
            hasMore : false
        }
    }
    componentDidMount() {
        fetch("http://rap2api.taobao.org/app/mock/4877/GET//likeList",{method:"get"})
            .then(res=>res.json())
            .then(res=>{
                const hasMore = res.hasMore;
                const data = res.data;
                console.log(data)
                this.setState({
                    data : data,
                    hasMore : hasMore
                })
            })
    }

    render(){
        return (
            <div>
                <h2>猜你喜欢</h2>
                <div>{this.state.data.length ?
                    <ListComponent data={this.state.data}/> : <div>loading</div>}
                </div>
            </div>
            )
    }
}
export default List