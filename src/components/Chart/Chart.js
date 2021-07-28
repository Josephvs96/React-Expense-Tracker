import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
	const totalMaximum = Math.max(...props.dataPoints.map((x) => x.value));
	return (
		<div className="chart">
			{props.dataPoints.map((dataPoint) => (
				<ChartBar
					key={dataPoint.label}
					label={dataPoint.label}
					value={dataPoint.value}
					maxValue={totalMaximum}
				/>
			))}
		</div>
	);
};

export default Chart;
