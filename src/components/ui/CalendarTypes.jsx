import React from "react";
import {Row, Col, Card, Calendar, Badge} from "antd";

import BreadcrumbCustom from "../BreadcrumbCustom";

class CalendarTypes extends React.Component {

	onPanelChange = (value, mode) => {
		console.log(value, mode);
	};

	getListData = (value) => {
		let listData;
		switch (value.date()) {
			case 8:
				listData = [
					{type: "warning", content: "This is warning event."},
					{type: "success", content: "This is usual event."},
				];
				break;
			case 10:
				listData = [
					{type: "warning", content: "This is warning event."},
					{type: "success", content: "This is usual event."},
					{type: "error", content: "This is error event."},
				];
				break;
			case 15:
				listData = [
					{type: "warning", content: "This is warning event"},
					{type: "success", content: "This is very long usual event。。...."},
					{type: "error", content: "This is error event 1."},
					{type: "error", content: "This is error event 2."},
					{type: "error", content: "This is error event 3."},
					{type: "error", content: "This is error event 4."},
				];
				break;
			default:
		}
		return listData || [];
	};

	dateCellRender = (value) => {
		const listData = this.getListData(value);
		return (
			<ul className="events-calendar-types">
				{
					listData.map(item => (
						<li key={item.content}>
							<Badge status={item.type} text={item.content}/>
						</li>
					))
				}
			</ul>
		);
	};

	getMonthData = (value) => {
		if (value.month() === 8) {
			return 1394;
		}
	};

	monthCellRender = (value) => {
		const num = this.getMonthData(value);
		return num ? (
			<div className="notes-month-calendar-types">
				<section>{num}</section>
				<span>Backlog number</span>
			</div>
		) : null;
	};

	render() {
		return (
			<div className="gutter-example button-demo">
				<BreadcrumbCustom first="UI" second="日历"/>
				<Row gutter={16}>
					<Col className="gutter-row" md={24}>
						<div className="gutter-box">
							<Card bordered={false}>
								<Calendar onPanelChange={this.onPanelChange}/>
							</Card>
						</div>
					</Col>
					<Col className="gutter-row" md={24}>
						<div className="gutter-box">
							<Card bordered={false}>
								<Calendar dateCellRender={this.dateCellRender} monthCellRender={this.monthCellRender}/>
							</Card>
						</div>
					</Col>
				</Row>
			</div>
		);
	}
}

export default CalendarTypes;
