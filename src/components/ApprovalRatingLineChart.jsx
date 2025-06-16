import React, { PureComponent } from 'react'
import { Area, Bar, CartesianGrid, ComposedChart, LabelList, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import data from '../data/ApprovalRatingLineChartData'

class LineChart extends PureComponent {
  
  render(){
    return (
      <ResponsiveContainer width="100%" height="100%" >
        <ComposedChart
          width={500}
          height={500}
          data={data}
          margin={{
            top: 20,
            right:80,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid 
            stroke="#E8E8E8" 
            horizontal={false}
          />
          <XAxis 
            dataKey="name" 
            label={{ value: '날짜', position: 'insideBottomRight', offset: -15 }}
            hide={true} 
          />
          <YAxis 
            label={{ value: '정당지지도', angle: -90, position: 'insideLeft' }} 
            domain={[0, 'dataMax + 2']}  
            hide={true}
          />
          <Area dataKey="무당층" fill="#F3EDDA" stroke="#F3EDDA" animationDuration={0} />
          <Line dataKey="개혁신당" stroke="#F36D1D" strokeWidth={3} dot={{ r: 5 }} animationDuration={0} >
            <LabelList dataKey="개혁신당" position="top" offset={15} style={{ fill: '#F36D1D', fontSize: '20px' }} />
          </Line>
          <Line dataKey="조국혁신당" stroke="#211E52" strokeWidth={3} dot={{ r: 5 }} animationDuration={0} >
            <LabelList dataKey="조국혁신당" position="insideTopLeft" offset={7} style={{ fill: '#211E52', fontSize: '20px' }} />
          </Line>
          <Line dataKey="국민의힘" stroke="#E21D27" strokeWidth={3} dot={{ r: 5 }} animationDuration={0} >
            <LabelList dataKey="국민의힘" position="bottom" offset={15} style={{ fill: '#E21D27', fontSize: '20px' }} />
          </Line>
          <Line dataKey="더불어민주당" stroke="#0050A1" strokeWidth={3} dot={{ r: 5 }} animationDuration={0} >
            <LabelList dataKey="더불어민주당" position="top" offset={15} style={{ fill: '#0050A1', fontSize: '20px' }} />
          </Line>
        </ComposedChart>
      </ResponsiveContainer>
    )
  }
}

export default LineChart