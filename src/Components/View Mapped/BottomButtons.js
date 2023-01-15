import React from "react";

const BottomButtons = () => {
  return (
    <div className="flex flex-col gap-3 mt-16">
      {/* ----- 1st group ------- */}
      <div className="flex gap-[15px]">
        <button className="px-[10px] py-[4px] text-white bg-[#3C5071] rounded-[4px]">
          View
        </button>
        <button className="px-[10px] py-[4px] text-white bg-[#3C5071] rounded-[4px]">
          Edit
        </button>
        <div className="flex flex-col gap-[3px] font-[500]">
          <button className="text-[12px] px-[10px] py-[1px] bg-[#139907] text-white rounded-[4px]">
            Active
          </button>
          <button className="text-[12px] px-[10px] py-[1px] bg-[#8A070F] text-white rounded-[4px]">
            Deactive
          </button>
        </div>
      </div>
      {/* ----- 2nd group ------- */}
      <div className="flex gap-[15px]">
        <button className="px-[10px] py-[4px] text-white bg-[#3C5071] rounded-[4px]">
          View
        </button>
        <button className="px-[10px] py-[4px] text-white bg-[#3C5071] rounded-[4px]">
          Edit
        </button>
        <div className="flex flex-col gap-[3px] font-[500]">
          <button className="text-[12px] px-[10px] py-[1px] bg-[#139907] text-white rounded-[4px]">
            Active
          </button>
          <button className="text-[12px] px-[10px] py-[1px] bg-[#8A070F] text-white rounded-[4px]">
            Deactive
          </button>
        </div>
      </div>
      {/* ----- 3rd group ------- */}
      <div className="flex gap-[15px]">
        <button className="px-[10px] py-[4px] text-white bg-[#3C5071] rounded-[4px]">
          View
        </button>
        <button className="px-[10px] py-[4px] text-white bg-[#3C5071] rounded-[4px]">
          Edit
        </button>
        <div className="flex flex-col gap-[3px] font-[500]">
          <button className="text-[12px] px-[10px] py-[1px] bg-[#139907] text-white rounded-[4px]">
            Active
          </button>
          <button className="text-[12px] px-[10px] py-[1px] bg-[#8A070F] text-white rounded-[4px]">
            Deactive
          </button>
        </div>
      </div>
      {/* ----- 4th group ------- */}
      <div className="flex gap-[15px]">
        <button className="px-[10px] py-[4px] text-white bg-[#3C5071] rounded-[4px]">
          View
        </button>
        <button className="px-[10px] py-[4px] text-white bg-[#3C5071] rounded-[4px]">
          Edit
        </button>
        <div className="flex flex-col gap-[3px] font-[500]">
          <button className="text-[12px] px-[10px] py-[1px] bg-[#139907] text-white rounded-[4px]">
            Active
          </button>
          <button className="text-[12px] px-[10px] py-[1px] bg-[#8A070F] text-white rounded-[4px]">
            Deactive
          </button>
        </div>
      </div>
    </div>
  );
};

export default BottomButtons;
