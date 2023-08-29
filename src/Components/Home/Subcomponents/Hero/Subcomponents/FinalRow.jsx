import React from "react";
import Semicircles from "../../../../../assets/Hero/Semicircles.svg";

const FinalRow = () => {
	return (
		<div className="flex 2xl:flex-nowrap xl:flex-nowrap lg:flex-nowrap md:flex-wrap sm:flex-wrap flex-wrap justify-center w-full">
			<div className="text-sm font-Figtree flex flex-col 2xl:items-start xl:items-start lg:items-start md:items-center sm:items-center items-center gap-y-4 justify-center leading-[182.5%] 2xl:order-1 xl:order-1 lg:order-1 md:order-2 sm:order-2 order-2  w-fit mx-5 2xl:text-left xl:text-left lg:text-left md:text-center sm:text-center text-center">
				<div>
					Welcome to V2Business, where
					<br /> creativity knows no bounds and
					<br />
					possibilities are endless.
				</div>
				<button className="bg-black text-white px-3 py-2 rounded-xl font-bold">
					Book an appointment
				</button>
			</div>
			<div className="tracking-[7.04px] 2xl:order-2 xl:order-2 lg:order-2 md:order-1 sm:order-1 order-1">
				<div className="flex items-center gap-x-8">
					<img
						src={Semicircles}
						alt=""
						className="2xl:block xl:block lg:block md:block sm:hidden hidden w-fit"
					/>
					<div className="font-Lastica 2xl:text-[64px] xl:text-[64px] lg:text-[64px] md:text-[56px] sm:text-[48px] text-[48px] text-center">
						CREATE
					</div>
				</div>
				<div className="">
					<div className="font-Lastica 2xl:text-[64px] xl:text-[64px] lg:text-[64px] md:text-[56px] sm:text-[48px] text-[48px] text-center">
						TODAY
					</div>
				</div>
			</div>
		</div>
	);
};

export default FinalRow;
