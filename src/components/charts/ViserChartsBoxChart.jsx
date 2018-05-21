import { Chart, Tooltip, Axis, Box, Legend, Coord, Point } from 'viser-react';
import * as React from 'react';
const DataSet = require('@antv/data-set');

const { DataView } = DataSet;
const data = [
    { x: 'Oceania', low: 1, q1: 9, median: 16, q3: 22, high: 24 },
    { x: 'East Europe', low: 1, q1: 5, median: 8, q3: 12, high: 16 },
    { x: 'Australia', low: 1, q1: 8, median: 12, q3: 19, high: 26 },
    { x: 'South America', low: 2, q1: 8, median: 12, q3: 21, high: 28 },
    { x: 'North Africa', low: 1, q1: 8, median: 14, q3: 18, high: 24 },
    { x: 'North America', low: 3, q1: 10, median: 17, q3: 28, high: 30 },
    { x: 'West Europe', low: 1, q1: 7, median: 10, q3: 17, high: 22 },
    { x: 'West Africa', low: 1, q1: 6, median: 8, q3: 13, high: 16 }
];
const dv = new DataView().source(data);
dv.transform({
    type: 'map',
    callback: (obj) => {
        obj.range = [ obj.low, obj.q1, obj.median, obj.q3, obj.high ];
        return obj;
    }
});

const scale = [{
    dataKey: 'range',
    max: 35,
}];

const tooltipOpts: any = {
    showTitle: false,

    itemTpl: '<li data-index={index} style="margin-bottom:4px;">'
    + '<span style="background-color:{color};" class="g2-tooltip-marker"></span>'
    + '{name}<br/>'
    + '<span style="padding-left: 16px">最大值：{high}</span><br/>'
    + '<span style="padding-left: 16px">上四分位数：{q3}</span><br/>'
    + '<span style="padding-left: 16px">中位数：{median}</span><br/>'
    + '<span style="padding-left: 16px">下四分位数：{q1}</span><br/>'
    + '<span style="padding-left: 16px">最小值：{low}</span><br/>'
    + '</li>'
};

export default class ViserChartsBoxChart extends React.Component {

    render() {

        return (
            <div>
                <Chart forceFit height={400} data={dv} scale={scale}>
                    <Tooltip {...tooltipOpts} />
                    <Coord type="polar" innerRadius={0.5} />
                    <Axis />
                    <Legend />
                    <Box position="x*range" active={true} size={60} color="x" tooltip={['x*low*q1*median*q3*high', (x, low, q1, median, q3, high) => {
                        return {
                            name: x,
                            low,
                            q1,
                            median,
                            q3,
                            high
                        };
                    }]}/>
                </Chart>
            </div>
        );
    }
}


