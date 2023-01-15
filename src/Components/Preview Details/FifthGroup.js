import { FormControl, MenuItem, Select } from "@mui/material";
import React from "react";

const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const FifthGroup = () => {
  // ------ dropdown state -----
  const [account, setAccount] = React.useState(1);

  const handleChange = (event) => {
    setAccount(event.target.value);
  };

  return (
    <div className="h-[100%] flex flex-col lg:flex-row justify-between items-center lg:items-end gap-[150px]">
      {/* ----- select side ----- */}
      <div className="flex flex-col lg:flex-row items-center gap-[30px]">
        {/* ------ Name: ----- */}
        <div>
          <p className="w-[100%] text-[#00000099] text-[30px] font-[600] mb-[10px] capitalize">
            Name:
          </p>
          <input
            className="focus:outline-none bg-[white] w-[90vw] lg:w-[394px] h-[61px] px-[.5rem] shadow-[0_4px_4px_rgba(0,0,0,0.3)] rounded-[4px]"
            type="text"
          />
        </div>
        {/* ------ Contact No: ----- */}
        <div>
          <p className="w-[100%] text-[#00000099] text-[30px] font-[600] mb-[10px] capitalize">
            Contact No:
          </p>
          <input
            className="focus:outline-none bg-[white] w-[90vw] lg:w-[394px] h-[61px] px-[.5rem] shadow-[0_4px_4px_rgba(0,0,0,0.3)] rounded-[4px]"
            type="text"
          />
        </div>
        {/* ------ Email ID ----- */}
        <div>
          <p className="w-[100%] text-[#00000099] text-[30px] font-[600] mb-[10px] capitalize">
            Email ID
          </p>
          <input
            className="focus:outline-none bg-[white] w-[90vw] lg:w-[394px] h-[61px] px-[.5rem] shadow-[0_4px_4px_rgba(0,0,0,0.3)] rounded-[4px]"
            type="text"
          />
        </div>
      </div>
    </div>
  );
};

export default FifthGroup;
