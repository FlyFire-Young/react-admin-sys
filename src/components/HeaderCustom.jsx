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
					style={{lineHeight: "64px", float: "left"}}
				>
					<Menu.Item key="full" onClick={this.screenFull} >
						<Icon type="arrows-alt" onClick={this.screenFull} />
					</Menu.Item>
					<Menu.Item key="profile">
						<Icon type="profile"/>文档
					</Menu.Item>
					<Menu.Item key="download">
						<Icon type="download"/>下载
					</Menu.Item>
					<Menu.Item key="bank">
						<Icon type="bank"/>管理
					</Menu.Item>
				</Menu>
				<Menu
					onClick={this.handleClick}
					selectedKeys={[this.state.current]}
					mode="horizontal"
					style={{lineHeight: "64px", float: "right"}}
				>
					<Menu.Item key="google" disabled>
						<Icon type="google"/>Young
					</Menu.Item>
					<Menu.Item key="user" disabled>
						<Icon type="user"/>Young
					</Menu.Item>
					<Menu.Item key="poweroff">
						<Icon type="poweroff"/>退出
					</Menu.Item>
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
