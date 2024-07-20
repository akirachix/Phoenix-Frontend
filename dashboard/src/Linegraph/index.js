import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';
import CustomDot from './CustomDot';

const data = [
    { month: 'Jan', score: 10 },
    { month: 'Feb', score: 20 },
    { month: 'Mar', score: 30 },
    { month: 'Apr', score: 40 },
    { month: 'May', score: 50 },
    { month: 'Jun', score: 60 },
    { month: 'Jul', score: 70 },
    { month: 'Aug', score: 80 },
    { month: 'Sep', score: 90 },
    { month: 'Oct', score: 100 },
    { month: 'Nov', score:30  },
    { month: 'Dec', score:50  }
  ];


const renderCustomDot = (props) => {
  const { cx, cy } = props;
  return <CustomDot cx={cx} cy={cy} />;
};

const Chart = () => (
  <LineChart width={600} height={300} data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="month" />
    <YAxis />
    <Tooltip />
    <Line type="monotone" dataKey="score" stroke="#8884d8" dot={renderCustomDot} />
  </LineChart>
);

export default Chart;


