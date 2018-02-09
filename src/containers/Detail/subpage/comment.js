/**
 * Created by Administrator on 2018/2/2.
 */
import React from "react"
import LoadMore from "../../../components/list/LoadMore"
import ListComment from "../../../components/list/ListComment"
import {commentByID} from "../../../api"
class Comment extends React.Component{
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
        const value ={
            id : this.props.id
        }
       const result = commentByID(value)
        this.resultHandle(result)
    }
    LoadMoreData=()=>{
        this.setState({
            isLoadingMore: true
        })
        const value ={
            id : this.props.id
        }
        const page = this.state.page;
        const result = commentByID(value);
        this.resultHandle(result);

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
        console.log(this.state.page)
        return (
            <div>
                <h2 style={{fontSize:25}}>用 户 点 评</h2>
                <div>
                    {this.state.data.length ?
                        <ListComment data={this.state.data}/> : <div>loading</div>}
                </div>
                <div>
                    {this.state.hasMore ?
                        <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.LoadMoreData}/> : ""}
                </div>
            </div>
        )
    }
}
export default Comment
