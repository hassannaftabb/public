import {FormControl, MenuItem, Select} from "@mui/material";
import React from "react";

const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const SecondGroup = () => {
	// ------ dropdown state -----
	const [account, setAccount] = React.useState(1);

	const handleChange = (event) => {
		setAccount(event.target.value);
	};

	return (
		<div className="flex flex-row flex-wrap items-center gap-[30px]">
			<div>
				<p className="text-gray-400 text-2xl font-semibold mb-3 capitalize">City:</p>
				<FormControl className="">
					<Select
						value={account}
						onChange={handleChange}
						displayEmpty
						disabled
						inputProps={{"aria-label": "Without label"}}
						className="w-96 shadow-md h-12 bg-white !text-gray-400"
					>
						{options?.map((el) => (
							<MenuItem value={el}>Jaipur</MenuItem>
						))}
					</Select>
				</FormControl>
			</div>
			<div>
				<p className="text-gray-400 text-2xl font-semibold mb-3 capitalize">place name:</p>
				<input
					disabled
					className="focus:outline-none p-3 bg-white h-12 rounded overflow-hidden border border-gray-400/70 shadow-md w-96"
					type="text"
					placeholder="Hawa Mahal"
				/>
			</div>
			<div>
				<p className="text-gray-400 text-2xl font-semibold mb-3 capitalize">GIS Locations</p>
				<input
					disabled
					className="focus:outline-none p-3 bg-white h-12 rounded overflow-hidden border border-gray-400/70 shadow-md w-96"
					type="text"
					placeholder="26.9239° N, 75.8267° E"
				/>
			</div>
		</div>
	);
};

export default SecondGroup;
