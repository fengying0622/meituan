/**
 * Created by Administrator on 2018/2/7.
 */
import React from "react"

class Order extends React.Component{
    constructor(props){
        super(props)
        this.state={
            status : 2,  //0,1,2 未评价,评价中,已评价
            comment: '',
            stars: [],
            name : 'rose'
        }
    }

    componentDidMount() {
        this.setState({
            status : this.props.data.status
        })
    }

    clickHandle = () =>{
        this.setState({
            status : 1
        })
    }

    submitClick =()=>{
        const comment = this.refs.comment;
        const value = comment.value.trim();
        if(!value){
            return
        }else{
            this.setState({
                comment : value
            })
        }
        const id = this.props.data.id;
        const userName = this.props.userName;
        console.log(userName);
        const data ={
            value : value,
            id : id,
            userName : userName
        }
        const submitComment = this.props.submitComment;
        submitComment(data,this.commentOK)
    }

    commentOK=()=>{
        this.setState({
            status : 2
        })
    }

    cancelClick =() =>{
        this.setState({
            status : 0
        })
    }

    // starClickCallback(star) {
    //     let stars = this.state.name;
    //     const id = this.props.data.id;
    //     stars[id] = star;
    //
    //     this.setState({
    //         stars: stars
    //     })
    // }

    render(){
        const data = this.props.data;
        return (
            <div className="buy-item">
                <div className="buy-img">
                    <img src={data.img} alt={data.shop}/>
                </div>
                <div  className="buy-comment">
                    {
                        this.state.status === 0 ?
                            <button onClick={this.clickHandle}>评 价</button> :
                            this.state.status=== 1 ?
                                '':
                                <button>已评价</button>
                    }
                </div>
                <div className="buy-detail">
                    <span>商户：{data.shop}</span>
                    <span>{data.type}</span>
                    <span>数量：{data.num}</span>
                    <span>价格：￥{data.price}</span>
                    {this.state.comment==='' ? '' : <span>评价：{this.state.comment}</span>}
                </div>
                {this.state.status ===1 ?
                    <div className="buy-comment-submit">
                        <textarea ref="comment"/>
                        {/*<Star  star="0" clickCallback={this.starClickCallback}/>*/}
                        <button onClick={this.submitClick}>提 交</button>
                        <button onClick={this.cancelClick} className="cancel">取 消</button>
                    </div> : ''}
            </div>
        )
    }
}
export default Order