import {FormControl, MenuItem, Select} from "@mui/material";
import React from "react";
import {useNavigate} from "react-router-dom";

const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const SecondGroup = ({onTextFieldChange}) => {
	const navigate = useNavigate();

	// ------ dropdown state -----
	const [account, setAccount] = React.useState(1);

	const handleChange = (event) => {
		setAccount(event.target.value);
	};

	return (
		<div className="flex border-t border-gray-400 pt-5 mt-2 flex-row flex-wrap items-center gap-[30px]">
			<div>
				<p className="text-[#00000099] text-2xl font-semibold mb-3 capitalize">City:</p>
				<FormControl className="" >
					<Select
					    onChange={e => onTextFieldChange(e)}
					    name="city"
						value={account}
						displayEmpty
						inputProps={{"aria-label": "Without label"}}
						className="w-96 shadow-md h-12 bg-white !text-gray-400"
					>
						{options?.map((el) => (
							<MenuItem value={el}>Select Here</MenuItem>
						))}
					</Select>
				</FormControl>
			</div>
			<div>
				<p className="text-[#00000099] text-2xl font-semibold mb-3 capitalize">place name:</p>
				<FormControl className="" onChange={e => onTextFieldChange(e)} name="place_name" >
					<Select
						value={account}
						displayEmpty
						inputProps={{"aria-label": "Without label"}}
						className="w-96 shadow-md h-12 bg-white !text-gray-400"
					>
						{options?.map((el) => (
							<MenuItem value={el}>Select Here</MenuItem>
						))}
					</Select>
				</FormControl>
			</div>
			<div>
				<p className="text-[#00000099] text-2xl font-semibold mb-3 capitalize">place name:</p>
				<div className="flex justify-center items-center h-12 rounded overflow-hidden border border-stone-400/40 shadow-md">
					<input onChange={e => onTextFieldChange(e)} name="place_coordinate" className="w-48 lg:grow h-[100%] px-[.5rem] focus:outline-none" type="text" placeholder="Longitude" />
					<input onChange={e => onTextFieldChange(e)} name="place_coordinate" className="w-48 lg:grow h-[100%] px-[.5rem] focus:outline-none border-l-[2px]" type="text" placeholder="Latitude" />
				</div>
			</div>
		</div>
	);
};

export default SecondGroup;
