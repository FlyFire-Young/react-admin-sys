import React from "react";
import {Row, Col, Card, Alert} from "antd";

import BreadcrumbCustom from "../BreadcrumbCustom";

class PromptBoxTypes extends React.Component {

	render() {
		return (
			<div className="gutter-example button-demo">
				<BreadcrumbCustom first="UI" second="提示框"/>
				<Row gutter={16}>
					<Col className="gutter-row" md={12}>
						<div className="gutter-box">
							<Card title={"基本"} bordered={false}>
								<div>
									<Alert message="Success Text" type="success"/>
									<Alert message="Info Text" type="info"/>
									<Alert message="Warning Text" type="warning"/>
									<Alert message="Error Text" type="error"/>
								</div>
							</Card>
						</div>
					</Col>
					<Col className="gutter-row" md={12}>
						<div className="gutter-box">
							<Card title={"可关闭"} bordered={false}>
								<div>
									<Alert message="Info Text" type="info" closeText="Close Now"/>
								</div>
							</Card>
						</div>
					</Col>

					<Col className="gutter-row" md={12}>
						<div className="gutter-box">
							<Card title={"图标"} bordered={false}>
								<div>
									<Alert message="Success Tips" type="success" showIcon/>
									<Alert message="Informational Notes" type="info" showIcon/>
									<Alert message="Warning" type="warning" showIcon/>
									<Alert message="Error" type="error" showIcon/>
									<Alert
										message="Success Tips"
										description="Detailed description and advices about successful copywriting."
										type="success"
										showIcon
									/>
									<Alert
										message="Informational Notes"
										description="Additional description and informations about copywriting."
										type="info"
										showIcon
									/>
									<Alert
										message="Warning"
										description="This is a warning notice about copywriting."
										type="warning"
										showIcon
									/>
									<Alert
										message="Error"
										description="This is an error message about copywriting."
										type="error"
										showIcon
									/>
								</div>
							</Card>
						</div>
					</Col>
				</Row>
			</div>
		);
	}
}

export default PromptBoxTypes;
