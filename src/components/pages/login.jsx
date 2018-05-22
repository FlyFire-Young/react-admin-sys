import React from "react";
import {Form, Icon, Input, Button, Checkbox} from 'antd';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchData, receiveData} from '../../action';

const FormItem = Form.Item;


class LoginForm extends React.Component {
    state = {
        realAuthCus: false,
        userDataCus: {},
    };

    componentWillMount() {
        const {receiveData} = this.props;
        receiveData(null, 'auth');
    }

    componentWillReceiveProps(nextProps) {
        const {auth: nextAuth = {}} = nextProps;
        const {history} = this.props;
        if (this.realAuthCus) {   // 判断是否登陆
            localStorage.setItem('user', JSON.stringify(this.userDataCus));
            history.push('/');
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                this.realAuthCus = true;
                this.userDataCus = values;
                // const {fetchData} = this.props;
                // if (values.userName === 'admin' && values.password === 'admin') fetchData({
                //     funcName: 'admin',
                //     stateName: 'auth'
                // });
                // if (values.userName === 'guest' && values.password === 'guest') fetchData({
                //     funcName: 'guest',
                //     stateName: 'auth'
                // });
            }
        });
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div className="login">
                <div className="login-form-cus">
                    <div className="login-logo">
                        <span>React Admin</span>
                    </div>
                    <div className="gutter-example">
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <FormItem>
                                {getFieldDecorator("userName", {
                                    rules: [{required: true, message: "请输入用户名!"}],
                                })(
                                    <Input prefix={<Icon type="user" style={{color: "rgba(0,0,0,.25)"}}/>}
                                           placeholder="管理员输入admin, 游客输入guest"/>
                                )}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator("password", {
                                    rules: [{required: true, message: "请输入密码!"}],
                                })(
                                    <Input prefix={<Icon type="lock" style={{color: "rgba(0,0,0,.25)"}}/>}
                                           type="password"
                                           placeholder="管理员输入admin, 游客输入guest"/>
                                )}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator("remember", {
                                    valuePropName: "checked",
                                    initialValue: true,
                                })(
                                    <Checkbox>记住我</Checkbox>
                                )}
                                <a className="login-form-forgot" href="">忘记密码</a>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    Log in
                                </Button>
                                <a href="">或 现在就去注册!</a>
                            </FormItem>
                        </Form>
                    </div>
                </div>
            </div>

        );
    }

}

const Login = Form.create()(LoginForm);

const mapStateToPorps = state => {
    const {auth} = state.httpData;
    return {auth};
};
const mapDispatchToProps = dispatch => ({
    fetchData: bindActionCreators(fetchData, dispatch),
    receiveData: bindActionCreators(receiveData, dispatch)
});


export default connect(mapStateToPorps, mapDispatchToProps)(Login);