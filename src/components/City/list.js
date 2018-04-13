/**
 * Created by Administrator on 2018/1/31.
 */
import React from 'react'
import "../../static/css/city.css"

class CityList extends React.Component {
    //构造方法里不能调用props
    constructor(){
        super();
        this.state={
            color:'red'
        }
    }
    clickHandle (cityName){
        const changeFn = this.props.changeFn
        changeFn(cityName)
    }
    //不能写js,会报错，因为此钩子在render初始化之前触发
    // componentWillMount(){
    //     this.setState({
    //         color:'red'
    //     })
    // }

    //初始化父组件的props时只能放在componentDidMount里，不能放在constructor里面,此时子组件color获得父组件的值
    componentDidMount(){
        console.log(this.props.color);
        var button = this.refs.button;
        button.style.color=this.props.color
    }
    // componentDidUpdate(){
    //     this.setState({
    //         color:'red'
    //     })
    // }
    clickButton=()=>{
        var button = this.refs.button;
        console.log(this.state.color)
        this.setState({
            color: button.style.color=this.state.color
        })

    }
    //父组件props发生变化时触发此钩子
    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        var button = this.refs.button;
        this.setState({
            color: button.style.color=nextProps.color

        })
    }

    render() {
        return (
            <div className="city-list">
                <button onClick={this.clickButton} ref="button">热门城市</button>
                <ul className="clear-fix">
                    <li>
                        <span onClick={this.clickHandle.bind(this, '北京')}>北京</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, '上海')}>上海</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, '杭州')}>杭州</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, '广州')}>广州</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, '苏州')}>苏州</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, '深圳')}>深圳</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, '南京')}>南京</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, '天津')}>天津</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, '重庆')}>重庆</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, '厦门')}>厦门</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, '武汉')}>武汉</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, '西安')}>西安</span>
                    </li>
                </ul>
            </div>
        )
    }

}

export default CityList