import React from "react";
import {Row, Col, Card, Spin, Switch, Alert, Icon} from "antd";
import BreadcrumbCustom from "../BreadcrumbCustom";

const antIcon = <Icon type="loading" style={{fontSize: 24}} spin/>;

class SpinTypes extends React.Component {
	state = {loading: false};
	toggle = (value) => {
		this.setState({loading: value});
	};

	render() {
		return (
			<div className="gutter-example button-demo">
				<BreadcrumbCustom first="UI" second="加载中"/>
				<Row gutter={16}>
					<Col className="gutter-row" md={12}>
						<div className="gutter-box">
							<Card title={"基本用法"} bordered={false}>
								<div>
									<Spin size="small"/>
									<Spin/>
									<Spin size="large"/>
								</div>
							</Card>
						</div>
					</Col>
					<Col className="gutter-row" md={12}>
						<div className="gutter-box">
							<Card title={"卡片加载中"} bordered={false}>
								<div>
									<Spin spinning={this.state.loading}>
										<Alert
											message="Alert message title"
											description="Further details about the context of this alert."
											type="info"
										/>
									</Spin>
									<div style={{marginTop: 16}}>
										Loading state：<Switch checked={this.state.loading} onChange={this.toggle}/>
									</div>
								</div>
							</Card>
						</div>
					</Col>
					<Col className="gutter-row" md={12}>
						<div className="gutter-box">
							<Card title={"自定义指示符"} bordered={false}>
								<Spin indicator={antIcon}/>
							</Card>
						</div>
					</Col>

				</Row>
			</div>
		);
	}
}

export default SpinTypes;
