import React from "react";
import {Row, Col, Card, Upload, message, Button, Icon, Modal} from "antd";

import BreadcrumbCustom from "../BreadcrumbCustom";

const Dragger = Upload.Dragger;
const props = {
	name: "file",
	action: "//jsonplaceholder.typicode.com/posts/",
	headers: {
		authorization: "authorization-text",
	},
	onChange(info) {
		if (info.file.status !== "uploading") {
			console.log(info.file, info.fileList);
		}
		if (info.file.status === "done") {
			message.success(`${info.file.name} file uploaded successfully`);
		} else if (info.file.status === "error") {
			message.error(`${info.file.name} file upload failed.`);
		}
	},
};
const propsPut = {
	name: "file",
	multiple: true,
	action: "//jsonplaceholder.typicode.com/posts/",
	onChange(info) {
		const status = info.file.status;
		if (status !== "uploading") {
			console.log(info.file, info.fileList);
		}
		if (status === "done") {
			message.success(`${info.file.name} file uploaded successfully.`);
		} else if (status === "error") {
			message.error(`${info.file.name} file upload failed.`);
		}
	},
};

function getBase64(img, callback) {
	const reader = new FileReader();
	reader.addEventListener("load", () => callback(reader.result));
	reader.readAsDataURL(img);
}

function beforeUpload(file) {
	const isJPG = file.type === "image/jpeg";
	if (!isJPG) {
		message.error("You can only upload JPG file!");
	}
	const isLt2M = file.size / 1024 / 1024 < 2;
	if (!isLt2M) {
		message.error("Image must smaller than 2MB!");
	}
	return isJPG && isLt2M;
}

class UploadTypes extends React.Component {
	state = {
		loading: false,
		previewVisible: false,
		previewImage: "",
		fileList: [{
			uid: -1,
			name: "xxx.png",
			status: "done",
			url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
		}],
	};
	handleChange = (info) => {
		if (info.file.status === "uploading") {
			this.setState({loading: true});
			return;
		}
		if (info.file.status === "done") {
			// Get this url from response in real world.
			getBase64(info.file.originFileObj, imageUrl => this.setState({
				imageUrl,
				loading: false,
			}));
		}
	};
	handleChangeImages = ({fileList}) => this.setState({fileList});

	render() {
		const uploadButton = (
			<div>
				<Icon type={this.state.loading ? "loading" : "plus"}/>
				<div className="ant-upload-text">Upload</div>
			</div>
		);
		const imageUrl = this.state.imageUrl;

		const {previewVisible, previewImage, fileList} = this.state;
		const uploadButtonImages = (
			<div>
				<Icon type="plus"/>
				<div className="ant-upload-text">Upload</div>
			</div>
		);
		return (
			<div className="gutter-example button-demo example-input">
				<BreadcrumbCustom first="UI" second="上传"/>
				<Row gutter={16}>
					<Col className="gutter-row" md={12}>
						<div className="gutter-box">
							<Card bordered={false} title="上传">
								<Upload {...props}>
									<Button>
										<Icon type="upload"/> Click to Upload
									</Button>
								</Upload>
							</Card>
						</div>
					</Col>
					<Col className="gutter-row" md={12}>
						<div className="gutter-box">
							<Card bordered={false} title="头像">
								<Upload
									name="avatar"
									listType="picture-card"
									className="avatar-uploader"
									showUploadList={false}
									action="//jsonplaceholder.typicode.com/posts/"
									beforeUpload={beforeUpload}
									onChange={this.handleChange}
								>
									{imageUrl ? <img src={imageUrl} alt=""/> : uploadButton}
								</Upload>
							</Card>
						</div>
					</Col>
					<Col className="gutter-row" md={12}>
						<div className="gutter-box">
							<Card bordered={false} title="照片墙">
								<div className="clearfix">
									<Upload
										action="//jsonplaceholder.typicode.com/posts/"
										listType="picture-card"
										fileList={this.state.fileList}
										onPreview={this.handlePreview}
										onChange={this.handleChangeImages}
									>
										{this.state.fileList.length >= 3 ? null : uploadButtonImages}
									</Upload>
									<Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
										<img alt="example" style={{width: "100%"}} src={previewImage}/>
									</Modal>
								</div>
							</Card>
						</div>
					</Col>
					<Col className="gutter-row" md={12}>
						<div className="gutter-box">
							<Card bordered={false} title="拖拽上传">
								<Dragger {...propsPut}>
									<p className="ant-upload-drag-icon">
										<Icon type="inbox"/>
									</p>
									<p className="ant-upload-text">Click or drag file to this area to upload</p>
									<p className="ant-upload-hint">Support for a single or bulk upload. Strictly
										prohibit from uploading company data or other band files</p>
								</Dragger>
							</Card>
						</div>
					</Col>
				</Row>
			</div>
		);
	}
}

export default UploadTypes;
