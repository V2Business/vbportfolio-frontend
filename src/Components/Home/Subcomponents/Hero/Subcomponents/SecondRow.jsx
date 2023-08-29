import React from "react";

const SecondRow = () => {
	return (
		<div className="flex justify-center 2xl:flex-nowrap xl:flex-nowrap lg:flex-nowrap md:flex-wrap sm:flex-wrap flex-wrap w-full">
			<div className="font-Lastica 2xl:text-[64px] xl:text-[64px] lg:text-[64px] md:text-[56px] sm:text-[48px] text-[48px] px-[22px] tracking-[7.04px] text-center w-full">
				<div className="flex 2xl:flex-nowrap xl:flex-nowrap md:flex-nowrap sm:flex-wrap flex-wrap gap-x-8 justify-center">
					<div className="text-center">WAITS</div>
					<div className="text-center">FOR</div>
				</div>
			</div>
			<div className="rounded-full font-Lastica 2xl:text-[48px] xl:text-[48px] lg:text-[48px] md:text-[40px] sm:text-[40px] text-[40px] w-full h-full bg-gradient-to-br from-[#7f00ff] to-[#b292fd] flex items-center justify-center text-white tracking-[11px] px-5 py-3 2xl:mx-0 xl:mx-0 lg:mx-0 md:mx-0 sm:mx-4 mx-4">
				NONE
			</div>
		</div>
	);
};

export default SecondRow;
