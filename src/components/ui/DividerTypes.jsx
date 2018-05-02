import React from "react";
import {Row, Col, Card, Divider} from "antd";
import BreadcrumbCustom from "../BreadcrumbCustom";

class DividerTypes extends React.Component {
	render() {
		return (
			<div className="gutter-example button-demo">
				<BreadcrumbCustom first="UI" second="分割线"/>
				<Row gutter={16}>
					<Col className="gutter-row" md={12}>
						<div className="gutter-box">
							<Card title={"水平分割线"} bordered={false}>
								<div>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti
										licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
									<Divider/>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti
										licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
									<Divider>With Text</Divider>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti
										licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
									<Divider dashed/>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti
										licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
								</div>
							</Card>
						</div>
					</Col>
					<Col className="gutter-row" md={12}>
						<div className="gutter-box">
							<Card title={"垂直分割线"} bordered={false}>
								<div>
									Text
									<Divider type="vertical"/>
									<a>Link</a>
									<Divider type="vertical"/>
									<a>Link</a>
								</div>
							</Card>
						</div>
					</Col>
					<Col className="gutter-row" md={12}>
						<div className="gutter-box">
							<Card title={"标题分割线"} bordered={false}>
								<div>
									<Divider orientation="left">Left Text</Divider>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti
										licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
									<Divider orientation="right">Right Text</Divider>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti
										licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
								</div>
							</Card>
						</div>
					</Col>
				</Row>
			</div>
		);
	}
}

export default DividerTypes;
