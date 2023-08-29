import React from "react";
import Logo from "../../assets/Logos/Logo-black.svg";

const Nav = () => {
	return (
		<header className="w-full p-[33px_0px] fixed z-20 bg-white 2xl:block xl:block lg:block md:block sm:hidden hidden">
			<div className=" container mx-auto">
				<div className="flex items-center justify-between">
					<div className="Logo">
						<img src={Logo} alt="Logo" />
					</div>

					<div className="Links font-bold font-Figtree flex">
						<div className="px-[32px] text-[20px]">Home</div>
						<div className="px-[32px] text-[20px]">About</div>
						<div className="px-[32px] text-[20px]">Our Creations</div>
					</div>

					<div>
						<button className="border-black rounded-full border-2 px-5 py-2 font-Figtree font-bold text-base">
							Book an appointment
						</button>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Nav;
