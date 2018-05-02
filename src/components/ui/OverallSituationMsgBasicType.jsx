import React from "react";

import {message, Button} from "antd";

const info = () => {
	message.info("This is a normal message");
};

const OverallSituationMsgBasicType = () => (
	<Button type="primary" onClick={info}>Display normal message</Button>
);

export default OverallSituationMsgBasicType;