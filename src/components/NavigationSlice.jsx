import React, { useState } from "react";
import { CiMap } from "react-icons/ci";
import { MdExpand, MdKeyboardArrowDown } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { extendedContent } from "../utils/visableContent";
import { dropdownAnimations } from "../framerMotion/animations";
export default function NavigationSlice({ expand }) {
	const navigate = useNavigate();
	const location = useLocation();
	const [navigationData, setNavigationData] = useState([
		{
			key: 1,
			label: "عرض الخريطة",
			icon: <CiMap />,
			extend: false,
			extendableIcon: <MdKeyboardArrowDown />,
			path: "/map",
			extendable: false,
		},
		{
			key: 2,
			label: "لوحة المعلومات",
			icon: <CiMap />,
			extend: false,
			extendableIcon: <MdKeyboardArrowDown />,
			extendable: true,
		},
		{
			key: 3,
			label: "التنبيهات",
			icon: <CiMap />,
			extend: false,
			extendableIcon: <MdKeyboardArrowDown />,
			extendable: true,
		},
		{
			key: 4,
			label: "إدارة المستخدمين",
			icon: <CiMap />,
			extend: false,
			extendableIcon: <MdKeyboardArrowDown />,
			path: "/user_management",
			extendable: false,
		},
		{
			key: 5,
			label: "إدارة الأجهزة",
			icon: <CiMap />,
			extend: false,
			extendableIcon: <MdKeyboardArrowDown />,
			path: "/device_management",
			extendable: false,
		},
		{
			key: 6,
			label: "المجدول",
			icon: <CiMap />,
			extend: false,
			extendableIcon: <MdKeyboardArrowDown />,
			extendable: true,
		},
		{
			key: 7,
			label: "إجراءات التشغيل القياسية",
			icon: <CiMap />,
			extend: false,
			extendableIcon: <MdKeyboardArrowDown />,
			extendable: true,
		},
		{
			key: 8,
			label: "عرض الجهاز 360 درجة",
			icon: <CiMap />,
			extend: false,
			extendableIcon: <MdKeyboardArrowDown />,
			path: "/device_360_deg_view",
			extendable: false,
		},
		{
			key: 9,
			label: "مؤشرات الأداء",
			icon: <CiMap />,
			extend: false,
			extendableIcon: <MdKeyboardArrowDown />,
			path: "/performance_indicatoes",
			extendable: false,
		},
		{
			key: 10,
			label: "إعدادات النظام",
			icon: <CiMap />,
			extend: false,
			extendableIcon: <MdKeyboardArrowDown />,
			path: "/system_settings",
			extendable: false,
		},
		{
			key: 11,
			label: "إدارة المزارع",
			icon: <CiMap />,
			extend: false,
			extendableIcon: <MdKeyboardArrowDown />,
			path: "/farms_management",
			extendable: false,
		},
	]);
	return (
		<div
			className={`relative bg-slate-50 h-[100%] py-2 rounded-lg overflow-y-scroll ${
				expand ? "w-[300px]" : "w-[80px]"
			} transition-all duration-1000`}>
			{navigationData?.map((item, index) => (
				<div
					key={index}
					className={` flex flex-col text-slate-950  items-center justify-between cursor-pointer  duration-300 z-[10]`}>
					<div
						onClick={() => {
							if (item?.extendable) {
								setNavigationData(
									navigationData?.map((item) => {
										if (item?.extendable && item?.key === index + 1) {
											return { ...item, extend: !item?.extend };
										}
										return item;
									})
								);
							} else {
								navigate(item?.path);
							}
						}}
						className={`flex w-full ${
							expand ? "gap-[4%]" : "gap-[1%]"
						}  h-[50px] hover:bg-green-200 ${
							location?.pathname === item?.path &&
							"border-r-2 border-r-blue-600 bg-green-100"
						} transition-all duration-300  h-[45px]  z-[11] items-center`}>
						<div className='flex-1 flex items-center justify-between overflow-hidden'>
							{item?.extendable && (
								<div
									className={`${
										item?.extend ? "rotate-180 text-green-700" : "rotate-0"
									} duration-300`}>
									{item?.extendableIcon}
								</div>
							)}
							<div
								className={`flex   justify-end flex-1  ${
									expand ? "translate-x-0" : "translate-x-40"
								} duration-1000 transition-all`}>
								<p className='text-green-800 font-normal'>{item?.label}</p>
							</div>
						</div>
						<div className=' w-[50px] font-normal text-green-800 text-2xl '>
							{item?.icon}
						</div>
					</div>
					<AnimatePresence>
						{item?.extend && (
							<motion.div
								className={`flex w-full pr-2  flex-col `}
								{...dropdownAnimations}>
								{extendedContent(item)?.map((slot, index) => (
									<div
										className={` h-[45px] flex items-center  hover:bg-green-200  z-0  ${
											expand ? "gap-[4%] " : "gap-[1%] "
										} ${
											location?.pathname === slot?.path &&
											"border-r-2 border-r-blue-600 bg-green-100"
										} transition-all duration-300 `}
										key={index}
										onClick={() => {
											navigate(slot?.path);
										}}>
										<div className='flex-1 flex items-center justify-between overflow-hidden'>
											<div
												className={`flex   justify-end flex-1  ${
													expand ? "translate-x-0" : "translate-x-40"
												} duration-1000 transition-all`}>
												<p className='text-green-800 font-normal'>
													{slot?.label}
												</p>
											</div>
										</div>
										<div className=' w-[50px] font-normal text-green-800 text-2xl '>
											{slot?.icon}
										</div>
									</div>
								))}
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			))}
		</div>
	);
}
