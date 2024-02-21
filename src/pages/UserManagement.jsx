import React, { useState } from "react";
import { CiSettings } from "react-icons/ci";
import { IoIosAddCircleOutline } from "react-icons/io";
import { Column } from "primereact/column";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { PrimeReactDataTable } from "../components/PrimeReactDataTable";
import { BiEdit, BiPause } from "react-icons/bi";
import { FiDelete, FiUser } from "react-icons/fi";
import { MdDelete, MdDeleteOutline } from "react-icons/md";
import { InputText } from "primereact/inputtext";
import { FilterMatchMode } from "primereact/api";
import { FaMagnifyingGlass } from "react-icons/fa6";
const pageTabs = [
	{ key: 4, label: "موقع الأجهزة", value: 4 },
	{ key: 3, label: "مجموعة الأجهزة", value: 3 },
	{ key: 2, label: "الأجهزة المحذوفة", value: 2 },
	{ key: 1, label: "الأجهزة النشطة", value: 1 },
];
const redux_data = [
	{
		operating_date: "7-2-2024",
		model_number: "Ruptela",
		serial_number: 123115489795,
		longitude: 51.1561561,
		latitude: 18.15616,
		type: "حساس",
		modain: "تتبع المركبيات",
		location: "حائل",
		device_number: 5646431635,
		device_name: 165465416,
	},
	{
		operating_date: "7-2-2024",
		model_number: "Ruptela",
		serial_number: 123115489795,
		longitude: 51.1561561,
		latitude: 18.15616,
		type: "حساس",
		modain: "تتبع المركبات",
		location: "حائل",
		device_number: 5646431635,
		device_name: 165465416,
	},
	{
		operating_date: "7-2-2024",
		model_number: "Ruptela",
		serial_number: 123115489795,
		longitude: 51.1561561,
		latitude: 18.15616,
		type: "حساس",
		modain: "تتبع المركبات",
		location: "حائل",
		device_number: 5646431635,
		device_name: 165465416,
	},
	{
		operating_date: "7-2-2024",
		model_number: "Ruptela",
		serial_number: 123115489795,
		longitude: 51.1561561,
		latitude: 18.15616,
		type: "حساس",
		modain: "تتبع المركبات",
		location: "حائل",
		device_number: 5646431635,
		device_name: 165465416,
	},
	{
		operating_date: "7-2-2024",
		model_number: "Ruptela",
		serial_number: 123115489795,
		longitude: 51.1561561,
		latitude: 18.15616,
		type: "حساس",
		modain: "تتبع المركبات",
		location: "حائل",
		device_number: 5646431635,
		device_name: 165465416,
	},
	{
		operating_date: "7-2-2024",
		model_number: "Ruptela",
		serial_number: 123115489795,
		longitude: 51.1561561,
		latitude: 18.15616,
		type: "حساس",
		modain: "تتبع المركبات",
		location: "حائل",
		device_number: 5646431635,
		device_name: 165465416,
	},
	{
		operating_date: "7-2-2024",
		model_number: "Ruptela",
		serial_number: 123115489795,
		longitude: 51.1561561,
		latitude: 18.15616,
		type: "حساس",
		modain: "تتبع المركبات",
		location: "حائل",
		device_number: 5646431635,
		device_name: 165465416,
	},
	{
		operating_date: "7-2-2024",
		model_number: "Ruptela",
		serial_number: 123115489795,
		longitude: 51.1561561,
		latitude: 18.15616,
		type: "حساس",
		modain: "تتبع المركبات",
		location: "حائل",
		device_number: 5646431635,
		device_name: 165465416,
	},
	{
		operating_date: "7-2-2024",
		model_number: "Ruptela",
		serial_number: 123115489795,
		longitude: 51.1561561,
		latitude: 18.15616,
		type: "حساس",
		modain: "تتبع المركبات",
		location: "حائل",
		device_number: 5646431635,
		device_name: 165465416,
	},
	{
		operating_date: "7-2-2024",
		model_number: "Ruptela",
		serial_number: 123115489795,
		longitude: 51.1561561,
		latitude: 18.15616,
		type: "حساس",
		modain: "تتبع المركبات",
		location: "حائل",
		device_number: 5646431635,
		device_name: 165465416,
	},
	{
		operating_date: "7-2-2024",
		model_number: "Ruptela",
		serial_number: 123115489795,
		longitude: 51.1561561,
		latitude: 18.15616,
		type: "حساس",
		modain: "تتبع المركبات",
		location: "حائل",
		device_number: 5646431635,
		device_name: 165465416,
	},
	{
		operating_date: "7-2-2024",
		model_number: "Ruptela",
		serial_number: 123115489795,
		longitude: 51.1561561,
		latitude: 18.15616,
		type: "حساس",
		modain: "تتبع المركبات",
		location: "حائل",
		device_number: 5646431635,
		device_name: 165465416,
	},
	{
		operating_date: "7-2-2024",
		model_number: "Ruptela",
		serial_number: 123115489795,
		longitude: 51.1561561,
		latitude: 18.15616,
		type: "حساس",
		modain: "تتبع المركبات",
		location: "حائل",
		device_number: 5646431635,
		device_name: 165465416,
	},
	{
		operating_date: "7-2-2024",
		model_number: "Ruptela",
		serial_number: 123115489795,
		longitude: 51.1561561,
		latitude: 18.15616,
		type: "حساس",
		modain: "تتبع المركبات",
		location: "حائل",
		device_number: 5646431635,
		device_name: 165465416,
	},
	{
		operating_date: "7-2-2024",
		model_number: "Ruptela",
		serial_number: 123115489795,
		longitude: 51.1561561,
		latitude: 18.15616,
		type: "حساس",
		modain: "تتبع المركبات",
		location: "حائل",
		device_number: 5646431635,
		device_name: 165465416,
	},
	{
		operating_date: "7-2-2024",
		model_number: "Ruptela",
		serial_number: 123115489795,
		longitude: 51.1561561,
		latitude: 18.15616,
		type: "حساس",
		modain: "تتبع المركبات",
		location: "حائل",
		device_number: 5646431635,
		device_name: 165465416,
	},
	{
		operating_date: "7-2-2024",
		model_number: "Ruptela",
		serial_number: 123115489795,
		longitude: 51.1561561,
		latitude: 18.15616,
		type: "حساس",
		modain: "تتبع المركبات",
		location: "حائل",
		device_number: 5646431635,
		device_name: 165465416,
	},
	{
		operating_date: "7-2-2024",
		model_number: "Ruptela",
		serial_number: 123115489795,
		longitude: 51.1561561,
		latitude: 18.15616,
		type: "حساس",
		modain: "تتبع المركبات",
		location: "حائل",
		device_number: 5646431635,
		device_name: 165465416,
	},
	{
		operating_date: "7-2-2024",
		model_number: "Ruptela",
		serial_number: 123115489795,
		longitude: 51.1561561,
		latitude: 18.15616,
		type: "حساس",
		modain: "تتبع المركبات",
		location: "حائل",
		device_number: 5646431635,
		device_name: 165465416,
	},
	{
		operating_date: "7-2-2024",
		model_number: "Ruptela",
		serial_number: 123115489795,
		longitude: 51.1561561,
		latitude: 18.15616,
		type: "حساس",
		modain: "تتبع المركبات",
		location: "حائل",
		device_number: 5646431635,
		device_name: 165465416,
	},
	{
		operating_date: "7-2-2024",
		model_number: "Ruptela",
		serial_number: 123115489795,
		longitude: 51.1561561,
		latitude: 18.15616,
		type: "حساس",
		modain: "تتبع المركبات",
		location: "حائل",
		device_number: 5646431635,
		device_name: 165465416,
	},
	{
		operating_date: "7-2-2024",
		model_number: "Ruptela",
		serial_number: 123115489795,
		longitude: 51.1561561,
		latitude: 18.15616,
		type: "حساس",
		modain: "تتبع المركبات",
		location: "حائل",
		device_number: 5646431635,
		device_name: 165465416,
	},
	{
		operating_date: "7-2-2024",
		model_number: "Ruptela",
		serial_number: 123115489795,
		longitude: 51.1561561,
		latitude: 18.15616,
		type: "حساس",
		modain: "تتبع المركبات",
		location: "حائل",
		device_number: 5646431635,
		device_name: 165465416,
	},
	{
		operating_date: "7-2-2024",
		model_number: "Ruptela",
		serial_number: 123115489795,
		longitude: 51.1561561,
		latitude: 18.15616,
		type: "حساس",
		modain: "تتبع المركبات",
		location: "حائل",
		device_number: 5646431635,
		device_name: 165465416,
	},
	{
		operating_date: "7-2-2024",
		model_number: "Ruptela",
		serial_number: 123115489795,
		longitude: 51.1561561,
		latitude: 18.15616,
		type: "حساس",
		modain: "تتبع المركبات",
		location: "حائل",
		device_number: 5646431635,
		device_name: 165465416,
	},
	{
		operating_date: "7-2-2024",
		model_number: "Ruptela",
		serial_number: 123115489795,
		longitude: 51.1561561,
		latitude: 18.15616,
		type: "حساس",
		modain: "تتبع المركبات",
		location: "حائل",
		device_number: 5646431635,
		device_name: 165465416,
	},
	{
		operating_date: "7-2-2024",
		model_number: "Ruptela",
		serial_number: 123115489795,
		longitude: 51.1561561,
		latitude: 18.15616,
		type: "حساس",
		modain: "تتبع المركبات",
		location: "حائل",
		device_number: 5646431635,
		device_name: 165465416,
	},
	{
		operating_date: "7-2-2024",
		model_number: "Ruptela",
		serial_number: 123115489795,
		longitude: 51.1561561,
		latitude: 18.15616,
		type: "حساس",
		modain: "تتبع المركبات",
		location: "حائل",
		device_number: 5646431635,
		device_name: 165465416,
	},
	{
		operating_date: "7-2-2024",
		model_number: "Ruptela",
		serial_number: 123115489795,
		longitude: 51.1561561,
		latitude: 18.15616,
		type: "حساس",
		modain: "تتبع المركبات",
		location: "حائل",
		device_number: 5646431635,
		device_name: 165465416,
	},
	{
		operating_date: "7-2-2024",
		model_number: "Ruptela",
		serial_number: 123115489795,
		longitude: 51.1561561,
		latitude: 18.15616,
		type: "حساس",
		modain: "تتبع المركبات",
		location: "حائل",
		device_number: 5646431635,
		device_name: 165465416,
	},
	{
		operating_date: "7-2-2024",
		model_number: "Ruptela",
		serial_number: 123115489795,
		longitude: 51.1561561,
		latitude: 18.15616,
		type: "حساس",
		modain: "تتبع المركبات",
		location: "حائل",
		device_number: 5646431635,
		device_name: 165465416,
	},
	{
		operating_date: "7-2-2024",
		model_number: "Ruptela",
		serial_number: 123115489795,
		longitude: 51.1561561,
		latitude: 18.15616,
		type: "حساس",
		modain: "تتبع المركبات",
		location: "حائل",
		device_number: 5646431635,
		device_name: 165465416,
	},
	{
		operating_date: "7-2-2024",
		model_number: "Ruptela",
		serial_number: 123115489795,
		longitude: 51.1561561,
		latitude: 18.15616,
		type: "حساس",
		modain: "تتبع المركبات",
		location: "حائل",
		device_number: 5646431635,
		device_name: 165465416,
	},
	{
		operating_date: "7-2-2024",
		model_number: "Ruptela",
		serial_number: 123115489795,
		longitude: 51.1561561,
		latitude: 18.15616,
		type: "حساس",
		modain: "تتبع المركبات",
		location: "حائل",
		device_number: 5646431635,
		device_name: 165465416,
	},
	{
		operating_date: "7-2-2024",
		model_number: "Ruptela",
		serial_number: 123115489795,
		longitude: 51.1561561,
		latitude: 18.15616,
		type: "حساس",
		modain: "تتبع المركبات",
		location: "حائل",
		device_number: 5646431635,
		device_name: 165465416,
	},
	{
		operating_date: "7-2-2024",
		model_number: "Ruptela",
		serial_number: 123115489795,
		longitude: 51.1561561,
		latitude: 18.15616,
		type: "حساس",
		modain: "تتبع المركبات",
		location: "حائل",
		device_number: 5646431635,
		device_name: 165465416,
	},
	{
		operating_date: "7-2-2024",
		model_number: "Ruptela",
		serial_number: 123115489795,
		longitude: 51.1561561,
		latitude: 18.15616,
		type: "حساس",
		modain: "تتبع المركبات",
		location: "حائل",
		device_number: 5646431635,
		device_name: 165465416,
	},
	{
		operating_date: "7-2-2024",
		model_number: "Ruptela",
		serial_number: 123115489795,
		longitude: 51.1561561,
		latitude: 18.15616,
		type: "حساس",
		modain: "تتبع المركبات",
		location: "حائل",
		device_number: 5646431635,
		device_name: 165465416,
	},
	{
		operating_date: "7-2-2024",
		model_number: "Ruptela",
		serial_number: 123115489795,
		longitude: 51.1561561,
		latitude: 18.15616,
		type: "حساس",
		modain: "تتبع المركبات",
		location: "حائل",
		device_number: 5646431635,
		device_name: 165465416,
	},
	{
		operating_date: "7-2-2024",
		model_number: "Ruptela",
		serial_number: 123115489795,
		longitude: 51.1561561,
		latitude: 18.15616,
		type: "حساس",
		modain: "تتبع المركبات",
		location: "حائل",
		device_number: 5646431635,
		device_name: 165465416,
	},
	{
		operating_date: "7-2-2024",
		model_number: "Ruptela",
		serial_number: 123115489795,
		longitude: 51.1561561,
		latitude: 18.15616,
		type: "حساس",
		modain: "تتبع المركبات",
		location: "حائل",
		device_number: 5646431635,
		device_name: 165465416,
	},
	{
		operating_date: "7-2-2024",
		model_number: "Ruptela",
		serial_number: 123115489795,
		longitude: 51.1561561,
		latitude: 18.15616,
		type: "حساس",
		modain: "تتبع المركبات",
		location: "حائل",
		device_number: 5646431635,
		device_name: 165465416,
	},
	{
		operating_date: "7-2-2024",
		model_number: "Ruptela",
		serial_number: 123115489795,
		longitude: 51.1561561,
		latitude: 18.15616,
		type: "حساس",
		modain: "تتبع المركبات",
		location: "حائل",
		device_number: 5646431635,
		device_name: 165465416,
	},
	{
		operating_date: "7-2-2024",
		model_number: "Ruptela",
		serial_number: 123115489795,
		longitude: 51.1561561,
		latitude: 18.15616,
		type: "حساس",
		modain: "تتبع المركبات",
		location: "حائل",
		device_number: 5646431635,
		device_name: 165465416,
	},
	{
		operating_date: "7-2-2024",
		model_number: "Ruptela",
		serial_number: 123115489795,
		longitude: 51.1561561,
		latitude: 18.15616,
		type: "حساس",
		modain: "تتبع المركبات",
		location: "حائل",
		device_number: 5646431635,
		device_name: 165465416,
	},
	{
		operating_date: "7-2-2024",
		model_number: "Ruptela",
		serial_number: 123115489795,
		longitude: 51.1561561,
		latitude: 18.15616,
		type: "حساس",
		modain: "تتبع المركبات",
		location: "حائل",
		device_number: 5646431635,
		device_name: 165465416,
	},
	{
		operating_date: "7-2-2024",
		model_number: "Ruptela",
		serial_number: 123115489795,
		longitude: 51.1561561,
		latitude: 18.15616,
		type: "حساس",
		modain: "تتبع المركبات",
		location: "حائل",
		device_number: 5646431635,
		device_name: 165465416,
	},
	{
		operating_date: "7-2-2024",
		model_number: "Ruptela",
		serial_number: 123115489795,
		longitude: 51.1561561,
		latitude: 18.15616,
		type: "حساس",
		modain: "تتبع المركبات",
		location: "حائل",
		device_number: 5646431635,
		device_name: 165465416,
	},
	{
		operating_date: "7-2-2024",
		model_number: "Ruptela",
		serial_number: 123115489795,
		longitude: 51.1561561,
		latitude: 18.15616,
		type: "حساس",
		modain: "تتبع المركبات",
		location: "حائل",
		device_number: 5646431635,
		device_name: 165465416,
	},
	{
		operating_date: "7-2-2024",
		model_number: "Ruptela",
		serial_number: 123115489795,
		longitude: 51.1561561,
		latitude: 18.15616,
		type: "حساس",
		modain: "تتبع المركبات",
		location: "حائل",
		device_number: 5646431635,
		device_name: 165465416,
	},
	{
		operating_date: "7-2-2024",
		model_number: "Ruptela",
		serial_number: 123115489795,
		longitude: 51.1561561,
		latitude: 18.15616,
		type: "حساس",
		modain: "تتبع المركبات",
		location: "حائل",
		device_number: 5646431635,
		device_name: 165465416,
	},
	{
		operating_date: "7-2-2024",
		model_number: "Ruptela",
		serial_number: 123115489795,
		longitude: 51.1561561,
		latitude: 18.15616,
		type: "حساس",
		modain: "تتبع المركبات",
		location: "حائل",
		device_number: 5646431635,
		device_name: 165465416,
	},
	{
		operating_date: "7-2-2024",
		model_number: "Ruptela",
		serial_number: 123115489795,
		longitude: 51.1561561,
		latitude: 18.15616,
		type: "حساس",
		modain: "تتبع المركبات",
		location: "حائل",
		device_number: 5646431635,
		device_name: 165465416,
	},
	{
		operating_date: "7-2-2024",
		model_number: "Ruptela",
		serial_number: 123115489795,
		longitude: 51.1561561,
		latitude: 18.15616,
		type: "حساس",
		modain: "تتبع المركبات",
		location: "حائل",
		device_number: 5646431635,
		device_name: 165465416,
	},
	{
		operating_date: "7-2-2024",
		model_number: "Ruptela",
		serial_number: 123115489795,
		longitude: 51.1561561,
		latitude: 18.15616,
		type: "حساس",
		modain: "تتبع المركبات",
		location: "حائل",
		device_number: 5646431635,
		device_name: 165465416,
	},
	{
		operating_date: "7-2-2024",
		model_number: "Ruptela",
		serial_number: 123115489795,
		longitude: 51.1561561,
		latitude: 18.15616,
		type: "حساس",
		modain: "تتبع المركبات",
		location: "حائل",
		device_number: 5646431635,
		device_name: 165465416,
	},
	{
		operating_date: "7-2-2024",
		model_number: "Ruptela",
		serial_number: 123115489795,
		longitude: 51.1561561,
		latitude: 18.15616,
		type: "حساس",
		modain: "تتبع المركبات",
		location: "حائل",
		device_number: 5646431635,
		device_name: 165465416,
	},
	{
		operating_date: "7-2-2024",
		model_number: "Ruptela",
		serial_number: 123115489795,
		longitude: 51.1561561,
		latitude: 18.15616,
		type: "حساس",
		modain: "تتبع المركبات",
		location: "حائل",
		device_number: 5646431635,
		device_name: 165465416,
	},
	{
		operating_date: "7-2-2024",
		model_number: "Ruptela",
		serial_number: 123115489795,
		longitude: 51.1561561,
		latitude: 18.15616,
		type: "حساس",
		modain: "تتبع المركبات",
		location: "حائل",
		device_number: 5646431635,
		device_name: 165465416,
	},
	{
		operating_date: "7-2-2024",
		model_number: "Ruptela",
		serial_number: 123115489795,
		longitude: 51.1561561,
		latitude: 18.15616,
		type: "حساس",
		modain: "تتبع المركبات",
		location: "حائل",
		device_number: 5646431635,
		device_name: 165465416,
	},
	{
		operating_date: "7-2-2024",
		model_number: "Ruptela",
		serial_number: 123115489795,
		longitude: 51.1561561,
		latitude: 18.15616,
		type: "حساس",
		modain: "تتبع المركبات",
		location: "حائل",
		device_number: 5646431635,
		device_name: 165465416,
	},
	{
		operating_date: "7-2-2024",
		model_number: "Ruptela",
		serial_number: 123115489795,
		longitude: 51.1561561,
		latitude: 18.15616,
		type: "حساس",
		modain: "تتبع المركبات",
		location: "حائل",
		device_number: 5646431635,
		device_name: 165465416,
	},
	{
		operating_date: "7-2-2024",
		model_number: "Ruptela",
		serial_number: 123115489795,
		longitude: 51.1561561,
		latitude: 18.15616,
		type: "حساس",
		modain: "تتبع المركبات",
		location: "حائل",
		device_number: 5646431635,
		device_name: 165465416,
	},
];
export default function UserManagement() {
	const [tab, setTab] = useState(1);
	const [filters, setFilters] = useState({
		global: { value: null, matchMode: FilterMatchMode.CONTAINS },
	});
	const proceduresBodyTemplate = (row) => (
		<div className='flex items-center'>
			<div className='cursor-pointer hover:scale-105 text-blue-400 hover:text-blue-700 duration-300'>
				<BiEdit size={15} />
			</div>
			<div className='cursor-pointer hover:scale-105 text-red-400 hover:text-red-700 duration-300'>
				<MdDeleteOutline size={15} />
			</div>
			<div className='cursor-pointer hover:scale-105 text-orange-400 hover:text-orange-700 duration-300'>
				<BiPause size={15} />
			</div>
			<div className='cursor-pointer hover:scale-105 text-green-400 hover:text-green-700 duration-300'>
				<FiUser size={15} />
			</div>
		</div>
	);
	return (
		<div className='bg-gray-200 w-full h-full rounded-lg flex  pt-5 px-5 overflow-hidden '>
			{/* Body */}
			<div className='w-full h-full  flex flex-col'>
				{/* 4 stages header */}
				<div className=' flex text-[13px] mb-3 items-center justify-end space-x-5  h-[60px]'>
					{pageTabs?.map((item) => (
						<div
							key={item.key}
							onClick={() => setTab(item?.value)}
							className={` cursor-pointer flex items-center justify-center pb-3 ${
								tab === item?.value
									? "text-green-500 border-b-2 border-b-green-500"
									: "text-gray-500"
							} duration-500 `}>
							{item?.label}
						</div>
					))}
				</div>
				{/* table */}
				<div className='flex flex-col rounded-t-2xl items-center justify-between bg-white h-full'>
					<div className='min-h-[65px] flex items-center justify-between px-5 text-blue-800 font-semibold text-[13px] w-full h-[80px]'>
						<div className='cursor-pointer flex items-center justify-center rounded-xl bg-orange-500 text-white p-2 space-x-2'>
							<p>إضافة جديد </p>
							<IoIosAddCircleOutline size={20} />
						</div>
						<div>1 : عدد الحفارات</div>
						<div>عدد المعدات : 1 </div>
						<div> 1 : عدد الأجهزة النشطة</div>
						<div
							// ref={searchRef}
							className={`flex gap-3 items-center bg-white/50 w-fit px-2  pl-3  text-[13px] border-[3px] rounded-lg  border-gray-200 focus-within:ring focus-within:ring-blue-300 ring-0 transition-all duration-500 cursor-pointer `}
							// onClick={magnifierClick}
						>
							<InputText
								className='placeholder:justify-end flex text-right py-2'
								placeholder='...بحث'
								onInput={(e) =>
									setFilters({
										global: {
											value: e.target.value,
											matchMode: FilterMatchMode.CONTAINS,
										},
									})
								}
							/>
							<FaMagnifyingGlass
								size={15}
								className={`text-blue-800 transition-all duration-500 `}
							/>
						</div>
						<div className='cursor-pointer flex items-center justify-center rounded-xl bg-purple-500 text-white p-2'>
							<CiSettings size={20} />
						</div>
					</div>
					<div className='h-full w-full mx-auto '>
						<PrimeReactDataTable
							paginator
							rows={5}
							iterator={"area_id"}
							scrollHeight={"48vh"}
							scrollable
							rowsPerPageOptions={[5, 10, 25, 50, 100]}
							filters={filters}
							className=' w-full h-full text-[13px] font-bold'
							data={redux_data}>
							<Column
								field='procedures'
								header='الإجراءات'
								body={proceduresBodyTemplate}
								className=' '></Column>
							<Column
								field='operating_date'
								header='تاريخ التشغيل'
								sortable
								className=' '></Column>
							<Column
								field='model_number'
								header='رقم الموديل '
								sortable
								className=' '></Column>
							<Column
								field='serial_number'
								header='الرقم التسلسلي'
								sortable
								className=' '></Column>
							<Column
								field='longitude'
								header='خط الطول'
								sortable
								className=' '></Column>
							<Column
								field='latitude'
								header='خط العرض'
								sortable
								className=' '></Column>
							<Column
								field='type'
								header='النوع'
								sortable
								className=' '></Column>
							<Column
								field='modain'
								header='المجال'
								headerClassName=' '
								sortable
								className=' '></Column>
							<Column
								field='location'
								header='الموقع'
								className=' '></Column>
							<Column
								field='device_number'
								header='رقم الجهاز'
								sortable
								className=''></Column>
							<Column
								field='device_name'
								header='إسم الجهاز'
								headerClassName=''
								className=''></Column>
						</PrimeReactDataTable>
					</div>
				</div>
			</div>
		</div>
	);
}
