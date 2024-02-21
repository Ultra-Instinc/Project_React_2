import { BiCurrentLocation } from "react-icons/bi";
import { MdCreate, MdOutlineElderly } from "react-icons/md";
import { PiArrowCircleDownRightDuotone } from "react-icons/pi";
export const tabular = [
	{
		key: 1,
		label: "إتشاء مجدول",
		parent: 6,
		path: "/create_tabular",
		icon: <MdCreate />,
	},
	{
		key: 2,
		label: "نموذج مجدول",
		parent: 6,
		path: "/tabular_model",
		icon: <MdOutlineElderly />,
	},
	{
		key: 2,
		label: "إنشاء إجراءات التشغيل القياسية ",
		parent: 7,
		path: "/create_standard_operating_procedures",
		icon: <PiArrowCircleDownRightDuotone />,
	},
	{
		key: 2,
		label: "إجراءات التشغيل القياسية الجارية",
		parent: 7,
		path: "/current_standard_operating_procedures",
		icon: <BiCurrentLocation />,
	},
];
