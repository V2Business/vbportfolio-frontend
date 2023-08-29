import React from "react";
import ShapesCrosses from "../../../../assets/Hero/shapesCrosses.svg";
import FirstRow from "./Subcomponents/FirstRow";
import SecondRow from "./Subcomponents/SecondRow";
import FinalRow from "./Subcomponents/FinalRow";

const Hero = () => {
	return (
		<div className="hero container mx-auto h-screen justify-center items-center relative">
			<div className=" w-full justify-between items-center h-full flex">
				<div className="2xl:block xl:block lg:block md:hidden sm:hidden hidden">
					<img src={ShapesCrosses} alt="" className="" />
				</div>
				<div className="relative flex justify-between items-center flex-col gap-y-4">
					<FirstRow />
					<SecondRow />
					<FinalRow />
				</div>
				<div className="2xl:block xl:block lg:block md:hidden sm:hidden hidden">
					<img src={ShapesCrosses} alt="" className="" />
				</div>
			</div>

			<div className="absolute bg-[#b292fd] -z-20 w-[466px] h-[466px] bottom-0 rounded-full right-0 blur-[200px]"></div>
		</div>
	);
};

export default Hero;
