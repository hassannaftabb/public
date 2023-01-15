import React from "react";
import { useNavigate } from "react-router-dom";
import TableComp from "./TableComp";

const TableSection = () => {

  const navigate = useNavigate();


  return (
    <div>
      {/* ----- table ----- */}
      <div className="flex flex-col lg:flex-row items-center gap-[50px]">
        <TableComp />
        {/* ------- right side button section ------ */}
        <div className="flex flex-col gap-[30px]">
          <div className="flex gap-[20px]">
            <button className="bg-[#314668] text-white px-[14px] py-[5px] rounded-[10px]">
              Add
            </button>
            <button className="bg-[#314668] text-white px-[14px] py-[5px] rounded-[10px]">
              Remove
            </button>
          </div>
          <div className="flex gap-[20px]">
            <button className="bg-[#314668] text-white px-[14px] py-[5px] rounded-[10px]">
              Add
            </button>
            <button className="bg-[#314668] text-white px-[14px] py-[5px] rounded-[10px]">
              Remove
            </button>
          </div>
          <div className="flex gap-[20px]">
            <button className="text-[22px] font-[600] bg-[#314668] text-white px-[50px] py-[10px] rounded-[10px]">
              CANCEL
            </button>
            <button onClick={() => navigate("/price-category")} className="text-[22px] font-[600] bg-[#314668] text-white px-[50px] py-[10px] rounded-[10px]">
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableSection;
