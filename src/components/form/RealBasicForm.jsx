import React, {Component} from "react";
import {Row, Col, Card, Form, Icon, Input, Button, Checkbox} from "antd";
import BreadcrumbCustom from "../BreadcrumbCustom";
import LoginBasicForm from "./LoginBasicForm";
import LayoutBasicForm from "./LayoutBasicForm";
import AssemblyBasicForm from "./AssemblyBasicForm";
import PopupBasicForm from "./PopupBasicForm";

const FormItem = Form.Item;

class RealBasicForm extends Component {
	state = {
		width: "65%"
	};

	render() {
		return (
			<div className="gutter-example">
				<BreadcrumbCustom first="表单" second="示例"/>
				<Row gutter={16}>
					<Col className="gutter-row" md={12}>
						<div className="gutter-box">
							<Card bordered={false} title="登陆表单" bodyStyle={{width: this.state.width}}>
								<LoginBasicForm/>
							</Card>
						</div>
					</Col>
					<Col className="gutter-row" md={12}>
						<div className="gutter-box">
							<Card bordered={false} title="表单布局" bodyStyle={{width: this.state.width}}>
								<LayoutBasicForm/>
							</Card>
						</div>
					</Col>
					<Col className="gutter-row" md={12}>
						<div className="gutter-box">
							<Card bordered={false} title="弹出层表单" bodyStyle={{width: this.state.width}}>
								<PopupBasicForm/>
							</Card>
						</div>
					</Col>
					<Col className="gutter-row" md={12}>
						<div className="gutter-box">
							<Card bordered={false} title="组件表单" bodyStyle={{width: this.state.width}}>
								<AssemblyBasicForm/>
							</Card>
						</div>
					</Col>
				</Row>
			</div>
		);
	}
}

const WrappedRealBasicForm = Form.create()(RealBasicForm);
export default WrappedRealBasicForm;