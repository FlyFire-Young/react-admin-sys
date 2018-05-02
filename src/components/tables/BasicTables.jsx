import React from "react";
import {Row, Col, Card} from "antd";
import BreadcrumbCustom from "../BreadcrumbCustom";

import BasicTable from "./BasicTable";
import ControllableCustomScreeningAndSortingTable from "./ControllableCustomScreeningAndSortingTable";
import ControllableScreeningAndSortingTable from "./ControllableScreeningAndSortingTable";
import DeployableTable from "./DeployableTable";
import DynamicControlTable from "./DynamicControlTable";
import EditorialLineTable from "./EditorialLineTable";

class BasicTables extends React.Component {

	render() {
		return (
			<div className="gutter-example button-demo">
				<BreadcrumbCustom first="UI" second="表格示例（一）"/>
				<Row gutter={16}>
					<Col className="gutter-row" md={24}>
						<div className="gutter-box">
							<Card title={"动态操作表格"} bordered={false}>
								<DynamicControlTable/>
							</Card>
						</div>
					</Col>
					<Col className="gutter-row" md={12}>
						<div className="gutter-box">
							<Card title={"基本表格"} bordered={false}>
								<BasicTable/>
							</Card>
						</div>
					</Col>
					<Col className="gutter-row" md={12}>
						<div className="gutter-box">
							<Card title={"自定义序列表格"} bordered={false}>
								<ControllableCustomScreeningAndSortingTable/>
							</Card>
						</div>
					</Col>
					<Col className="gutter-row" md={12}>
						<div className="gutter-box">
							<Card title={"序列表格"} bordered={false}>
								<ControllableScreeningAndSortingTable/>
							</Card>
						</div>
					</Col>
					<Col className="gutter-row" md={12}>
						<div className="gutter-box">
							<Card title={"可编辑行表格"} bordered={false}>
								<EditorialLineTable/>
							</Card>
						</div>
					</Col>
					<Col className="gutter-row" md={12}>
						<div className="gutter-box">
							<Card title={"折叠表格"} bordered={false}>
								<DeployableTable/>
							</Card>
						</div>
					</Col>
				</Row>
			</div>
		);
	}
}

export default BasicTables;
