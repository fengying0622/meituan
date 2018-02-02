/**
 * Created by Administrator on 2018/2/2.
 */
import React from "react"
import LoadMore from "../../../components/list/LoadMore"
import ListComment from "../../../components/list/ListComment"
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
        const id = this.props.id;
       const result = fetch("http://rap2api.taobao.org/app/mock/4877/POST//comment",{method:'post'},{id:id})
        this.resultHandle(result)
    }
    LoadMoreData=()=>{
        this.setState({
            isLoadingMore: true
        })
        const page = this.state.page;
        const result =fetch("http://rap2api.taobao.org/app/mock/4877/POST//comment",{method:"get"})
        this.resultHandle(result)

        this.setState({
            page: page + 1,
            isLoadingMore: false
        })

    }
    resultHandle(result){
        result.then(res=>res.json())
            .then(res=>{
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
