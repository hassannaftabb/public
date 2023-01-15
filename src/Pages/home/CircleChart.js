import React, {useState} from "react";
import Chart from "react-apexcharts";

const PieChartHandler = () => {
	const [options] = useState({
		chart: {
			width: 380,
			type: "pie",
		},
		labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
		legend: {show: false},

		responsive: [
			{
				breakpoint: 480,
				options: {
					chart: {
						width: 200,
					},
				},
			},
		],
	});
	const [series] = useState([44, 55, 13, 43, 22]);

	return (
		<div id="chart" className="bg-blue-800 w-full  border h-80   flex items-center rounded-xl">
			<Chart options={options} series={series} type="pie" />
		</div>
	);
};

export default PieChartHandler;
