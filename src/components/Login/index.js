/**
 * Created by Administrator on 2018/2/5.
 */
import React from "react"
import {userLogin} from "../../api"
import {Row,Form,Input,Checkbox,Button,Icon} from "antd"
class LoginComponent extends React.Component{
    doLogin = (e) =>{
        e.preventDefault();
        this.props.form.validateFields((err, value)=>{
            console.log("JSON对象"+value)
            if(!err){
                userLogin(value)
                    .then(res=>{
                        if(res.success){
                            //存入redux
                            this.props.successAfterLogin(value);
                        }
                    })
            }
        })
    }
    render (){
        const { getFieldDecorator } = this.props.form;
          return (
              <Row className='login' type='flex' justify='center' align='middle' >
                  <Form onSubmit={this.doLogin}>

                      <Form.Item>
                          {
                              getFieldDecorator('username', {
                                  rules: [{required: true, message: '请输入用户名或手机号'}],
                                  initialValue:'1595977921'
                              })(
                                  <Input prefix={<Icon type='user' />} placeholder='手机号' style={{fontSize: 18}} />
                              )
                          }
                      </Form.Item>
                      <Form.Item>
                          {
                              getFieldDecorator('password', {
                                  rules: [{required: true, message: '请输入密码！'}],
                                  initialValue:'sadmin123'
                              })(
                                  <Input type='password' prefix={<Icon type='lock' style={{fontSize: 18}} />} placeholder='密码' />
                              )
                          }
                      </Form.Item>
                      <Form.Item className='tool'>
                          {getFieldDecorator('remember', {
                              valuePropName: 'checked',
                              initialValue: true,
                          })(
                              <Checkbox>记住密码</Checkbox>
                          )}
                          <Button type="primary" htmlType="submit" className="login-form-button" style={{marginLeft:70}}>
                              登录
                          </Button>
                      </Form.Item>


                  </Form>
              </Row>
          )
    }
}
export default Form.create()(LoginComponent)