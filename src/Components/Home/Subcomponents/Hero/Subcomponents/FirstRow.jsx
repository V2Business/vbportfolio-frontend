import React from "react";
import TimeSvg from "../../../../../assets/Hero/timeSvg.svg";
import Trending from "../../../../../assets/Hero/Trending.svg";
import CircleCrossCircle from "../../../../../assets/Hero/CircleCrossCircle.svg";

const FirstRow = () => {
	return (
		<div className="flex h-full">
			<div className="flex  items-center">
				<div className="timeSvg 2xl:block xl:block lg:block md:block sm:hidden hidden">
					<img src={TimeSvg} alt="" className="w-fit" />
				</div>
				<div className="font-Lastica 2xl:text-[64px] xl:text-[64px] lg:text-[64px] md:text-[56px] sm:text-[48px] text-[48px] 2xl:px-[22px] xl:px-[22px] lg:px-[22px] md:px-[22px] sm:px-[10px] px-[5px] tracking-[7.04px]">
					Time
				</div>
				<div className="2xl:gap-x-[39px] xl:gap-x-[39px] lg:gap-x-[39px] md:gap-x-[39px] sm:gap-x-[12px] gap-x-[12px] items-center 2xl:flex xl:flex lg:flex md:flex sm:hidden hidden">
					<div className="trendingSvg">
						<img src={Trending} alt="" className="w-fit" />
					</div>
					<div className="CircleCrossCircleSvg">
						<img src={CircleCrossCircle} alt="" className="w-fit" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default FirstRow;
