import React from "react";
import {Row, Col, Card, Pagination} from "antd";
import BreadcrumbCustom from "../BreadcrumbCustom";

class Paginations extends React.Component {

	showTotal(total) {
		return `Total ${total} items`;
	}

	onShowSizeChange(current, pageSize) {
		console.log(current, pageSize);
	}

	onChange(pageNumber) {
		console.log("Page: ", pageNumber);
	}

	render() {
		return (
			<div className="gutter-example">
				<BreadcrumbCustom first="UI" second="分页"/>
				<Row gutter={16}>
					<Col className="gutter-row" md={12}>
						<div className="gutter-box">
							<Card bordered={false}>
								<Pagination defaultCurrent={1} total={50}/>
							</Card>
						</div>
					</Col>
					<Col className="gutter-row" md={12}>
						<div className="gutter-box">
							<Card bordered={false}>
								<Pagination defaultCurrent={6} total={500}/>
							</Card>
						</div>
					</Col>
					<Col className="gutter-row" md={12}>
						<div className="gutter-box">
							<Card bordered={false}>
								<Pagination showSizeChanger onShowSizeChange={this.onShowSizeChange} defaultCurrent={3}
											total={500}/>
							</Card>
						</div>
					</Col>
					<Col className="gutter-row" md={12}>
						<div className="gutter-box">
							<Card bordered={false}>
								<Pagination showQuickJumper defaultCurrent={2} total={500} onChange={this.onChange}/>
							</Card>
						</div>
					</Col>
					<Col className="gutter-row" md={12}>
						<div className="gutter-box">
							<Card bordered={false}>
								<div>
									<Pagination size="small" total={50}/>
									<Pagination size="small" total={50} showSizeChanger showQuickJumper/>
									<Pagination size="small" total={50} showTotal={this.showTotal}/>
								</div>
							</Card>
						</div>
					</Col>
					<Col className="gutter-row" md={12}>
						<div className="gutter-box">
							<Card bordered={false}>
								<Pagination simple defaultCurrent={2} total={50}/>
							</Card>
						</div>
					</Col>
					<Col className="gutter-row" md={12}>
						<div className="gutter-box">
							<Card bordered={false}>
								<div>
									<Pagination
										total={85}
										showTotal={total => `Total ${total} items`}
										pageSize={20}
										defaultCurrent={1}
									/>
									<br/>
									<Pagination
										total={85}
										showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
										pageSize={20}
										defaultCurrent={1}
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

export default Paginations;