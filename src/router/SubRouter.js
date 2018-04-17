/**
 * Created by Administrator on 2018/1/23.
 */
import React from "react"
import {Route,Switch} from "react-router-dom"
import Home from "../containers/Home"
import City from "../containers/City"
import Table from "../containers/Table"
import Search from "../containers/Search"
import Detail from "../containers/Detail"
import Login from "../containers/Login"
import User from "../containers/User"
import NotFound from "../containers/404"

/*switch 挨个匹配，直到匹配到"/city",换成div的话，404也会显示出来
exact 指准确匹配，没有exact，匹配"/city"时会首先命中"/"，与之匹配的Home组件就会显示出来，加了exact则不会匹配Home
相当于：子路由不加载父路由的内容
* */
class SubRouter extends React.Component{
    render(){
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/city" component={City} />
                <Route path="/table/:id" component={Table} />
                <Route path="/search/:category/:keyword?" component={Search} />
                <Route path="/detail/:id" component={Detail}/>
                <Route path="/login/:router?" component={Login}/>
                <Route path="/user" component={User}/>
                <Route component={NotFound}/>
            </Switch>
        )
    }
}
export default SubRouter