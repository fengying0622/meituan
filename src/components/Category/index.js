/**
 * Created by Administrator on 2018/1/26.
 */
import React from "react"
import ReactSwipe from "react-swipe"
import "../../static/css/category.css"
import {Link} from "react-router-dom"

//轮播图：react-swipe
class Category extends React.Component{

    constructor(props){
        super(props)
        this.state={
            index:0
        }
    }
    render(){
        var opt = {
            auto : 1000,
            callback : function(index){
                this.setState({
                    index : index
                })
            }.bind(this)

        }

        return (
            <div className="home-category">
                <ReactSwipe swipeOptions={opt}>
                    <div className="carousel-item">
                        <ul>
                            <Link to="/search/jingdian"><li className="float-left jingdian">景点</li></Link>
                            <Link to="/search/KTV"><li className="float-left ktv">KTV</li></Link>
                            <Link to="/search/gouwu"><li className="float-left gouwu">购物</li></Link>
                            <Link to="/search/shenghuofuwu"><li className="float-left shenghuofuwu">生活服务</li></Link>
                            <Link to="/search/jianshenyundong"><li className="float-left jianshenyundong">健身运动</li></Link>
                            <Link to="/search/meifa"><li className="float-left meifa">美发</li></Link>
                            <Link to="/search/qinzi"><li className="float-left qinzi">亲子</li></Link>
                            <Link to="/search/xiaochi"><li className="float-left xiaochikuaican">小吃快餐</li></Link>
                            <Link to="/search/zizhucan"><li className="float-left zizhucan">自助餐</li></Link>
                            <Link to="/search/jiuba"><li className="float-left jiuba">酒吧</li></Link>
                        </ul>
                    </div>
                    <div className="carousel-item">
                        <ul>
                            <li className="float-left meishi">美食</li>
                            <li className="float-left dianying">电影</li>
                            <li className="float-left jiudian">酒店</li>
                            <li className="float-left xuixianyule">休闲娱乐</li>
                            <li className="float-left waimai">外卖</li>
                            <li className="float-left huoguo">火锅</li>
                            <li className="float-left liren">丽人</li>
                            <li className="float-left dujiachuxing">度假出行</li>
                            <li className="float-left zuliaoanmo">足疗按摩</li>
                            <li className="float-left zhoubianyou">周边游</li>
                        </ul>
                    </div>
                    <div className="carousel-item">
                        <ul>
                            <li className="float-left ribencai">日本菜</li>
                            <li className="float-left SPA">SPA</li>
                            <li className="float-left jiehun">结婚</li>
                            <li className="float-left xuexipeixun">学习培训</li>
                            <li className="float-left xican">西餐</li>
                            <li className="float-left huochejipiao">火车机票</li>
                            <li className="float-left shaokao">烧烤</li>
                            <li className="float-left jiazhuang">家装</li>
                            <li className="float-left chongwu">宠物</li>
                            <li className="float-left quanbufenlei">全部分类</li>
                        </ul>
                    </div>
                </ReactSwipe>
                <div className="index-container">
                    <ul>
                        <li className={this.state.index === 0 ? "selected" : ''}/>
                        <li className={this.state.index === 1 ? "selected" : ''}/>
                        <li className={this.state.index === 2 ? "selected" : ''}/>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Category