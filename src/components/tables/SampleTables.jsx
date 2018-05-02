import React from "react";
import {Row, Col, Card} from "antd";

import BreadcrumbCustom from "../BreadcrumbCustom";
import EditTable from "./EditTable";
import NestingTable from "./NestingTable";
import SelectAndCustomOperationTable from "./SelectAndCustomOperationTable";
import SelectAndOperationTable from "./SelectAndOperationTable";
import SelectTable from "./SelectTable";
import TreeTable from "./TreeTable";

class BasicTables extends React.Component {

	render() {
		return (
			<div className="gutter-example button-demo">
				<BreadcrumbCustom first="UI" second="表格示例（二）"/>
				<Row gutter={16}>
					<Col className="gutter-row" md={12}>
						<div className="gutter-box">
							<Card title={"嵌套表格"} bordered={false}>
								<NestingTable/>
							</Card>
						</div>
					</Col>
					<Col className="gutter-row" md={12}>
						<div className="gutter-box">
							<Card title={"可编辑表格"} bordered={false}>
								<EditTable/>
							</Card>
						</div>
					</Col>
					<Col className="gutter-row" md={12}>
						<div className="gutter-box">
							<Card title={"选择表格"} bordered={false}>
								<SelectTable/>
							</Card>
						</div>
					</Col>
					<Col className="gutter-row" md={12}>
						<div className="gutter-box">
							<Card title={"选择和自定义操作表格"} bordered={false}>
								<SelectAndCustomOperationTable/>
							</Card>
						</div>
					</Col>
					<Col className="gutter-row" md={12}>
						<div className="gutter-box">
							<Card title={"树结构表格"} bordered={false}>
								<TreeTable/>
							</Card>
						</div>
					</Col>
					<Col className="gutter-row" md={12}>
						<div className="gutter-box">
							<Card title={"选择和操作表格"} bordered={false}>
								<SelectAndOperationTable/>
							</Card>
						</div>
					</Col>

				</Row>
			</div>
		);
	}
}

export default BasicTables;
