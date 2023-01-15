import React from "react";

const PriceCategory = () => {
  return (
    <div className="px-[10px] lg:px-0 whitespace-nowrap">
      <h1 className="text-[#30303099] text-[25px] font-[500] mb-[26px]">
        Price Category:
      </h1>
      <div className="flex flex-col lg:flex-row justify-between items-center">
        {/* --------- indian citizen -------- */}
        <div className="flex flex-col items-center gap-[8px]">
          <p className="text-[22px] font-[500]">Indian Citizen</p>
          <p className="flex justify-center items-center text-[18px] font-[500] w-[145px] h-[50px]">
            100
          </p>
        </div>
        {/* --------- Foreigner Citizen -------- */}
        <div className="flex flex-col items-center gap-[8px]">
          <p className="text-[22px] font-[500]">Foreigner Citizen</p>
          <p className="flex justify-center items-center text-[18px] font-[500] w-[145px] h-[50px]">
            100
          </p>
        </div>
        {/* --------- Indian Student -------- */}
        <div className="flex flex-col items-center gap-[8px]">
          <p className="text-[22px] font-[500]">Indian Student</p>
          <p className="flex justify-center items-center text-[18px] font-[500] w-[145px] h-[50px]">
            100
          </p>
        </div>
        {/* --------- Foreigner Student -------- */}
        <div className="flex flex-col items-center gap-[8px]">
          <p className="text-[22px] font-[500]">Foreigner Student</p>
          <p className="flex justify-center items-center text-[18px] font-[500] w-[145px] h-[50px]">
            100
          </p>
        </div>
      </div>
    </div>
  );
};

export default PriceCategory;
