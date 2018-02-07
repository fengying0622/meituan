/**
 * Created by Administrator on 2018/2/2.
 */
import React from "react"
import DetailInfo from "../../../components/detail"

class Info extends React.Component{
    constructor(props){
        super(props)
        this.state={
            info : []
        }
    }
    componentDidMount() {
        const id = this.props.id;
        fetch("http://rap2api.taobao.org/app/mock/4877/POST//detail",{method:"post"},{id:id})
            .then(res=>res.json())
            .then(res=>{
                this.setState({
                    info : res.data
                })
            })
    }
    render(){
        return <DetailInfo info={this.state.info} />
    }
}
export default Info