import { Chart, Tooltip, View, Edge, Point, Coord } from 'viser-react';
import * as React from 'react';
import {relationshipJson} from "./relationship-with-weight";
const DataSet = require('@antv/data-set');

const label = ['name', {
    labelEmit: true,
}];

const style = {
    stroke: 'grey',
};

export default class ViserChartsRelattions extends React.Component {
    state = {
        edgesData: [],
        nodesData: [],
    };

    componentDidMount() {
        const dv = new DataSet.View().source(relationshipJson, {
            type: 'graph',
            edges: d => d.links,
        });
        dv.transform({
            type: 'diagram.arc',
            marginRatio: 0.5,
        });
        this.setState({
            edgesData: dv.edges,
            nodesData: dv.nodes,
        });
    }

    render() {
        const {
            edgesData,
            nodesData,
        } = this.state;

        return (
            <Chart forceFit={true} height={500}>
                <Tooltip showTitle={false} />
                <View data={edgesData}>
                    <Coord type="polar" direction="yReverse" />
                    <Edge position="x*y" shape="arc" color="source" opacity={0.5} tooltip="source*target" />
                </View>
                <View data={nodesData}>
                    <Coord type="polar" direction="yReverse" />
                    <Point position="x*y" size="value" color="id" opacity={0.5} style={style} label={label} shape="circle"/>
                </View>
            </Chart>
        );
    }
}




