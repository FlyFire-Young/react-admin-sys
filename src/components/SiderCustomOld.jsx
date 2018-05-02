import React, {Component} from "react";
import {withRouter, Link} from "react-router-dom";
import {Layout, Menu, Icon} from "antd";

const {Sider} = Layout;

class SiderCustom extends Component {
	state = {
		mode: "inline",
		theme: "light",
		collapsed: false,
		selectedKey: ""
	};
	toggle = () => {
		this.setState({
			collapsed: !this.state.collapsed,
		});
	};
	menuClick = e => {
		this.setState({
			selectedKey: e.key
		});
		const {popoverHide} = this.props;     // 响应式布局控制小屏幕点击菜单时隐藏菜单操作
		popoverHide && popoverHide();
	};

	render() {
		return (
			<Sider
				trigger={null}
				collapsed={this.props.collapsed}
				mode={this.state.mode}
				theme={this.state.theme}
			>
				<Menu
					onClick={this.menuClick}
					defaultSelectedKeys={["2"]}
					selectedKeys={[this.state.selectedKey]}
				>
					<Menu.Item key="/app/ui/buttons">
						<Link to={"/app/ui/buttons"}>
							<Icon type="home"/>
							<span>首页</span>
						</Link>
					</Menu.Item>
					<Menu.Item key="2">
						<Icon type="user"/>
						<span>用户信息</span>
					</Menu.Item>
					<Menu.Item key="3">
						<Icon type="appstore-o"/>
						<span>我的应用</span>
					</Menu.Item>
					<Menu.Item key="4">
						<Icon type="appstore"/>
						<span>插件市场</span>
					</Menu.Item>
					<Menu.Item key="5">
						<Icon type="scan"/>
						<span>模版集合</span>
					</Menu.Item>
					<Menu.Item key="6">
						<Icon type="shop"/>
						<span>我的订单</span>
					</Menu.Item>
					<Menu.Item key="7">
						<Icon type="eye-o"/>
						<span>优惠信息</span>
					</Menu.Item>
					<Menu.Item key="8">
						<Icon type="shopping-cart"/>
						<span>积分商城</span>
					</Menu.Item>
					<Menu.Item key="9">
						<Icon type="question-circle-o"/>
						<span>常见问题</span>
					</Menu.Item>
				</Menu>
			</Sider>
		);
	}
}

export default withRouter(SiderCustom);