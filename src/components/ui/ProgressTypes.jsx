import React from "react";
import {Row, Col, Card, Tooltip, Progress, Button} from "antd";
import BreadcrumbCustom from "../BreadcrumbCustom";

const ButtonGroup = Button.Group;

class ProgressTypes extends React.Component {
	state = {
		percent: 0,
		percentO: 0,
	};
	increase = () => {
		let percent = this.state.percent + 10;
		if (percent > 100) {
			percent = 100;
		}
		this.setState({percent});
	};
	increaseO = () => {
		let percentO = this.state.percentO + 10;
		if (percentO > 100) {
			percentO = 100;
		}
		this.setState({percentO});
	};
	decline = () => {
		let percent = this.state.percent - 10;
		if (percent < 0) {
			percent = 0;
		}
		this.setState({percent});
	};
	declineO = () => {
		let percentO = this.state.percentO - 10;
		if (percentO < 0) {
			percentO = 0;
		}
		this.setState({percentO});
	};

	render() {
		return (
			<div className="gutter-example button-demo">
				<BreadcrumbCustom first="UI" second="进度条"/>
				<Row gutter={16}>
					<Col className="gutter-row" md={12}>
						<div className="gutter-box">
							<Card title={"标准"} bordered={false}>
								<div>
									<Progress percent={30}/>
									<Progress percent={50} status="active"/>
									<Progress percent={70} status="exception"/>
									<Progress percent={100}/>
									<Progress percent={50} showInfo={false}/>
								</div>
							</Card>
						</div>
					</Col>
					<Col className="gutter-row" md={12}>
						<div className="gutter-box">
							<Card title={"圆形"} bordered={false}>
								<div>
									<Progress type="circle" percent={75}/>
									<Progress type="circle" percent={70} status="exception"/>
									<Progress type="circle" percent={100}/>
								</div>
							</Card>
						</div>
					</Col>
					<Col className="gutter-row" md={12}>
						<div className="gutter-box">
							<Card title={"标准-动态"} bordered={false}>
								<div>
									<Progress percent={this.state.percent}/>
									<ButtonGroup>
										<Button onClick={this.decline} icon="minus"/>
										<Button onClick={this.increase} icon="plus"/>
									</ButtonGroup>
								</div>
							</Card>
						</div>
					</Col>
					<Col className="gutter-row" md={12}>
						<div className="gutter-box">
							<Card title={"圆形-动态"} bordered={false}>
								<div>
									<Progress type="circle" percent={this.state.percentO}/>
									<ButtonGroup>
										<Button onClick={this.declineO} icon="minus"/>
										<Button onClick={this.increaseO} icon="plus"/>
									</ButtonGroup>
								</div>
							</Card>
						</div>
					</Col>
					<Col className="gutter-row" md={12}>
						<div className="gutter-box">
							<Card title={"自定义文字"} bordered={false}>
								<div>
									<Progress type="circle" percent={75} format={percent => `${percent} Days`}/>
									<Progress type="circle" percent={100} format={() => "Done"}/>
								</div>
							</Card>
						</div>
					</Col>
					<Col className="gutter-row" md={12}>
						<div className="gutter-box">
							<Card title={"分段进度条"} bordered={false}>
								<Tooltip title="3 done / 3 in progress / 4 to do">
									<Progress percent={60} successPercent={30}/>
								</Tooltip>
							</Card>
						</div>
					</Col>
				</Row>
			</div>
		);
	}
}

export default ProgressTypes;
