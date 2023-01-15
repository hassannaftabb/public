import React from "react";

const FourthGroup = () => {
	return (
		<div className="flex flex-row flex-wrap items-center gap-[30px]">
			{/* ------ Name: ----- */}

			<div>
				<p className="text-[#00000099] text-2xl font-semibold mb-3 capitalize"> Name:</p>
				<input  placeholder="Type Here"  className="focus:outline-none h-12 rounded overflow-hidden border p-2 border-gray-400/70 shadow-md w-96" type="text" />
			</div>

			{/* ------ Contact No: ----- */}
			<div>
				<p className="text-[#00000099] text-2xl font-semibold mb-3 capitalize">Contact No:</p>
				<input  placeholder="Type Here"  className="focus:outline-none h-12 rounded overflow-hidden border p-2 border-gray-400/70 shadow-md w-96" type="tel" />
			</div>

			{/* ------ Email ID ----- */}
			<div>
				<p className="text-[#00000099] text-2xl font-semibold mb-3 capitalize">Email ID</p>
				<input  placeholder="Type Here"  className="focus:outline-none h-12 rounded overflow-hidden border p-2 border-gray-400/70 shadow-md w-96" type="email" />
			</div>
		</div>
	);
};

export default FourthGroup;
