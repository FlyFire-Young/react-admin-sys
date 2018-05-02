import React, {Component} from "react";
import {Layout, notification, Icon} from "antd";
import "./style/index.less";
import SiderCustom from "./components/SiderCustom";
import HeaderCustom from "./components/HeaderCustom";
import {receiveData} from "./action";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Routes from "./routes";

const {Content, Footer} = Layout;

class App extends Component {
	state = {
		collapsed: false,
	};
	toggle = () => {
		this.setState({
			collapsed: !this.state.collapsed,
		});
	};
	componentWillMount() {
		const { receiveData } = this.props;
		const user = JSON.parse(localStorage.getItem('user'));
		user && receiveData(user, 'auth');
		this.getClientWidth();
		window.onresize = () => {
			this.getClientWidth();
		}
	}
	getClientWidth = () => {    // 获取当前浏览器宽度并设置responsive管理响应式
		const { receiveData } = this.props;
		const clientWidth = document.body.clientWidth;
		receiveData({isMobile: clientWidth <= 992}, 'responsive');
	};
	render() {
		const {auth, responsive} = this.props;
		return (
			<Layout>
				{!responsive.data.isMobile && <SiderCustom collapsed={this.state.collapsed}/>}
				<Layout style={{flexDirection: "column"}}>
					<HeaderCustom toggle={this.toggle} collapsed={this.state.collapsed} user={auth.data || {}}/>
					<Content style={{margin: "0 16px", overflow: "initial"}}>
						<Routes auth={auth}/>
					</Content>
					<Footer style={{textAlign: "center"}}>
						React+antd+metarial+webpack create by 2018-04-11
					</Footer>
				</Layout>
			</Layout>
		);
	}
}

const mapStateToProps = state => {
	const {auth = {data: {}}, responsive = {data: {}}} = state.httpData;
	return {auth, responsive};
};
const mapDispatchToProps = dispatch => ({
	receiveData: bindActionCreators(receiveData, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
