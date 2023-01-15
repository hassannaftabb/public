import React from "react";
import {useNavigate} from "react-router-dom";
import TableComp from "./TableComp";
import {ButtonMd} from "../../Components/Shared/Constant";
const TableSection = () => {
	const navigate = useNavigate();

	return (
		<div className="w-full">
			<h1 className="text-[24px] text-[#626262] font-semibold">A/C Details</h1>
			<div className="mt-[32px] w-full overflow-auto">
				<TableComp />
				{/* ------- grand total -------- */}
				<div className=" flex flex-col lg:flex-row justify-end items-center gap-[10px] mt-[24px] mr-[9.5rem]">
					<h3 className="text-[20px] font-[600] text-[#626262]">Grand Total:</h3>
					<div className="grid grid-cols-4 w-[90vw] lg:w-[300px] h-[37px] bg-white rounded-[6px]">
						<div className="border-r-[1px]"></div>
						<div className="border-r-[1px]"></div>
						<div className="border-r-[1px]"></div>
					</div>
				</div>
				{/* -------- bottom buttons -------- */}
				<div className="flex justify-end gap-[10px] mt-[208px] mr-[9.5rem]">
					<ButtonMd text="Back" />
					<ButtonMd text="Cancel" />
					<span onClick={() => navigate("/preview-details")}>
						<ButtonMd text="Submit" />
					</span>
				</div>
			</div>
		</div>
	);
};

export default TableSection;
