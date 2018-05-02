import React from "react";
import {Row, Col, Card, Tag} from "antd";

import BreadcrumbCustom from "../BreadcrumbCustom";

function log(e) {
	console.log(e);
}

function preventDefault(e) {
	e.preventDefault();
	console.log("Clicked! But prevent default.");
}

const {CheckableTag} = Tag;

class MyTag extends React.Component {
	state = {checked: true};
	handleChange = (checked) => {
		this.setState({checked});
	};

	render() {
		return <CheckableTag {...this.props} checked={this.state.checked} onChange={this.handleChange}/>;
	}
}

class TagTypes extends React.Component {

	render() {
		return (
			<div className="gutter-example button-demo">
				<BreadcrumbCustom first="UI" second="标签"/>
				<Row gutter={16}>
					<Col className="gutter-row" md={12}>
						<div className="gutter-box">
							<Card title={"基本"} bordered={false}>
								<div>
									<Tag>Tag 1</Tag>
									<Tag>Link</Tag>
									<Tag closable onClose={log}>Tag 2</Tag>
									<Tag closable onClose={preventDefault}>Prevent Default</Tag>
								</div>
							</Card>
						</div>
					</Col>
					<Col className="gutter-row" md={12}>
						<div className="gutter-box">
							<Card title={"不同颜色"} bordered={false}>
								<div>
									<h4 style={{marginBottom: 16}}>Presets:</h4>
									<div>
										<Tag color="magenta">magenta</Tag>
										<Tag color="red">red</Tag>
										<Tag color="volcano">volcano</Tag>
										<Tag color="orange">orange</Tag>
										<Tag color="gold">gold</Tag>
										<Tag color="lime">lime</Tag>
										<Tag color="green">green</Tag>
										<Tag color="cyan">cyan</Tag>
										<Tag color="blue">blue</Tag>
										<Tag color="geekblue">geekblue</Tag>
										<Tag color="purple">purple</Tag>
									</div>
									<h4 style={{margin: "16px 0"}}>Custom:</h4>
									<div>
										<Tag color="#f50">#f50</Tag>
										<Tag color="#2db7f5">#2db7f5</Tag>
										<Tag color="#87d068">#87d068</Tag>
										<Tag color="#108ee9">#108ee9</Tag>
									</div>
								</div>
							</Card>
						</div>
					</Col>
					<Col className="gutter-row" md={12}>
						<div className="gutter-box">
							<Card title={"可选择"} bordered={false}>
								<div>
									<MyTag>Tag1</MyTag>
									<MyTag>Tag2</MyTag>
									<MyTag>Tag3</MyTag>
								</div>
							</Card>
						</div>
					</Col>
				</Row>
			</div>
		);
	}
}

export default TagTypes;
