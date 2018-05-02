import React from "react";
import {Row, Col, Card, Carousel} from "antd";

import BreadcrumbCustom from "../BreadcrumbCustom";

class CarouselTypes extends React.Component {

	onChange = (a, b, c) => {
		console.log(a, b, c);
	};

	render() {
		return (
			<div className="gutter-example button-demo">
				<BreadcrumbCustom first="UI" second="走马灯"/>
				<Row gutter={16}>
					<Col className="gutter-row" md={12}>
						<div className="gutter-box">
							<Card title={"普通"} bordered={false}>
								<Carousel afterChange={this.onChange}>
									<div><h3>1</h3></div>
									<div><h3>2</h3></div>
									<div><h3>3</h3></div>
									<div><h3>4</h3></div>
								</Carousel>
							</Card>
						</div>
					</Col>
					<Col className="gutter-row" md={12}>
						<div className="gutter-box">
							<Card title={"垂直"} bordered={false}>
								<Carousel vertical>
									<div><h3>1</h3></div>
									<div><h3>2</h3></div>
									<div><h3>3</h3></div>
									<div><h3>4</h3></div>
								</Carousel>
							</Card>
						</div>
					</Col>
					<Col className="gutter-row" md={12}>
						<div className="gutter-box">
							<Card title={"渐显"} bordered={false}>
								<Carousel effect="fade">
									<div><h3>1</h3></div>
									<div><h3>2</h3></div>
									<div><h3>3</h3></div>
									<div><h3>4</h3></div>
								</Carousel>
							</Card>
						</div>
					</Col>
					<Col className="gutter-row" md={12}>
						<div className="gutter-box">
							<Card title={"自动"} bordered={false}>
								<Carousel autoplay>
									<div><h3>1</h3></div>
									<div><h3>2</h3></div>
									<div><h3>3</h3></div>
									<div><h3>4</h3></div>
								</Carousel>
							</Card>
						</div>
					</Col>
				</Row>
			</div>
		);
	}
}

export default CarouselTypes;
