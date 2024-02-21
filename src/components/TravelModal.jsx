import React from "react";
import ReactDOM from "react-dom";
import { PiWarningCircleThin } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const TravelModal = ({ setShowTravelToCreatePage }) => {
	const navigate = useNavigate();
	const handleClick = () => {
		setShowTravelToCreatePage(false);
		navigate("/createPowerPlant");
	};
	return ReactDOM.createPortal(
		<div className='flex rounded-xl z-50 fixed inset-0 overflow-hidden top-0 left-0 bg-gray-900/80 items-center justify-center   '>
			<div className='bg-white rounded-xl shadow-lg flex items-center justify-center gap-4 flex-col w-fit  min-w-[420px] h-fit min-h-[280px] shadow-gray-200 shadowm-md'>
				<PiWarningCircleThin className='text-basic h-20 w-20' />
				<p className='text-[24px] font-semibold'>Confirmation</p>
				<p>Are you sure you want to create a new record ? </p>
				<div className='flex items-center justify-center gap-4 text-white'>
					<button
						onClick={handleClick}
						className='py-1 px-3 bg-violet-600 rounded-md'>
						OK
					</button>
					<button
						onClick={() => setShowTravelToCreatePage(false)}
						className='py-1 px-3 bg-gray-600 rounded-md'>
						Cancel
					</button>
				</div>
			</div>
		</div>,
		document.querySelector(".modal-container")
	);
};

export default TravelModal;
