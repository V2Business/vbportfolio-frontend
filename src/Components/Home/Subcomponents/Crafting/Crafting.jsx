import React from "react";
import Spline from "@splinetool/react-spline";

const Crafting = () => {
	return (
		<div className="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 container mx-auto">
			<div className="Crafting ">
				<div className="font-Lastica 2xl:text-5xl xl:text-5xl lg:text-5xl md:text-4xl sm:text-3xl text-3xl text-transparent bg-gradient-to-r from-[#000000] via-80% via-[#7f00ff] bg-clip-text tracking-[5.28px] leading-relaxed 2xl:text-left xl:text-left lg:text-left md:text-center sm:text-center text-center">
					CRAFTING DIGITAL WORLDS
				</div>

				<div className="text font-Figtree 2xl:leading-[59.04px] xl:leading-[59.04px] lg:leading-[59.04px] md:leading-[59.04px] sm:leading-[29.02px] leading-[29.02px] 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-xl sm:text-xl text-base 2xl:pt-[80px] xl:pt-[80px] lg:pt-[80px] md:pt-[80px] sm:pt-[20px] pt-[20px] 2xl:text-left xl:text-left lg:text-left md:text-center sm:text-center text-center 2xl:mx-0 xl:mx-0 lg:mx-0 md:mx-2 sm:mx-4 mx-5">
					Step into a world where manual constraints become relics of the past.
					V2Business's first feat is the mastery of automation, where
					once-complex processes bow to the rhythm of efficiency. Be it
					streamlining operations, managing data flow, or optimizing customer
					interactions, V2Business composes a symphony of automated harmony.
				</div>
			</div>
			<div>
				{/* <Spline scene="https://prod.spline.design/5DiBcLurE7EkgoW4/scene.splinecode" /> */}
				<Spline scene="https://prod.spline.design/y5Rit0-mIQl4caqw/scene.splinecode" />
			</div>
		</div>
	);
};

export default Crafting;
