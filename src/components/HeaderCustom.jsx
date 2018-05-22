import React, {Component} from "react";
import {Menu, Icon, Layout, Badge, Popover, Divider} from "antd";
import screenfull from "screenfull";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import SiderCustom from './SiderCustom';
const {Header} = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


class HeaderCustom extends Component {
	state = {
		current: "bank",
		visible: false,
        user: '',
	};
	handleClick = (e) => {
		this.setState({
			current: e.key,
		});
	};
	screenFull = () => {
		if (screenfull.enabled) {
			screenfull.request();
		}
	};
    logout = () => {
        localStorage.removeItem('user');
        this.props.history.push('/login')
    };
	popoverHide = () => {
		this.setState({
			visible: false,
		});
	};
	handleVisibleChange = (visible) => {
		this.setState({ visible });
	};
	render() {
		const {responsive, path} = this.props;
		return (
			<Header style={{background: "#fff", padding: 0, height: 65}}>
				{
					responsive.data.isMobile ? (
						<Popover content={<SiderCustom path={path} popoverHide={this.popoverHide} />} trigger="click" placement="bottomLeft" visible={this.state.visible} onVisibleChange={this.handleVisibleChange}>
							<Icon type="bars" className="trigger custom-trigger" />aaa
						</Popover>
					) : (
						<Icon
							className="trigger custom-trigger"
							type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
							onClick={this.props.toggle}
							style={{lineHeight: "64px", float: "left"}}
						/>
					)
				}
				<Menu
					onClick={this.handleClick}
					selectedKeys={[this.state.current]}
					mode="horizontal"
					style={{lineHeight: "64px", float: "right"}}
				>
					<Menu.Item key="google" disabled>
						<Icon type="google"/>{this.props.user.userName}
					</Menu.Item>
					<SubMenu title={<span><Icon type="user"/>{this.props.user.userName}</span>}>
						<MenuItemGroup title="用户中心">
							<Menu.Item key="setting:1">你好 - {this.props.user.userName}</Menu.Item>
							<Menu.Item key="setting:2">个人信息</Menu.Item>
							<Menu.Item key="logout"><span onClick={this.logout}>退出登录</span></Menu.Item>
						</MenuItemGroup>
						<MenuItemGroup title="设置中心">
							<Menu.Item key="setting:3">个人设置</Menu.Item>
							<Menu.Item key="setting:4">系统设置</Menu.Item>
						</MenuItemGroup>
					</SubMenu>
				</Menu>
			</Header>
		);
	}
}

const mapStateToProps = state => {
	const {responsive = {data: {}}} = state.httpData;
	return {responsive};
};

export default withRouter(connect(mapStateToProps)(HeaderCustom));
