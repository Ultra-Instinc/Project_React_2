import NMA1 from "../assets/nma2.png";
import IOT from "../assets/iot2.jpg";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdOutlineArrowDropDown, MdPerson4 } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/theme/themeSlice";
import { CiGlobe } from "react-icons/ci";
import { PiGlobeBold } from "react-icons/pi";
import { FiArrowDown, FiChevronDown, FiGlobe, FiUser } from "react-icons/fi";

const navData = [
	{
		title: "Data Entry",
		key: 1,
		pathCheck: "",
	},
	{
		title: "Planning Data",
		key: 2,
		pathCheck: "",
	},
	{
		title: "Reports",
		key: 3,
		pathCheck: "",
	},
	{
		title: "PPA",
		key: 4,
		pathCheck: "",
	},
	{
		title: "Administration",
		key: 5,
		isDropDown: true,
		pathCheck: ["/powerPlant", "/createPowerPlant"],
	},
];

const NavBar = ({ position }) => {
	const theme = useSelector((state) => state.theme.theme);
	const dispatch = useDispatch();
	const location = useLocation().pathname;

	const [drop, setDrop] = useState(false);
	const dropRef = useRef();
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (!dropRef?.current?.contains(event.target)) {
				setDrop(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [dropRef, drop]);
	// THEME START
	useEffect(() => {
		if (theme === true) {
			addClass();
		}
		if (theme === false) {
			removeClass();
		}
	}, [theme]);
	const addClass = () => {
		document.body.classList.add("dark");
	};
	const removeClass = () => {
		document.body.classList.remove("dark");
	};
	const dynamicHeader = () => {
		if (location === "/map") {
			return "عرض الخريطة";
		}
		if (location === "/user_management") {
			return "إدارة المستخدمين";
		}
		if (location === "/device_management") {
			return "إدارة الأجهزة";
		}
		if (location === "/create_tabular") {
			return "إنشاء مجدول";
		}
		if (location === "/tabular_model") {
			return "نموذج مجدول";
		}
		if (location === "/create_standard_operating_procedures") {
			return "إنشاء إجراءات التشغيل القياسية";
		}
		if (location === "/current_standard_operating_procedures") {
			return "إجراءات التشغيل القياسية الجارية";
		}
		if (location === "/device_360_deg_view") {
			return "عرض الجهاز 360 درجة";
		}
		if (location === "/performance_indicatoes") {
			return "مؤشرات الأداء";
		}
		if (location === "/system_settings") {
			return "إعدادات النظام";
		}
		if (location === "/farms_management") {
			return "إدارة المزارع";
		}
	};
	return (
		<div
			className={`h-[100px] w-full fixed  z-50 top-0 flex bg-transparent mx-auto justify-between items-center bg-white `}>
			<div className='flex justify-between items-center w-[95vw] mx-auto '>
				<div className=' flex justify-between flex-row-reverse items-center gap-6 w-full'>
					<div className='flex items-center justify-center space-x-10 '>
						<Link
							to={"/"}
							className='flex space-x-2 '>
							<div className='flex flex-col items-end justify-center text-justify text-blue-900'>
								<p className=''>وزاره البيئة و المياه و الزراعة</p>
								<p className='text-[10.5px] font-[400]'>
									Ministry of Environment Water & Agriculture
								</p>
								<p className='text-[8.8px] font-[700]'>
									Kingdom of Saudi Arabia المملكة العربية السعودية
								</p>
							</div>
							<img
								src={NMA1}
								alt='logo'
								className='h-[70px] py-2'
							/>
						</Link>
						<Link
							to={"/"}
							className='flex '>
							<div className='flex flex-col items-end justify-center text-justify text-blue-900'>
								<p className='leading-4 '> منصة حافظ </p>
								<p className='leading-4 text-[12.5px]'>Hafez Platform</p>
							</div>
							<img
								src={IOT}
								alt='logo'
								className='h-[70px] w-[70px] object-cover rounded-full p-2'
							/>
						</Link>
					</div>
					<span className='text-blue-900'>{dynamicHeader()}</span>
					<div className='flex items-center justify-center text-blue-900 space-x-5 '>
						{/* USER */}
						<div className='flex items-center justify-center space-x-2 min-w-[204px]'>
							<span>
								<FiChevronDown size={16} />
							</span>
							<div className='flex flex-col items-end'>
								<p className=' leading-5'>Administrator User</p>
								<p className='text-gray-500 font-normal leading-5'>ID8464521</p>
							</div>

							<span className='bg-blue-900 text-slate-50  rounded-full h-10 w-10 flex items-center justify-center '>
								<FiUser size={25} />{" "}
							</span>
						</div>
						{/* LANG */}
						<div className='flex items-center justify-center space-x-1'>
							<span>
								<FiChevronDown size={16} />
							</span>
							<div className='font-[500]'>العربية</div>
							<span className='flex items-center justify-center w-5 h-5'>
								<PiGlobeBold size={25} />
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
