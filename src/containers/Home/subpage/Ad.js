/**
 * Created by Administrator on 2018/1/29.
 */
import React from "react"
import AdHead from "../../../components/AdHead/index"
import {getCategory} from "../../../api"
class Ad extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data : []
        }
    }
    componentDidMount() {
        getCategory()
            .then(res=>{
                const data = res.data;
                console.log(data)
                this.setState({
                    data : data
                })
            })
    }

    render(){

        return(
            <div>
                {
                    this.state.data.length ?  <AdHead data={this.state.data}/> : <div>正在加载...</div>
                }
            </div>
        )
    }
}
export default Ad