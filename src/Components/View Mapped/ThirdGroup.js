import React from "react";
import {FiUpload} from "react-icons/fi";
import {useNavigate} from "react-router-dom";

const ThirdGroup = ({onTextFieldChange}) => {
	const navigate = useNavigate();

	return (
		<div className="flex flex-wrap border-b border-gray-400 pb-8 items-center lg:items-end gap-[24px] lg:gap-[30px]">
			{/* ----- 1st input ----- */}
			<div>
				<p className="text-[#00000099] text-2xl font-semibold mb-3 capitalize">Address:</p>
				<input onChange={e => onTextFieldChange(e)} name="address" placeholder="Type Here" className="focus:outline-none p-3 h-12 rounded overflow-hidden border border-gray-400/70 shadow-md w-96" type="text" />
			</div>

			{/* -------- site image: ------- */}
			<div>
				<p className="text-[#00000099] text-2xl font-semibold mb-3 capitalize">site image:</p>
				<div className="flex items-center gap-[24px] focus:outline-none   w-96">
					<label className="w-full cursor-pointer" htmlFor="siteImage">
						<p className="text-[14px] text-[#00000080] font-[500] bg-white flex items-center justify-center gap-[6px] h-12 rounded overflow-hidden border border-gray-400/70 shadow-md ">
							<span>
								<FiUpload />
							</span>{" "}
							Upload
						</p>
						<input onChange={e => onTextFieldChange(e)}  className="hidden" type="file" name="site_image" id="siteImage" />
					</label>
					<button className="w-[70px] flex-shrink-0  bg-[#3C5071] text-white py-2.5 rounded">View</button>
				</div>
			</div>

			{/* -------- image for ticket: ------- */}
			<div>
				<p className="text-[#00000099] text-2xl font-semibold mb-3 capitalize">image for ticket:</p>
				<div className="flex items-center gap-[24px] focus:outline-none   w-96">
					<label className="w-full cursor-pointer" htmlFor="siteImage">
						<p className="text-[14px] text-[#00000080] font-[500] bg-white flex items-center justify-center gap-[6px] h-12 rounded overflow-hidden border border-gray-400/70 shadow-md ">
							<span>
								<FiUpload />
							</span>{" "}
							Upload
						</p>
						<input onChange={e => onTextFieldChange(e)}  className="hidden" type="file" name="siteforticket" id="siteImage" />
					</label>
					<button className="w-[70px] flex-shrink-0  bg-[#3C5071] text-white py-2.5 rounded">View</button>
				</div>
			</div>

			{/* -------- submit button ------ */}
			<button onClick={() => navigate("/booking-info")} className="w-[153px] bg-[#3C5071] text-white py-2.5 mb-0.5 rounded">
				Submit
			</button>
		</div>
	);
};

export default ThirdGroup;
