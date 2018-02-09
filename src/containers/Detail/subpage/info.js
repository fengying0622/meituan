/**
 * Created by Administrator on 2018/2/2.
 */
import React from "react"
import DetailInfo from "../../../components/detail"
import {detailByID} from "../../../api"

class Info extends React.Component{
    constructor(props){
        super(props)
        this.state={
            info : []
        }
    }
    componentDidMount() {
        const id = this.props.id;
        const value ={
            id : id
        }
        detailByID(value)
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