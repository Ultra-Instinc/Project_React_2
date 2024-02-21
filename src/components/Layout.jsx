import React, { useState } from "react";
import NavBar from "./NavBar";
import NavigationSlice from "./NavigationSlice";
import License from "./License";
import { BiExpandHorizontal } from "react-icons/bi";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
	const [expand, setExpand] = useState(true);
	const location = useLocation();
	return (
		<div className='font-cairo font-[700] h-screen flex flex-col justify-between  overflow-hidden bg-gray-300'>
			<NavBar />
			<div className='flex mt-[100px] h-[85vh] w-[97vw]  mx-auto py-[2%] gap-[2%] '>
				<div className=' flex flex-1 relative h-[100%] '>
					{children}
					<span
						onClick={() => setExpand((prev) => !prev)}
						className={`${
							location?.pathname === "/" && "hidden"
						} absolute z-[12] bottom-10 -right-12 ${
							expand
								? "bg-basic_hover rotate-0"
								: "bg-purple-600 rotate-[360deg]"
						}  flex items-center justify-center h-10 w-10 rounded-full cursor-pointer duration-700 text-lg text-white hover:opacity-75 active:scale-95`}>
						<BiExpandHorizontal />
					</span>
				</div>
				<NavigationSlice expand={expand} />
			</div>
			<License />
		</div>
	);
};

export default Layout;
