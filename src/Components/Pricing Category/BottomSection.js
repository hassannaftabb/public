import { Checkbox } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const BottomSection = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* ------------------- */}
      <div className="flex flex-col lg:flex-row justify-between items-center lg:mt-[130px] whitespace-nowrap">
        {/* ----------- checkbox side --------- */}
        <div className="flex items-center">
          <Checkbox
            defaultChecked
            color="default"
            name="termsNCondition"
            id="termsNCondition"
          />
          <label
            className="text-[22px] text-[#30303099]"
            htmlFor="termsNCondition"
          >
            PREVIEW ALL DETAILS
          </label>
        </div>
        {/* -------- button side ---------- */}
        <div className="flex flex-col lg:flex-row gap-[1rem] lg:gap-[50px] mt-[1rem] lg:mt-0">
          <button
            className="w-[190px] h-[48px] bg-[#314668] text-[26px] font-[700] text-white rounded-[10px]"
          >
            BACK
          </button>
          <button onClick={() => navigate("/preview-details")} className="w-[190px] h-[48px] bg-[#314668] text-[26px] font-[700] text-white rounded-[10px]">
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
};

export default BottomSection;
