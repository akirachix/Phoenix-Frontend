import './index.css'
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';

const percentageData = [
  { name: 'Mathematics', level: 10, color: '#8884D8' },
  { name: 'English', level: 30, color: '#82ca9d' },
  { name: 'Kiswahili', level: 20, color: '#ffc658' },
  { name: 'Biology', level: 30, color: '#ffbb28' },
  { name: 'Chemistry', level: 40, color: '#008080' },
  { name: 'Physics', level: 30, color: '#00acc1' },
  { name: 'Geography', level: 40, color: '#e377c2' },
  { name: 'History', level: 70, color: '#7f7f7f' },
  { name: '', level: 50, color: '#bcbd22' },
];

const LineGraphsA = () => {
  return (
    <ResponsiveContainer width="80%" height={400}>
      <BarChart data={percentageData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" label={{ value: 'Subjects', position: 'insideBottomRight', offset: -10 }} />
        <YAxis tickFormatter={(value) => `${value}%`} domain={[0, 100]} label={{ value: 'Percentage', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Legend />
        <Bar type="monotone" dataKey="level" stroke="#8884D8" activeDot={{ r: 8 }}>
          {percentageData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default LineGraphsA;
