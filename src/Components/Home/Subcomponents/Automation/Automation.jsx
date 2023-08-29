import React from "react";
import Spline from "@splinetool/react-spline";

const Card = () => {
	return (
		<div className="border-2 border-black p-[21px_25px] rounded-2xl flex flex-col gap-y-[14px]">
			<div className="2xl:h-[329px] xl:h-[329px] lg:h-[329px] md:h-[329px] sm:h-32 h-48 w-full flex justify-center items-center">
				<Spline scene="https://prod.spline.design/y5Rit0-mIQl4caqw/scene.splinecode" />
			</div>

			<div className="textGroup">
				<div className="font-Lastica text-4xl text-center tracking-[3.96px]">
					WEB DESIGN
				</div>
				<div className="text-center font-Figtree text-base leading-[29.02px] px-5">
					Lorem ipsum dolor sit amet consectetur
					<br /> adipiscing elit Ut et.
				</div>
			</div>
		</div>
	);
};

const Automation = () => {
	return (
		<div className="mt-[300px] container mx-auto">
			<div className="bg-[#7f00ff] w-[433px] h-[433px] left-0 absolute blur-[500px] -z-10"></div>
			<div className="2xl:text-5xl xl:text-5xl lg:text-5xl md:text-4xl sm:text-3xl text-3xl font-Lastica text-transparent bg-clip-text bg-gradient-to-r from-[#7f00ff] to-[#b292fd] text-center tracking-[5.28px]">
				AUTOMATION SYMPHONY
			</div>
			<div className="grid grid-cols-12 mt-2">
				<div className="col-span-1"></div>
				<div className="col-span-10 font-Figtree text-center leading-[29.20px] 2xl:text-xl xl:text-xl lg:text-xl md:text-base sm:text-sm text-sm">
					Step into a world where manual constraints become relics of the past.
					V2Business's first feat is the mastery of automation, where
					once-complex processes bow to the rhythm of efficiency. Be it
					streamlining operations, managing data flow, or optimizing customer
					interactions, V2Business composes a symphony of automated harmony.
				</div>
				<div className="col-span-1"></div>
			</div>

			<div className="flex 2xl:justify-between xl:justify-between lg:justify-between md:justify-center sm:justify-center justify-center 2xl:w-full xl:2-full lg:w-full md:w-fit sm:w-fit w-fit pt-[82px] 2xl:flex-nowrap xl:flex-nowrap lg:flex-nowrap md:flex-wrap sm:flex-wrap flex-wrap gap-y-16 2xl:mx-0 xl:mx-0 lg:mx-0 md:mx-2 sm:mx-2 mx-2">
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	);
};

export default Automation;
