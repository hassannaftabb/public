import React from "react";
import { FiUpload } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const ThirdGroup = () => {
  const navigate = useNavigate();

  return (
		<div className="flex flex-wrap items-center lg:items-end gap-[24px] lg:gap-[30px]">
			{/* ----- 1st input ----- */}
			<div>
				<p className="text-gray-400 text-2xl font-semibold mb-3 capitalize">Address:</p>
				<input
					disabled
					className="focus:outline-none p-3 bg-white h-12 rounded overflow-hidden border border-gray-400/70 shadow-md w-96"
					type="text"
					placeholder="Type Here"
				/>
			</div>

			{/* -------- site image: ------- */}
			<div>
				<p className="text-gray-400 text-2xl font-semibold mb-3 capitalize">site image:</p>
				<div className="flex items-center gap-[24px] focus:outline-none   w-96">
					<label className="w-full cursor-pointer" htmlFor="siteImage">
						<p className="text-[14px] text-[#00000080] font-[500] bg-white flex items-center justify-center gap-[6px] h-12 rounded overflow-hidden border border-gray-400/70 shadow-md ">
							<span>
								<FiUpload />
							</span>{" "}
							Upload
						</p>
						<input disabled className="hidden" type="file" name="siteImage" id="siteImage" />
					</label>
				</div>
			</div>

			{/* -------- image for ticket: ------- */}
			<div>
				<p className="text-gray-400 text-2xl font-semibold mb-3 capitalize">image for ticket:</p>
				<div className="flex items-center gap-[24px] focus:outline-none   w-96">
					<label className="w-full cursor-pointer" htmlFor="siteImage">
						<p className="text-[14px] text-[#00000080] font-[500] bg-white flex items-center justify-center gap-[6px] h-12 rounded overflow-hidden border border-gray-400/70 shadow-md ">
							<span>
								<FiUpload />
							</span>{" "}
							Upload
						</p>
						<input disabled className="hidden" type="file" name="siteImage" id="siteImage" />
					</label>
				</div>
			</div>
		</div>
  );
};

export default ThirdGroup;
