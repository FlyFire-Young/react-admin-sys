import { Chart, Tooltip, Axis, Legend, SmoothLine, Point } from 'viser-react';
import * as React from 'react';
import {Row, Col, Card} from "antd";
import BreadcrumbCustom from "../BreadcrumbCustom";
import ViserChartsBlockTree from "./ViserChartsBlockTree";
import ViserChartsBasePieChart from "./ViserChartsBasePieChart";
import ViserChartsStackingArea from "./ViserChartsStackingArea";
import ViserChartsBoxChart from "./ViserChartsBoxChart";
import ViserChartsBaseStock from "./ViserChartsBaseStock";
import ViserChartsDashboard from "./ViserChartsDashboard";
import ViserChartsRelattions from "./ViserChartsRelattions";
const DataSet = require('@antv/data-set');
const sourceData = [
    { month: 'Jan', Tokyo: 7.0, London: 3.9 },
    { month: 'Feb', Tokyo: 6.9, London: 4.2 },
    { month: 'Mar', Tokyo: 9.5, London: 5.7 },
    { month: 'Apr', Tokyo: 14.5, London: 8.5 },
    { month: 'May', Tokyo: 18.4, London: 11.9 },
    { month: 'Jun', Tokyo: 21.5, London: 15.2 },
    { month: 'Jul', Tokyo: 25.2, London: 17.0 },
    { month: 'Aug', Tokyo: 26.5, London: 16.6 },
    { month: 'Sep', Tokyo: 23.3, London: 14.2 },
    { month: 'Oct', Tokyo: 18.3, London: 10.3 },
    { month: 'Nov', Tokyo: 13.9, London: 6.6 },
    { month: 'Dec', Tokyo: 9.6, London: 4.8 },
];

const dv = new DataSet.View().source(sourceData);
dv.transform({
    type: 'fold',
    fields: ['Tokyo', 'London'],
    key: 'city',
    value: 'temperature',
});
const data = dv.rows;

const scale = [{
    dataKey: 'month',
    min: 0,
    max: 1,
}];

export default class ViserCharts extends React.Component {
    render() {
        return (
            <div className="gutter-example button-demo">
                <BreadcrumbCustom first="图表" second="viserCharts"/>
                <Row gutter={24}>
                    <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                            <Card bordered={false} title="多条折线图">
                                <Chart forceFit height={400} data={data} scale={scale}>
                                    <Tooltip />
                                    <Axis />
                                    <Legend />
                                    <SmoothLine position="month*temperature" color="city" />
                                    <Point position="month*temperature" color="city" shape="circle"/>
                                </Chart>
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                            <Card bordered={false} title="分组柱状图">
                                <ViserChartsBlockTree/>
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                            <Card bordered={false} title="分组柱状图">
                                <ViserChartsBasePieChart/>
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                            <Card bordered={false} title="堆叠面积图">
                                <ViserChartsStackingArea/>
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                            <Card bordered={false} title="极坐标系下箱型图">
                                <ViserChartsBoxChart/>
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                            <Card bordered={false} title="股票图与范围区域图">
                                <ViserChartsBaseStock/>
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                            <Card bordered={false} title="仪表盘">
                                <ViserChartsDashboard/>
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                            <Card bordered={false} title="极坐标弧长链接图">
                                <ViserChartsRelattions/>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>

        );
    }
}





