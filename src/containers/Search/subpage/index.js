/**
 * Created by Administrator on 2018/2/1.
 */
/**
 * Created by Administrator on 2018/1/29.
 */
import React from "react"
import ListComponent from "../../../components/list"
import "../../../static/css/list.css"
import LoadMore from "../../../components/list/LoadMore"
import {getLikeList} from "../../../api"

const initialState = {
    data: [],
    hasMore: false,
    isLoadingMore: false,
    page: 0
}

class List extends React.Component{
    constructor(props){
        super(props)
        this.state = initialState
    }
    componentDidMount() {
        const result =getLikeList()
        this.resultHandle(result)

    }
    componentWillReceiveProps(nextProps){
        console.log("nextprops="+nextProps.keyword);
    }
    //页面再次渲染时用componentDidUpdate
    componentDidUpdate(prevProps) {
        const keyword = this.props.keyword
        const category = this.props.category
        console.log("prevProps"+prevProps.keyword);

        // 搜索条件完全相等时，忽略
        if (keyword === prevProps.keyword && category === prevProps.category) {
            return
        }

        // 重置 state
        this.setState(initialState)

        // 重新加载数据
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
                this.setState({
                    data: this.state.data.concat(data),
                    hasMore: hasMore
                })
            })
    }

    render(){
        return (
            <div>
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