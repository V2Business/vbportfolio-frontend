import React from "react";
import WhiteLogo from "../../assets/Logos/Logo-white.svg";
import Insta from "../../assets/Footer/insta.svg";
import Linkedin from "../../assets/Footer/Linkedin.svg";
import Yt from "../../assets/Footer/Yt.svg";

const Footer = () => {
	return (
		<div className="bg-gradient-to-br from-[#7f00ff] to-[#b292fd] py-[23px] z-20">
			<div className="w-full justify-between flex container mx-auto items-center">
				<div className="logo flex flex-col items-center">
					<img src={WhiteLogo} alt="" className="" />
					<div className="font-Figtree text-xl text-white font-bold">
						All rights reserved
					</div>
				</div>

				<div className="flex gap-x-[28px]">
					<a href="">
						<img src={Insta} alt="" />
					</a>
					<a href="">
						<img src={Linkedin} alt="" />
					</a>
					<a href="">
						<img src={Yt} alt="" />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;
