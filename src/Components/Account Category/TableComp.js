import {FormControl, MenuItem, Select} from "@mui/material";
import React from "react";

const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const TableComp = () => {
	// ------ dropdown state -----
	const [account, setAccount] = React.useState(1);

	const handleChange = (event) => {
		setAccount(event.target.value);
	};

	return (
		<div className="w-full overflow-auto">
			{/* -------- 1st table -------- */}
			<div>
				{/* ------ heading row ------ */}
				<div className="grid grid-cols-10 w-full text-center overflow-auto">
					{/* ------ data -------- */}
					<div className="w-full h-[44px] border-r-[1px] border-gray-400">
						<h1 className="bg-[#3C5071] text-center h-[100%] flex justify-center items-center text-white font-[500] truncate px-[3px]">
							Type Of A/C
						</h1>
					</div>
					{/* ------ data -------- */}
					<div className="w-full h-[44px] border-r-[1px] border-gray-400">
						<h1 className="bg-[#3C5071] text-center h-[100%] flex justify-center items-center text-white font-[500] truncate px-[3px]">
							Name Of A/C
						</h1>
					</div>
					{/* ------ data -------- */}
					<div className="w-full h-[44px] border-r-[1px] border-gray-400">
						<h1 className="bg-[#3C5071] text-center h-[100%] flex justify-center items-center text-white font-[500] truncate px-[3px]">
							Bank Name:
						</h1>
					</div>
					{/* ------ data -------- */}
					<div className="w-full h-[44px] border-r-[1px] border-gray-400">
						<h1 className="bg-[#3C5071] text-center h-[100%] flex justify-center items-center text-white font-[500] truncate px-[3px]">
							A/C Number:
						</h1>
					</div>
					{/* ------ data -------- */}
					<div className="w-full h-[44px] border-r-[1px] border-gray-400">
						<h1 className="bg-[#3C5071] text-center h-[100%] flex justify-center items-center text-white font-[500] truncate px-[3px]">
							IFSC code:
						</h1>
					</div>
					{/* ------ data -------- */}
					<div className="w-full h-[44px] border-r-[1px] border-gray-400">
						<h1 className="bg-[#3C5071] text-center h-[100%] flex justify-center items-center text-white font-[500] truncate px-[3px]">
							Branch:
						</h1>
					</div>
					{/* ------ data -------- */}
					<div className="w-full h-[44px] col-span-3  border-gray-400">
						<h1 className="bg-[#3C5071] text-center h-[50%] flex justify-center items-center text-white font-[500] truncate px-[3px]">
							Price Category:
						</h1>
						<div className="grid grid-cols-4 h-[50%] border-t-[1px] text-white">
							<h6 className="pt-[1px] h-[100%] bg-[#3C5071] text-[10px] px-[2px] truncate border-r-[1px] border-gray-400">Indian Citizen</h6>
							<h6 className="pt-[1px] h-[100%] bg-[#3C5071] text-[10px] px-[2px] truncate border-r-[1px] border-gray-400">Foreigner Citizen</h6>
							<h6 className="pt-[1px] h-[100%] bg-[#3C5071] text-[10px] px-[2px] truncate border-r-[1px] border-gray-400">Indian student</h6>
							<h6 className="pt-[1px] h-[100%] bg-[#3C5071] text-[10px] px-[2px] truncate ">Foreigner student</h6>
						</div>
					</div>
					<div className="w-full h-[44px] ">
						<h1 className=" h-[100%] flex justify-center items-center text-white font-[500] truncate px-[3px]"></h1>
					</div>
				</div>

				{/* -------- data row ------ */}
				{/* -------- data row ------ */}
				<div className="grid grid-cols-10 w-full overflow-auto">
					{/* ------ data -------- */}
					<div className=" h-[44px] border-r-[1px] border-gray-400">
						<div className="bg-[white] text-center h-[100%] flex justify-center items-center text-white font-[500] truncate px-[3px]">
							<FormControl className="focus:border-none bg-white  !text-gray-300 w-full h-10">
								<Select
									value={account}
									onChange={handleChange}
									displayEmpty
									inputProps={{"aria-label": "Without label"}}
									className="w-full h-10 !text-gray-400 "
									defaultValue="1"
								>
									{options?.map((el) => (
										<MenuItem value={el}>Select Here</MenuItem>
									))}
								</Select>
							</FormControl>
						</div>
					</div>
					{/* ------ data -------- */}
					<div className=" h-[44px] border-r-[1px] border-gray-400">
						<input className="w-[100%] h-[100%] focus:outline-none text-black p-2" type="text" placeholder="Type here" />
					</div>
					{/* ------ data -------- */}
					<div className=" h-[44px] border-r-[1px] border-gray-400">
						<div className="bg-[white] text-center h-[100%] flex justify-center items-center text-white font-[500] truncate px-[3px]">
							<FormControl className="focus:border-none bg-white  !text-gray-300 w-full h-10">
								<Select
									value={account}
									onChange={handleChange}
									displayEmpty
									inputProps={{"aria-label": "Without label"}}
									className="w-full h-10 !text-gray-400 "
									defaultValue="1"
								>
									{options?.map((el) => (
										<MenuItem value={el}>Select Here</MenuItem>
									))}
								</Select>
							</FormControl>
						</div>
					</div>
					{/* ------ data -------- */}
					<div className=" h-[44px] border-r-[1px] border-gray-400">
						<input className="w-[100%] h-[100%] focus:outline-none text-black p-2" type="text" placeholder="Type here" />
					</div>
					{/* ------ data -------- */}
					<div className=" h-[44px] border-r-[1px] border-gray-400">
						<input className="w-[100%] h-[100%] focus:outline-none text-black p-2" type="text" placeholder="Type here" />
					</div>
					{/* ------ data -------- */}
					<div className=" h-[44px] border-r-[1px] border-gray-400">
						<input className="w-[100%] h-[100%] focus:outline-none text-black p-2" type="text" placeholder="Type here" />
					</div>
					{/* ------ data -------- */}
					<div className="col-span-3 h-[44px] ">
						<div className="grid grid-cols-4 h-[100%] border-t-[1px] bg-white text-xs ">
							<input className="h-full p-2 truncate border-r-[1px] border-gray-400" type="text" placeholder="Indian Citizen" />
							<input className="h-full p-2 truncate border-r-[1px] border-gray-400" type="text" placeholder="Foreigner Citizen" />
							<input className="h-full p-2 truncate border-r-[1px] border-gray-400" type="text" placeholder="Indian student" />
							<input className="h-full p-2 truncate " type="text" placeholder="Foreigner student" />
						</div>
					</div>
					{/* button div  */}
					<div className=" flex justify-end items-center gap-[10px]">
						<button className="">
							<span className="h-[32px] bg-[#3C5071] px-[8px] rounded-[6px] text-white font-[600] hidden xl:inline-flex items-center justify-center">
								Add
							</span>
							<span className="xl:hidden bg-[#3C5071] h-7 w-7 text-sm rounded inline-flex items-center justify-center text-white">
								+
							</span>
						</button>
						<button className="">
							<span className="h-[32px] bg-[#3C5071] px-[8px] rounded-[6px] text-white font-[600] hidden xl:inline-flex items-center justify-center">
								Remove
							</span>
							<span className="xl:hidden bg-[#3C5071] h-7 w-7 text-sm rounded inline-flex items-center justify-center text-white">
								-
							</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TableComp;
