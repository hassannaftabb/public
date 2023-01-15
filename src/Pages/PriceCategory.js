import React from "react";
import BottomSection from "../Components/Pricing Category/BottomSection";
import GroupOne from "../Components/Pricing Category/GroupOne";
import GroupTwo from "../Components/Pricing Category/GroupTwo";
import SecondNav from "../Components/Shared/SecondNav";

const PriceCategory = () => {
  return (
    <div className="min-h-screen bg-[#F0EBEB] w-[100%]">
      <SecondNav />
      <div className="flex flex-col gap-[70px] py-[70px] px-[80px]">
        <GroupOne />
        <GroupTwo />
        <BottomSection />
      </div>
    </div>
  );
};

export default PriceCategory;
