import React from "react";
import {Row, Col, Card, Tabs, Icon } from "antd";

import BreadcrumbCustom from "../BreadcrumbCustom";
import AddTabType from "./AddTabType";
import PositionsTabType from "./PositionsTabType";

const TabPane = Tabs.TabPane;

function callback(key) {
	console.log(key);
}

class TabTypes extends React.Component {

	render() {
		return (
			<div className="gutter-example button-demo">
				<BreadcrumbCustom first="UI" second="标签页"/>
				<Row gutter={16}>
					<Col className="gutter-row" md={12}>
						<div className="gutter-box">
							<Card title={"基本"} bordered={false}>
								<Tabs defaultActiveKey="1" onChange={callback}>
									<TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
									<TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
									<TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
								</Tabs>
							</Card>
						</div>
					</Col>
					<Col className="gutter-row" md={12}>
						<div className="gutter-box">
							<Card title={"禁用"} bordered={false}>
								<Tabs defaultActiveKey="1">
									<TabPane tab="Tab 1" key="1">Tab 1</TabPane>
									<TabPane tab="Tab 2" disabled key="2">Tab 2</TabPane>
									<TabPane tab="Tab 3" key="3">Tab 3</TabPane>
								</Tabs>
							</Card>
						</div>
					</Col>
					<Col className="gutter-row" md={12}>
						<div className="gutter-box">
							<Card title={"图标"} bordered={false}>
								<Tabs defaultActiveKey="2">
									<TabPane tab={<span><Icon type="apple" />Tab 1</span>} key="1">
										Tab 1
									</TabPane>
									<TabPane tab={<span><Icon type="android" />Tab 2</span>} key="2">
										Tab 2
									</TabPane>
								</Tabs>
							</Card>
						</div>
					</Col>
					<Col className="gutter-row" md={12}>
						<div className="gutter-box">
							<Card title={"新增"} bordered={false}>
								<AddTabType/>
							</Card>
						</div>
					</Col>
					<Col className="gutter-row" md={12}>
						<div className="gutter-box">
							<Card title={"不同位置标签页"} bordered={false}>
								<PositionsTabType/>
							</Card>
						</div>
					</Col>
				</Row>
			</div>
		);
	}
}

export default TabTypes;
