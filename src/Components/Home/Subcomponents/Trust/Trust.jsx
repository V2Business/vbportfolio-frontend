import React from "react";
import Google from "../../../../assets/Trust/Vector.png";

const Card = () => {
	return (
		<div className="card bg-white py-8 items-center justify-center rounded-3xl w-full flex">
			<img src={Google} alt="" className="h-16 block mx-36 my-8" />
		</div>
	);
};

const Trust = () => {
	return (
		<div className="w-full bg-gradient-to-br from-[#7f00ff] to-[#b292fd] mt-[215px] py-8">
			<div className="flex flex-col gap-y-[48px]">
				<div className=" py-[53px] flex flex-col gap-y-[18px]">
					<div className="2xl:text-5xl xl:text-5xl lg:text-5xl md:text-4xl sm:text-3xl text-3xl text-white font-Lastica text-center tracking-[5.28px] 2xl:mx-0 xl:mx-0 lg:mx-0 md:mx-0 sm:mx-2 mx-2">
						FROM VISION TO REALITY
					</div>
					<div className="2xl:text-[32px] xl:text-[32px] lg:text-[32px] md:text-[24px] sm:text-[16px] text-[16px] text-white font-Lastica text-center tracking-[5.28px] 2xl:mx-0 xl:mx-0 lg:mx-0 md:mx-0 sm:mx-2 mx-2">
						TRUSTED BY BRANDS LIKE
					</div>
				</div>

				<div className="flex flex-col gap-y-8">
					<div className="gap-x-5 flex whitespace-nowrap border-box w-full animate-marquee-infinite">
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
					</div>

					<div className="gap-x-5 flex whitespace-nowrap border-box w-full animate-marquee-infinite">
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Trust;
