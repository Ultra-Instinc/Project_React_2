import React from "react";
import GoogleMapReact from "google-map-react";
import { Chart, defaults } from "chart.js/auto";
import { Line, Bar, Doughnut, Pie } from "react-chartjs-2";
import { Colors } from "chart.js";
Chart.register(Colors);
defaults.maintainAspectRatio = false;
defaults.responsive = true;
defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "#fff";
const localData = [
	{
		area: "المنطقة الشرقية",
		number: 45,
	},
	{
		area: "منطقة الرياض",
		number: 25,
	},
	{
		area: "المدينة المنورة",
		number: 19,
	},
	{
		area: "مكة المكرمة",
		number: 37,
	},
	{
		area: "منطقة الحدود الشمالية",
		number: 58,
	},
	{
		area: "نجران",
		number: 44,
	},
	{
		area: "عسير",
		number: 64,
	},
	{
		area: "منطقة الجوف",
		number: 13,
	},
	{
		area: "تبوك",
		number: 39,
	},
	{
		area: "الباحة",
		number: 28,
	},
	{
		area: "القسيم",
		number: 61,
	},
];
const defaultProps = {
	center: {
		lat: 10.99835602,
		lng: 77.01502627,
	},
	zoom: 11,
};
export default function Map() {
	return (
		<div className='bg-gray-200 w-full h-full rounded-lg flex '>
			<div className='flex flex-col w-[40%]'>
				<div className='h-[47%] flex items-start justify-center  rounded-lg m-2 bg-white font-semibold'>
					<Doughnut
						className='py-2 text-[15px]'
						options={{
							plugins: {
								legend: {},
								title: {
									text: "",
								},
							},
							scales: {
								yAxis: [
									{
										ticks: {
											beginAtZero: true,
										},
									},
								],
							},
						}}
						data={{
							labels: localData?.map((item) => {
								return item?.area;
							}),
							datasets: [
								{
									label: "area",
									data: localData?.map((item) => {
										return item?.number;
									}),
									backgroundColor: [
										"#0678ff",
										"#ffc700",
										"#e5e1d8",
										"#50C878",
										"#ff008a",
									],
									borderColor: [
										"#0678ff",
										"#ffc700",
										"#e5e1d8",
										"#50C878",
										"#ff008a",
									],
								},
							],
						}}
					/>
				</div>
				<div className=' h-[47%] flex items-center justify-center rounded-lg m-2 bg-white font-semibold'>
					<Pie
						className='py-2 text-[15px]'
						options={{
							plugins: {
								legend: {},
								title: {
									color: "#1E3A8A",
									text: "عدد الحفارات على مستوى المناطق : 50",
									align: "center",
								},
							},
							scales: {
								yAxis: [
									{
										ticks: {
											beginAtZero: true,
										},
									},
								],
							},
						}}
						data={{
							labels: localData?.map((item) => {
								return item?.area;
							}),
							datasets: [
								{
									label: "area",
									data: localData?.map((item) => {
										return item?.number;
									}),
									backgroundColor: [
										"#0678ff",
										"#ffc700",
										"#e5e1d8",
										"#50C878",
										"#ff008a",
									],
									borderColor: [
										"#0678ff",
										"#ffc700",
										"#e5e1d8",
										"#50C878",
										"#ff008a",
									],
								},
							],
						}}
					/>
				</div>
			</div>
			<div className='bg-blue-500/10 flex m-2 rounded-lg w-[70%] items-center justify-center'>
				<GoogleMapReact
					bootstrapURLKeys={{ key: "bhodfbo23598yhdfiou" }}
					defaultCenter={defaultProps.center}
					defaultZoom={defaultProps.zoom}></GoogleMapReact>
			</div>
		</div>
	);
}
