import React from "react";
import {Row, Col, Card, Modal, Button} from "antd";

import BreadcrumbCustom from "../BreadcrumbCustom";
import ModalAsynchronousTypes from "./ModalAsynchronousTypes";
import ModalConfirmTypes from "./ModalConfirmTypes";
import ModalMsgTypes from "./ModalMsgTypes";
import ModalPositionTypes from "./ModalPositionTypes";
import GlobalMsgBasicType from "./GlobalMsgBasicType";
import GlobalMsgCustomButtonType from "./GlobalMsgCustomButtonType";
import GlobalMsgCustomIconType from "./GlobalMsgCustomIconType";
import GlobalMsgCustomPositionType from "./GlobalMsgCustomPositionType";
import GlobalMsgCustomStyleType from "./GlobalMsgCustomStyleType";
import OverallSituationMsgBasicType from "./OverallSituationMsgBasicType";
import OverallSituationMsgOtherType from "./OverallSituationMsgOtherType";
import PopconfirmMsgBasicType from "./PopconfirmMsgBasicType";
import PopconfirmMsgPositionType from "./PopconfirmMsgPositionType";

class ModalTypes extends React.Component {
	state = {visible: false};
	showModal = () => {
		this.setState({
			visible: true,
		});
	};
	handleOk = (e) => {
		console.log(e);
		this.setState({
			visible: false,
		});
	};
	handleCancel = (e) => {
		console.log(e);
		this.setState({
			visible: false,
		});
	};

	render() {
		return (
			<div className="gutter-example button-demo">
				<BreadcrumbCustom first="UI" second="弹出提示框"/>
				<Row gutter={16}>
					<Col className="gutter-row" md={12}>
						<div className="gutter-box">
							<Card title={"普通提示框-基本"} bordered={false}>
								<div>
									<Button type="primary" onClick={this.showModal}>Open</Button>
									<Modal
										title="Basic Modal"
										visible={this.state.visible}
										onOk={this.handleOk}
										onCancel={this.handleCancel}
									>
										<p>Some contents...</p>
										<p>Some contents...</p>
										<p>Some contents...</p>
									</Modal>
								</div>
							</Card>
						</div>
					</Col>
					<Col className="gutter-row" md={12}>
						<div className="gutter-box">
							<Card title={"普通提示框-异步关闭"} bordered={false}>
								<ModalAsynchronousTypes/>
							</Card>
						</div>
					</Col>
					<Col className="gutter-row" md={12}>
						<div className="gutter-box">
							<Card title={"普通提示框-确认对话框"} bordered={false}>
								<ModalConfirmTypes/>
							</Card>
						</div>
					</Col>
					<Col className="gutter-row" md={12}>
						<div className="gutter-box">
							<Card title={"普通提示框-信息提示"} bordered={false}>
								<ModalMsgTypes/>
							</Card>
						</div>
					</Col>
					<Col className="gutter-row" md={12}>
						<div className="gutter-box">
							<Card title={"普通提示框-自定义位置"} bordered={false}>
								<ModalPositionTypes/>
							</Card>
						</div>
					</Col>
					<Col className="gutter-row" md={12}>
						<div className="gutter-box">
							<Card title={"通知提醒框-基本"} bordered={false}>
								<GlobalMsgBasicType/>
							</Card>
						</div>
					</Col>
					<Col className="gutter-row" md={12}>
						<div className="gutter-box">
							<Card title={"通知提醒框-自定义按钮"} bordered={false}>
								<GlobalMsgCustomButtonType/>
							</Card>
						</div>
					</Col>
					<Col className="gutter-row" md={12}>
						<div className="gutter-box">
							<Card title={"通知提醒框-自定义图标"} bordered={false}>
								<GlobalMsgCustomIconType/>
							</Card>
						</div>
					</Col>
					<Col className="gutter-row" md={12}>
						<div className="gutter-box">
							<Card title={"通知提醒框-不同位置"} bordered={false}>
								<GlobalMsgCustomPositionType/>
							</Card>
						</div>
					</Col>
					<Col className="gutter-row" md={12}>
						<div className="gutter-box">
							<Card title={"通知提醒框-自定义位置"} bordered={false}>
								<GlobalMsgCustomStyleType/>
							</Card>
						</div>
					</Col>
					<Col className="gutter-row" md={12}>
						<div className="gutter-box">
							<Card title={"全局提醒框-基本"} bordered={false}>
								<OverallSituationMsgBasicType/>
							</Card>
						</div>
					</Col>
					<Col className="gutter-row" md={12}>
						<div className="gutter-box">
							<Card title={"全局提醒框-其他类型"} bordered={false}>
								<OverallSituationMsgOtherType/>
							</Card>
						</div>
					</Col>
					<Col className="gutter-row" md={12}>
						<div className="gutter-box">
							<Card title={"气泡提醒框-基本"} bordered={false}>
								<PopconfirmMsgBasicType/>
							</Card>
						</div>
					</Col>
					<Col className="gutter-row" md={12}>
						<div className="gutter-box">
							<Card title={"气泡提醒框-不同位置"} bordered={false}>
								<PopconfirmMsgPositionType/>
							</Card>
						</div>
					</Col>
				</Row>
			</div>

		);
	}
}

export default ModalTypes;