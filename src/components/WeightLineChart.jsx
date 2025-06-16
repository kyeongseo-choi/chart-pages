import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts';
import data from './../data/WeightLineChartData'


export default class Example extends PureComponent {

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" horizontal={false} />
          <XAxis dataKey="name" height={60}  />
          <YAxis domain={[-0.2, 0.2]}  />
          <ReferenceLine y={0} stroke="#545454" strokeWidth={5} opacity={0.2} strokeDasharray="10 10" />
          {/* <Tooltip /> */}
          {/* <Legend /> */}
          <Line dataKey="a20대" stroke="#C50202" strokeWidth={5} dot={false} animationDuration={0} />
          <Line dataKey="a30대" stroke="#FFB168" strokeWidth={2} dot={false} animationDuration={0} opacity={0.4} />
          <Line dataKey="a40대" stroke="#FBC02D" strokeWidth={2} dot={false} animationDuration={0} opacity={0.4} />
          <Line dataKey="a50대" stroke="#62AF7A" strokeWidth={2} dot={false} animationDuration={0} opacity={0.4} />
          <Line dataKey="a60대" stroke="#42389F" strokeWidth={2} dot={false} animationDuration={0} opacity={0.4} />
          <Line dataKey="a70대" stroke="#6D24B6" strokeWidth={5} dot={false} animationDuration={0} />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
