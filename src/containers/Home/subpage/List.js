/**
 * Created by Administrator on 2018/1/29.
 */
import React from "react"
import ListComponent from "../../../components/list"
import "../../../static/css/list.css"
import LoadMore from "../../../components/list/LoadMore"
import {getLikeList} from "../../../api"

class List extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data : [],
            hasMore : false,
            isLoadingMore:false,
            page: 1
        }
    }
    componentDidMount() {
        const result =getLikeList()
        this.resultHandle(result)

    }
    LoadMoreData=()=>{
        this.setState({
            isLoadingMore: true
        })
        const page = this.state.page;
        const result =getLikeList()
        this.resultHandle(result)

        this.setState({
            page: page + 1,
            isLoadingMore: false
        })

    }
    resultHandle(result){
        result.then(res=>{
                const hasMore = res.hasMore;
                const data = res.data;
                console.log(data)
                this.setState({
                    data: this.state.data.concat(data),
                    hasMore: hasMore
                })
            })
    }

    render(){
        return (
            <div>
                <h2>猜你喜欢</h2>
                <div>
                    {this.state.data.length ?
                    <ListComponent data={this.state.data}/> : <div>loading</div>}
                </div>
                <div>
                    {this.state.hasMore ?
                        <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.LoadMoreData}/> : ""}
                </div>
            </div>
            )
    }
}
export default List