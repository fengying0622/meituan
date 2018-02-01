/**
 * Created by Administrator on 2018/1/31.
 */
import React from "react"


class LoadMore extends React.Component {

    loadMoreHandle =()=> {
        this.props.loadMoreFn();
    }
    componentDidMount() {
        // 使用滚动时自动加载更多
        const loadMoreFn = this.props.loadMoreFn
        const wrapper = this.refs.wrapper
        //节流,数字
        let timeoutId
        function callback() {
            /*Element.getBoundingClientRect()方法返回元素的大小及其相对于视口的位置。
               rectObject.top：元素上边到视窗上边的距离;
             　rectObject.right：元素右边到视窗左边的距离;
             　rectObject.bottom：元素下边到视窗上边的距离;
             　rectObject.left：元素左边到视窗左边的距离;
            * */
            const top = wrapper.getBoundingClientRect().top
            const windowHeight = window.screen.height
            if (top && top < windowHeight) {
                // 证明 wrapper 已经被滚动到暴露在页面可视范围之内了
                loadMoreFn()
            }
        }
        window.addEventListener('scroll', function () {
            //加载中时不需要再加载
            if (this.props.isLoadingMore) {
                return
            }
            //如果有数字，则不执行定时任务
            if (timeoutId) {
                clearTimeout(timeoutId)
            }
            timeoutId = setTimeout(callback, 30)
        }.bind(this), false);
    }

    render(){
        return (
            <div className="load-more" ref="wrapper">
                {
                    this.props.isLoadingMore
                        ? <span>加载中...</span>
                        : <span onClick={this.loadMoreHandle}>加载更多</span>
                }
            </div>
        )

    }
}
export default LoadMore