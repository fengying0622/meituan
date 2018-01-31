/**
 * Created by Administrator on 2018/1/23.
 */
import React from "react"
import {Route,Router} from "react-router-dom"
import App from "../containers/index"
import createBrowserHistory from 'history/createBrowserHistory'
import SubRouter from "./SubRouter"
const history = createBrowserHistory()
/*APP为父路由
* */
class AppRouter extends React.Component {
    render() {
        return (
            <Router history={history}>
                <App>
                    <Route path="/" component={SubRouter}/>
                </App>
            </Router>
        )
    }
}
export default AppRouter
