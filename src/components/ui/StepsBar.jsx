import React from "react";
import {Row, Col, Card, Steps, Button, message, Icon} from "antd";
import BreadcrumbCustom from "../BreadcrumbCustom";

const Step = Steps.Step;

const steps = [{
	title: "First",
	content: "First-content",
}, {
	title: "Second",
	content: "Second-content",
}, {
	title: "Last",
	content: "Last-content",
}];

class StepsBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			current: 0,
		};
	}

	next() {
		const current = this.state.current + 1;
		this.setState({current});
	}

	prev() {
		const current = this.state.current - 1;
		this.setState({current});
	}

	render() {
		const {current} = this.state;
		return (
			<div className="gutter-example">
				<BreadcrumbCustom first="UI" second="步骤条"/>
				<Row gutter={16}>
					<Col className="gutter-row" md={24}>
						<div className="gutter-box">
							<Card bordered={false}>
								<Steps current={1}>
									<Step title="Finished" description="This is a description."/>
									<Step title="In Progress" description="This is a description."/>
									<Step title="Waiting" description="This is a description."/>
								</Steps>
							</Card>
						</div>
					</Col>
					<Col className="gutter-row" md={24}>
						<div className="gutter-box">
							<Card bordered={false}>
								<Steps direction="vertical" size="small" current={1}>
									<Step title="Finished" description="This is a description."/>
									<Step title="In Progress" description="This is a description."/>
									<Step title="Waiting" description="This is a description."/>
								</Steps>
							</Card>
						</div>
					</Col>
					<Col className="gutter-row" md={24}>
						<div className="gutter-box">
							<Card bordered={false}>
								<Steps current={1} status="error">
									<Step title="Finished" description="This is a description"/>
									<Step title="In Process" description="This is a description"/>
									<Step title="Waiting" description="This is a description"/>
								</Steps>
							</Card>
						</div>
					</Col>
					<Col className="gutter-row" md={24}>
						<div className="gutter-box">
							<Card bordered={false}>
								<Steps size="small" current={1}>
									<Step title="Finished"/>
									<Step title="In Progress"/>
									<Step title="Waiting"/>
								</Steps>
							</Card>
						</div>
					</Col>
					<Col className="gutter-row" md={24}>
						<div className="gutter-box">
							<Card bordered={false}>
								<Steps>
									<Step status="finish" title="Login" icon={<Icon type="user"/>}/>
									<Step status="finish" title="Verification" icon={<Icon type="solution"/>}/>
									<Step status="process" title="Pay" icon={<Icon type="loading"/>}/>
									<Step status="wait" title="Done" icon={<Icon type="smile-o"/>}/>
								</Steps>
							</Card>
						</div>
					</Col>
					<Col className="gutter-row" md={24}>
						<div className="gutter-box">
							<Card bordered={false}>
								<div>
									<Steps current={current}>
										{steps.map(item => <Step key={item.title} title={item.title}/>)}
									</Steps>
									<div className="steps-content">{steps[this.state.current].content}</div>
									<div className="steps-action">
										{
											this.state.current < steps.length - 1
											&&
											<Button type="primary" onClick={() => this.next()}>Next</Button>
										}
										{
											this.state.current === steps.length - 1
											&&
											<Button type="primary"
													onClick={() => message.success("Processing complete!")}>Done</Button>
										}
										{
											this.state.current > 0
											&&
											<Button style={{marginLeft: 8}} onClick={() => this.prev()}>
												Previous
											</Button>
										}
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

export default StepsBar;