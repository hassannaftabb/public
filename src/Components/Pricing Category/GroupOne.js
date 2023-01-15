import React from "react";

const GroupOne = () => {
  return (
    <div className="whitespace-nowrap">
      <h1 className="text-[#30303099] text-[25px] font-[500] mb-[60px]">
        Price Category:
      </h1>
      <div className="flex flex-col lg:flex-row justify-between items-center">
        {/* --------- indian citizen -------- */}
        <div className="flex flex-col items-center gap-[40px]">
          <p className="text-[22px] font-[500]">Indian Citizen</p>
          <p className="flex justify-center items-center text-[#00000099] text-[18px] font-[500] w-[145px] h-[50px] bg-white rounded-[10px] shadow-[0_4px_4px_rgba(0,0,0,0.3)]">
            100
          </p>
        </div>
        {/* --------- Foreigner Citizen -------- */}
        <div className="flex flex-col items-center gap-[40px]">
          <p className="text-[22px] font-[500]">Foreigner Citizen</p>
          <p className="flex justify-center items-center text-[#00000099] text-[18px] font-[500] w-[145px] h-[50px] bg-white rounded-[10px] shadow-[0_4px_4px_rgba(0,0,0,0.3)]">
            100
          </p>
        </div>
        {/* --------- Indian Student -------- */}
        <div className="flex flex-col items-center gap-[40px]">
          <p className="text-[22px] font-[500]">Indian Student</p>
          <p className="flex justify-center items-center text-[#00000099] text-[18px] font-[500] w-[145px] h-[50px] bg-white rounded-[10px] shadow-[0_4px_4px_rgba(0,0,0,0.3)]">
            100
          </p>
        </div>
        {/* --------- Foreigner Student -------- */}
        <div className="flex flex-col items-center gap-[40px]">
          <p className="text-[22px] font-[500]">Foreigner Student</p>
          <p className="flex justify-center items-center text-[#00000099] text-[18px] font-[500] w-[145px] h-[50px] bg-white rounded-[10px] shadow-[0_4px_4px_rgba(0,0,0,0.3)]">
            100
          </p>
        </div>
      </div>
    </div>
  );
};

export default GroupOne;
