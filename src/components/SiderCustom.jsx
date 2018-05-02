import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import {Layout} from "antd";
import SiderMenu from "./SiderMenu";
import {menus} from "../constants/menus";

const {Sider} = Layout;

class SiderCustom extends Component {
	state = {
		openKey: "",
		firstHide: true,
		mode: "inline",
		theme: "light",
		collapsed: false,
		selectedKey: ""
	};

	componentDidMount() {
		this.setMenuOpen(this.props);
	}

	componentWillReceiveProps(nextProps) {
		this.onCollapse(nextProps.collapsed);
		this.setMenuOpen(nextProps);
	}

	onCollapse = (collapsed) => {
		this.setState({
			collapsed,
			firstHide: collapsed,
			mode: collapsed ? "vertical" : "inline",
		});
	};
	setMenuOpen = props => {
		const {pathname} = props.location;
		this.setState({
			openKey: pathname.substr(0, pathname.lastIndexOf("/")),
			selectedKey: pathname
		});
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

	openMenu = v => {
		this.setState({
			openKey: v[v.length - 1],
			firstHide: false,
		});
	};

	render() {
		return (
			<Sider
				trigger={null}
				collapsed={this.props.collapsed}
				mode={this.state.mode}
				theme={this.state.theme}
				style={{ overflowY: 'auto' }}
			>
				<SiderMenu
					menus={menus}
					onClick={this.menuClick}
					mode={this.state.mode}
					theme={this.state.theme}
					selectedKeys={[this.state.selectedKey]}
					openKeys={this.state.firstHide ? null : [this.state.openKey]}
					onOpenChange={this.openMenu}
				/>
			</Sider>
		);
	}
}

export default withRouter(SiderCustom);