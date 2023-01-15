import {FormControl, MenuItem, Select} from "@mui/material";
import React from "react";
import {useNavigate} from "react-router-dom";

const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const FirstGroup = (props) => {
	// ------ dropdown state -----
   console.log("data passed", props.placedata)
	const [account, setAccount] = React.useState(1);

	const handleChange = (event) => {
		setAccount(event.target.value);
	};

	return (
		<div className="h-[100%] flex flex-col lg:flex-row justify-between items-center lg:items-end gap-[150px]">
			{/* ----- select side ----- */}
			<div className="flex flex-col lg:flex-row items-center gap-[30px]">
			<div>
					<p className=" text-gray-400 text-2xl font-semibold mb-3 capitalize">nodal department:</p>
					<FormControl className="">
						<Select
							value={account}
							onChange={handleChange}
							displayEmpty
							disabled
							inputProps={{"aria-label": "Without label"}}
							className="w-96 shadow-md h-12 bg-white"
						>
							{options?.map((el) => (
								<MenuItem value={el}>vss</MenuItem>
							))}
						</Select>
					</FormControl>
				</div>
				<div>
					<p className=" text-gray-400 text-2xl font-semibold mb-3 capitalize">tourist place type:</p>
					<FormControl className="">
						<Select
							value={account}
							onChange={handleChange}
							disabled
							displayEmpty
							inputProps={{"aria-label": "Without label"}}
							className="w-96 shadow-md  h-12 bg-white !text-gray-400"
						>
							{options?.map((el) => (
								<MenuItem value={el}>Monuments</MenuItem>
							))}
						</Select>
					</FormControl>
				</div>
			</div>
		</div>
	);
};

export default FirstGroup;
