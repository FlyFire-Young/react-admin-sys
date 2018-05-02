import React from "react";
import {Row, Col, Card, Popover, Tooltip, Button} from "antd";

import BreadcrumbCustom from "../BreadcrumbCustom";

const text = <span>Title</span>;

const contentSimple = (
	<div>
		<p>Content</p>
		<p>Content</p>
	</div>
);

const buttonWidth = 70;
const buttonRightWidth = 255;

class PopoverTypes extends React.Component {
	state = {
		visible: false,
	};
	hide = () => {
		this.setState({
			visible: false,
		});
	};
	handleVisibleChange = (visible) => {
		this.setState({visible});
	};

	render() {
		return (
			<div className="gutter-example button-demo">
				<BreadcrumbCustom first="UI" second="气泡卡片"/>
				<Row gutter={16}>
					<Col className="gutter-row" md={12}>
						<div className="gutter-box">
							<Card title={"基本"} bordered={false}>
								<Popover content={contentSimple} title="Title">
									<Button type="primary">Hover me</Button>
								</Popover>
							</Card>
						</div>
					</Col>
					<Col className="gutter-row" md={12}>
						<div className="gutter-box">
							<Card title={"三种触发方式"} bordered={false}>
								<div>
									<Popover content={contentSimple} title="Title" trigger="hover">
										<Button>Hover me</Button>
									</Popover>
									<Popover content={contentSimple} title="Title" trigger="focus">
										<Button>Focus me</Button>
									</Popover>
									<Popover content={contentSimple} title="Title" trigger="click">
										<Button>Click me</Button>
									</Popover>
								</div>
							</Card>
						</div>
					</Col>
					<Col className="gutter-row" md={12}>
						<div className="gutter-box">
							<Card title={"十二个方向"} bordered={false}>
								<div className="demo">
									<div style={{marginLeft: buttonWidth, whiteSpace: "nowrap"}}>
										<Popover placement="topLeft" title={text} content={contentSimple}
												 trigger="click">
											<Button>TL</Button>
										</Popover>
										<Popover placement="top" title={text} content={contentSimple} trigger="click">
											<Button>Top</Button>
										</Popover>
										<Popover placement="topRight" title={text} content={contentSimple}
												 trigger="click">
											<Button>TR</Button>
										</Popover>
									</div>
									<div style={{width: buttonWidth, float: "left"}}>
										<Popover placement="leftTop" title={text} content={contentSimple}
												 trigger="click">
											<Button>LT</Button>
										</Popover>
										<Popover placement="left" title={text} content={contentSimple} trigger="click">
											<Button>Left</Button>
										</Popover>
										<Popover placement="leftBottom" title={text} content={contentSimple}
												 trigger="click">
											<Button>LB</Button>
										</Popover>
									</div>
									<div style={{width: buttonWidth, marginLeft: buttonRightWidth}}>
										<Popover placement="rightTop" title={text} content={contentSimple}
												 trigger="click">
											<Button>RT</Button>
										</Popover>
										<Popover placement="right" title={text} content={contentSimple} trigger="click">
											<Button>Right</Button>
										</Popover>
										<Popover placement="rightBottom" title={text} content={contentSimple}
												 trigger="click">
											<Button>RB</Button>
										</Popover>
									</div>
									<div style={{marginLeft: buttonWidth, clear: "both", whiteSpace: "nowrap"}}>
										<Popover placement="bottomLeft" title={text} content={contentSimple}
												 trigger="click">
											<Button>BL</Button>
										</Popover>
										<Popover placement="bottom" title={text} content={contentSimple}
												 trigger="click">
											<Button>Bottom</Button>
										</Popover>
										<Popover placement="bottomRight" title={text} content={contentSimple}
												 trigger="click">
											<Button>BR</Button>
										</Popover>
									</div>
								</div>
							</Card>
						</div>
					</Col>
					<Col className="gutter-row" md={12}>
						<div className="gutter-box">
							<Card title={"从浮层内关闭"} bordered={false}>
								<Popover
									content={<a onClick={this.hide}>Close</a>}
									title="Title"
									trigger="click"
									visible={this.state.visible}
									onVisibleChange={this.handleVisibleChange}
								>
									<Button type="primary">Click me</Button>
								</Popover>
							</Card>
						</div>
					</Col>
					<Col className="gutter-row" md={12}>
						<div className="gutter-box">
							<Card title={"提示气泡"} bordered={false}>
								<div className="demo">
									<div style={{marginLeft: buttonWidth, whiteSpace: "nowrap"}}>
										<Tooltip placement="topLeft" title={text}>
											<Button>TL</Button>
										</Tooltip>
										<Tooltip placement="top" title={text}>
											<Button>Top</Button>
										</Tooltip>
										<Tooltip placement="topRight" title={text}>
											<Button>TR</Button>
										</Tooltip>
									</div>
									<div style={{width: buttonWidth, float: "left"}}>
										<Tooltip placement="leftTop" title={text}>
											<Button>LT</Button>
										</Tooltip>
										<Tooltip placement="left" title={text}>
											<Button>Left</Button>
										</Tooltip>
										<Tooltip placement="leftBottom" title={text}>
											<Button>LB</Button>
										</Tooltip>
									</div>
									<div style={{width: buttonWidth, marginLeft: buttonRightWidth}}>
										<Tooltip placement="rightTop" title={text}>
											<Button>RT</Button>
										</Tooltip>
										<Tooltip placement="right" title={text}>
											<Button>Right</Button>
										</Tooltip>
										<Tooltip placement="rightBottom" title={text}>
											<Button>RB</Button>
										</Tooltip>
									</div>
									<div style={{marginLeft: buttonWidth, clear: "both", whiteSpace: "nowrap"}}>
										<Tooltip placement="bottomLeft" title={text}>
											<Button>BL</Button>
										</Tooltip>
										<Tooltip placement="bottom" title={text}>
											<Button>Bottom</Button>
										</Tooltip>
										<Tooltip placement="bottomRight" title={text}>
											<Button>BR</Button>
										</Tooltip>
									</div>
								</div>
							</Card>
						</div>
					</Col>
				</Row>
			</div>
		);
	}
}

export default PopoverTypes;
