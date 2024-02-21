import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow } from "swiper/modules";
import { MdMail } from "react-icons/md";
import ADAD from "../assets/3dad2.png";
import { useNavigate } from "react-router-dom";
const cardsArray = [
	{
		key: 1,
		path: "/main",
		title: "العدادات الذكية",
		description: "إدارة و مراقبة و تحليل بيانات العدادات الذكية",
		icon: <MdMail size={250} />,
		img: (
			<img
				src={ADAD}
				className='h-[30vh]'
			/>
		),
	},
	{
		key: 2,
		path: "/main",
		title: "الحفارات",
		description: "إدارة و مراقبة و نحليل بيانات الحفارات",
		icon: <MdMail size={250} />,
		img: (
			<img
				src={ADAD}
				className='h-[30vh]'
			/>
		),
	},
	{
		key: 3,
		path: "/main",
		title: "لوحات المعلومات",
		description:
			"نظرة عامة على المعلومات الأساسية لمراقبة فعالة و إتخاذ القرار",
		icon: <MdMail size={250} />,
		img: (
			<img
				src={ADAD}
				className='h-[30vh]'
			/>
		),
	},
	{
		key: 4,
		path: "/main",
		title: "لوحات المعلومات",
		description:
			"نظرة عامة على المعلومات الأساسية لمراقبة فعالة و إتخاذ القرار",
		icon: <MdMail size={250} />,
		img: (
			<img
				src={ADAD}
				className='h-[30vh]'
			/>
		),
	},
	{
		key: 5,
		path: "/main",
		title: "لوحات المعلومات",
		description:
			"نظرة عامة على المعلومات الأساسية لمراقبة فعالة و إتخاذ القرار",
		icon: <MdMail size={250} />,
		img: (
			<img
				src={ADAD}
				className='h-[30vh]'
			/>
		),
	},
];
const Home = () => {
	const navigate = useNavigate();
	return (
		<div className=' h-[95%] w-[97vw] rotate-on-z-axis  font-custom flex flex-col items-center justify-between py-2'>
			<div className='w-[130vw] h-[82vh] py-1 flex items-center'>
				<Swiper
					effect={"coverflow"}
					centeredSlides={true}
					grabCursor
					fadeEffect={true}
					slidesPerView={"4"}
					coverflowEffect={{
						rotate: 30,
						scale: 0.75,
						stretch: 100,
						depth: 0,
						modifier: 1,
					}}
					pagination={true}
					modules={[EffectCoverflow]}
					className='w-[130vw] h-[72vh] mx-auto'>
					{cardsArray?.map(({ title, description, key, img, path }) => (
						<SwiperSlide
							style={{ borderRadius: "30px" }}
							key={key}
							className='custom_shadow flex  flex-col items-center justify-center border bg-white bg-cover bg-center '>
							<div
								onClick={() => navigate(path)}
								className='flex flex-col items-center justify-center '>
								<div className='pb-20'>{img}</div>
								<div className='text-[40px] text-gray-600 pb-7'>{title}</div>
								<div className=' text-gray-400'>{description}</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};
export default Home;
