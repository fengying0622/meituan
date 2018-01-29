/**
 * Created by Administrator on 2018/1/29.
 */
import React from "react"

class Ad extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data : []
        }
    }
    componentDidMount() {
        fetch("http://rap2api.taobao.org/app/mock/4877/GET//adverHead",{method:"get"})
            .then(res=>res.json())
            .then(res=>{
                const data = res.data;
                console.log(data)
                this.setState({
                    data : data
                })
            })
    }

    render(){
        return <div>{this.state.data.length}</div>
    }
}
export default Ad